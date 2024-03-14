import { createPinia } from 'pinia';

export const pinia = createPinia();

export const useTeamStore = pinia.createStore({
  state: () => ({
    teamMembers: [], 
  }),
  actions: {
    addTeamMember(member) {
      this.teamMembers.push(member);
    },
    
  },
});
