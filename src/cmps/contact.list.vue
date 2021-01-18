<template>
  <div class="contact-list-container container" v-loading="isLoaded">
    <div class="contact-list-content">
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Address</td>
          <td>Phone</td>
        </tr>
      </thead>
      <tbody>
        <contact-preview
          v-for="(contact, idx) in contacts"
          :key="idx"
          :contact="contact"
        />
      </tbody>
    </table>
        </div>
  </div>
</template>


<script>
import ContactPreview from './contact.preview.vue';
export default {
  props: {
    contacts: Array,
    filterBy: Object,
  },
  data() {
    return {};
  },
  components: { ContactPreview },
  methods: {},
  computed: {
    isLoaded() {
      if (this.contactsToShow && !filterBy.term) return true;
    },
  },
  created() {},
};
</script>