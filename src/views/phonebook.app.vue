<template>
  <div class="feed-app">
    <div class="main-container">
      <contact-list :contacts="contactsToShow" />
    </div>
  </div>
</template>

<script>
import { contactService } from '@/services/contact.service';
import contactList from '@/cmps/contact.list';

export default {
  name: 'phonebook-app',
  data() {
    return {
      filterBy: {
        term: '',
      },
    };
  },
  computed: {
    contactsToShow() {
      return this.$store.getters.contactsForDisplay;
    },
  },
  components: {
    contactList,
  },
  methods: {
    clearFilter() {
      this.filterBy.term = '';
      this.onFilter();
    },
    async onSubmit() {
      if (!this.form.email || !this.form.message) return;
      this.isLoading = true;
      const comment = this.form;
      const savedMsg = await this.$store.dispatch({
        type: 'addComment',
        comment,
      });
      try {
        this.form = { message: '', email: '' };
        this.successMsg();
      } catch (err) {
        console.log('cannot add comment', err);
      }
      this.isLoading = false;
    },
    successMsg() {
      this.$message({
        message: 'Comment added successfully!',
        type: 'success',
      });
    },
    onFilter() {
      const filter = JSON.parse(JSON.stringify(this.filterBy));
      this.$store.dispatch({ type: 'setFilter', filter });
    },
  },
  created() {},
};
</script>
