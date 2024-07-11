import { create } from 'zustand'

export const useCardPopup = create((set) => ({
  cardInfo: {},
  openPopup: false,
  updateCardInfo: (data) => set({ cardInfo: data }),
  togglePopup: (data) => set({ openPopup: data }),
}))
