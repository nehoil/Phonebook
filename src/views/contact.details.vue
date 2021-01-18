<template>
  <div class="contact-details-container" v-if="contact">
    <div class="contact-details-content">
      <div class="content-top-container">
        <div class="contact-top-content container">
        <div class="back-link">
              <router-link to="/">
                {{ '< Back' }}
              </router-link>
            </div>
          <div class="contact-links">
          </div>
          <div class="avatar">
            <avatar :username="contact.name"></avatar>
          </div>
          <div class="contact-name">
            {{ contact.name }}
          </div>
          <div class="phone">
            {{ contact.phone }}
          </div>
        </div>
                </div>

      </div>
      <div class="contact-bottom container">
        <div class="bottom-title">OTHER DETAILS</div>
        <div class="details-item">
          <div class="details-icon">
            <i class="el-icon-location-outline"></i>
          </div>
          <div class="details-txt">
            <div class="title">Address</div>
            <div class="content">
              {{
                contact.address.street +
                ', ' +
                contact.address.city +
                ', ' +
                contact.address.suite +
                ', ' +
                contact.address.zipcode
              }}
            </div>
          </div>
        </div>
        <div class="details-item">
          <div class="details-icon">
            <i class="el-icon-message"></i>
          </div>
          <div class="details-txt">
            <div class="title">Email</div>
            <div class="content">
              {{ contact.email }}
            </div>
          </div>
        </div>
        <div class="details-item">
          <div class="details-icon">
            <i class="el-icon-link"></i>
          </div>
          <div class="details-txt">
            <div class="title">Website</div>
            <div class="content">
              <a :href="'http://' + contact.website">
                {{ contact.website }}
              </a>
            </div>
          </div>
        </div>
        <div class="details-item">
          <div class="details-icon">
            <i class="el-icon-office-building"></i>
          </div>
          <div class="details-txt">
            <div class="title">Company</div>
            <div class="content">
              {{
                contact.company.name +
                ' - ' +
                contact.company.catchPhrase +
                ', ' +
                contact.company.bs
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Avatar from 'vue-avatar';

import { contactService } from '@/services/contact.service';

export default {
  name: 'phonebook-app',
  data() {
    return {
      testContact: this.contact,
    };
  },
  computed: {
    contact() {
      return this.$store.getters.contactForDisplay;
    },
  },
  components: {
    Avatar,
  },
  methods: {},
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch({
      type: 'loadContact',
      id,
    });
  },
};
</script>
