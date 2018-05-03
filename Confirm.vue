<template>
    <v-dialog persistent v-model="active" :max-width="width">
      <v-card tile>
          <v-card-text>{{content}}</v-card-text>
          <v-spacer />
          <v-card-actions>
              <v-btn color="green darken-1" flat @click="onConfirm">{{confirmText}}</v-btn>
              <v-btn color="green darken-1" flat @click="onCancel">{{cancelText}}</v-btn>
          </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {
      onConfirm() {
          this.$emit('confirm')
          this.$destroy()
      },
      onCancel() {
          this.$emit('cancel')
          this.$destroy()
      }
  },
  props: [
      'width', 'title', 'content', 'confirmText', 'cancelText'
  ],
  data() {
      return {
          active: true
      }
  },
  destroyed() {
    console.log(this.$el)
     document.body.removeChild(this.$el)
  }
}
</script>
