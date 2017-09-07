import React from 'react'
import SubscribeForm from 'react-mailchimp-subscribe'

const formProps = {
  action: '//chicagojsconf.us16.list-manage.com/subscribe/post?u=55c1be8b418eb495e19ef9e2e&amp;id=48cb30f305',
  messages: {
    inputPlaceholder: "Enter Email",
    btnLabel: "Subscribe",
    sending: "Loading...",
    success: "Thanks for your support!",
    error: "Mind trying again?"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}

const Form = () => <SubscribeFrom {...formProps}/>

const MailingListPage = () => (
  <div style={{margin: '60px auto', textAlign: 'center', borderRadius: 4, border: '1px solid #eee', padding: 20, maxWidth: 400}}>
    <h1>Chicago JS Conf Mailing List</h1>
    <SubscribeForm {...formProps} />
  </div>
)

export default MailingListPage
