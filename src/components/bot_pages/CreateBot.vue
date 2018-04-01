<template>
  <div class="create-bot">
    <b-field label="Robot name">
      <b-input placeholder="Type the name of your robot" type="text"></b-input>
    </b-field>

    <b-field label="Segment">
      <b-taginput
          v-model="tags"
          placeholder="Enter segments followed by commas"
          class="input-tags"
          size="is-small">
      </b-taginput>
    </b-field>

    <span class="label">Choose the type of privacy</span>
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

    <b-field label="Original language (required)">
      <b-input placeholder="Choose a source language" type="text"></b-input>
    </b-field>
    <span class="form-help">Our bot is multilingual, you can add more language later on</span>

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
