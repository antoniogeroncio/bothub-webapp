<template>
  <div class="modal-body">
    <b-field label="Robot name">
      <b-input placeholder="Type the name of your robot" type="text"></b-input>
    </b-field>

    <b-field label="Segment">
      <b-input placeholder="Enter segments followed by commas" type="text"></b-input>
    </b-field>

      <span>Choose the type of privacy</span>
    <div class="block">
      <b-radio v-model="radio"
          native-value="Public">
          Public
      </b-radio>
      <b-radio v-model="radio"
          native-value="Private">
          Private
      </b-radio>
    </div>

    <b-field label="riginal language (required)">
      <b-taginput
          v-model="tags"
          placeholder="Choose a source language"
          size="is-small">
      </b-taginput>
    </b-field>
    <span>Our bot is multilingual, you can add more language later on</span>

    <div class="login-action">
      <button class="btn-secondary btn-login">Create</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateBot'
}
</script>
