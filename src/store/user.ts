import { defineStore } from "pinia";
export const useUserStore = defineStore({
  id: "User",
  state: () => ({
    username: 'Miku',
    score: 1
  }),
  getters: {
    getRoleMessage (): string {
      return (this.username && this.username.length > 0) ? `You Are ${this.username}` : 'You Are Anonymous'
    },
    doubleScore (): number {
      return this.score * 2
    }
  },
  actions: {
    setScore (score: number) {
      this.score = score
    },
    setUserName (username: string) {
      this.username = username
    }
  }
})