import { contactService } from '@/services/contact.service';

export default {
  strict: true,
  state: {
    isLoading: false,
    contacts: [],
    contact: null,
    filterBy: {
      term: null
    },
  },
  getters: {
    contactsForDisplay(state) {
      return state.contacts
    },
    contactForDisplay(state) {
      return state.contact
    },
    isLoading(state) {
      return state.isLoading
    },
    filterBy(state) {
      return state.filterBy
    },
  },
  mutations: {
    setContacts(state, { contacts }) {
      state.contacts = contacts
    },
    setContact(state, { contact }) {
      state.contact = contact
    },
    setLoading(state, { isLoading }) {
      state.isLoading = isLoading
    },
    addContact(state, { savedContact }) {
      state.contacts.push(savedContact)
    },
    updateContact(state, { savedContact }) {
      const idx = state.contacts.findIndex(currContact => currContact._id === savedContact._id)
      state.contacts.splice(idx, 1, savedContact)
    },
    removeContact(state, { id }) {
      const idx = state.contacts.findIndex(contact => contact._id === id)
      state.contacts.splice(idx, 1)
    },
    setFilter(state, { filter }) {
      state.filterBy = filter
    },
    setSort(state, { sort }) {
      state.filterBy = sort
    }
  },
  actions: {
    async loadContact({ commit }, { id }) {
      try {
        commit({ type: 'setLoading', isLoading: true })
        var contact = await contactService.getById(id)
        commit({ type: 'setContact', contact })
      } catch (err) {
        console.log(`Had issues getting from server`, err)
      } finally{
        commit({ type: 'setLoading', isLoading: false })
      }
    },
    async loadContacts(context) {
      try {
        context.commit({ type: 'setLoading', isLoading: true })
        const filterBy = context.getters.filterBy
        var contacts = await contactService.query(filterBy)
        context.commit({ type: 'setContacts', contacts })
      } catch (err) {
        console.log(`Had issues getting from server`, err)
      } finally{
        context.commit({ type: 'setLoading', isLoading: false })
      }
    },
    async removeContact(context, { id }) {
      await contactService.remove(id)
      context.commit({ type: 'removeContact', id })
    },
    setFilter({ commit, state }, { filter }) {
      commit({ type: 'setFilter', filter })
      contactService.query(state.filterBy)
        .then(contacts => {
          commit({ type: 'setContacts', contacts })
        })
    },
    setSort({ commit, state }, { sort }) {
      commit({ type: 'setSort', sort })
      contactService.query(state.filterBy)
        .then(contacts => {
          commit({ type: 'setContacts', contacts })
        })
    }
  }
}
