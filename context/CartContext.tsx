"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { Artwork } from "@/lib/artworks";

export type CartItem = {
  slug: string;
  title: string;
  artist: string;
  price: number;
  image: string;
  qty: number;
};

type State = { items: CartItem[] };

type Action =
  | { type: "ADD"; artwork: Artwork }
  | { type: "REMOVE"; slug: string }
  | { type: "SET_QTY"; slug: string; qty: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; state: State };

const STORAGE_KEY = "atelier-cart-v1";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.slug === action.artwork.slug);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.slug === action.artwork.slug ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            slug: action.artwork.slug,
            title: action.artwork.title,
            artist: action.artwork.artist,
            price: action.artwork.price,
            image: action.artwork.image,
            qty: 1,
          },
        ],
      };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.slug !== action.slug) };
    case "SET_QTY":
      return {
        items: state.items
          .map((i) =>
            i.slug === action.slug ? { ...i, qty: Math.max(1, action.qty) } : i
          )
          .filter((i) => i.qty > 0),
      };
    case "CLEAR":
      return { items: [] };
    case "HYDRATE":
      return action.state;
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  add: (artwork: Artwork) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "HYDRATE", state: JSON.parse(raw) });
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  // Persist on change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota / privacy mode */
    }
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    const count = state.items.reduce((n, i) => n + i.qty, 0);
    const subtotal = state.items.reduce((n, i) => n + i.qty * i.price, 0);
    return {
      items: state.items,
      add: (artwork) => dispatch({ type: "ADD", artwork }),
      remove: (slug) => dispatch({ type: "REMOVE", slug }),
      setQty: (slug, qty) => dispatch({ type: "SET_QTY", slug, qty }),
      clear: () => dispatch({ type: "CLEAR" }),
      count,
      subtotal,
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
