<template>
  <tr @click="onContactClick()">
    <td>
      {{ contact.name }}
    </td>
    <td class="address-cell">
      {{ address }}
    </td>
    <td>
      {{ contact.phone }}
    </td>
  </tr>
</template>


<script>
export default {
  props: {
    contact: Object,
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    onContactClick() {
      this.$router.push('/contact/' + this.contact._id);
    },
  },
  computed: {
    address() {
      return this.contact.address.city + ', ' + this.contact.address.street;
    },
  },
  created() {},
};
</script>