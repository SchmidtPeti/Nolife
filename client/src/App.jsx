import React from 'react'
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import {ChannelContainer,ChannelListContainer, Auth} from './components/index'

import './App.css'

require('dotenv').config()
//using rafce to make simple componenet with es7 plugin
const apiKey = process.env.REACT_APP_API_KEY;
const client = StreamChat.getInstance(apiKey)
const authToken = false;

const App = () => {
  if(!authToken) return <Auth />
  return (
    <div className='app__wrapper'>
       <Chat client={client} theme="team light">
            <ChannelListContainer />
            <ChannelContainer />
       </Chat>
    </div>
  )
}

export default App