import moment from 'moment'

export const dateMixin = {
  methods: {
    formatDate(date, format) {
      return moment(date).format(format)
    },
  },
}
