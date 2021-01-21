import { Avatar, Button, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import React from 'react'
import "./Chat.css"
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';

const Chat = () => {
        return (
                <div>
                        <div className="chat_header">
                                <Avatar/>

                                <div className="chat_headerInfo">
                                        <h3>Room name</h3>
                                        <p>Last seen...</p>
                                </div>

                                <div className="char_headerRight">
                                        <IconButton>
                                                <SearchOutlined/>
                                        </IconButton>
                                        <IconButton>
                                                <AttachFileOutlinedIcon />
                                        </IconButton>
                                        <IconButton>
                                                <MoreVertOutlinedIcon />
                                        </IconButton>
                                </div>
                        </div>
                        <div className="chat_body">
                                <p className="chat_message">
                                <span className="chat_name">Vishal</span>
                                        This is a message
                                <span className="chat_timestamp">{new Date().toUTCString()}</span>
                                </p>

                                <p className="chat_message chat_receiver">
                                <span className="chat_name">Vishal</span>
                                        This is a message
                                <span className="chat_timestamp">{new Date().toUTCString()}</span>
                                </p>

                                <p className="chat_message">
                                <span className="chat_name">Vishal</span>
                                        This is a message
                                <span className="chat_timestamp">{new Date().toUTCString()}</span>
                                </p>
                                <p className="chat_message">
                                <span className="chat_name">Vishal</span>
                                        This is a message
                                <span className="chat_timestamp">{new Date().toUTCString()}</span>
                                </p>
                        </div>
                        <div className="chat_footer">
                                <IconButton>
                                <InsertEmoticonOutlinedIcon/>
                                </IconButton>
                                <form>
                                        <input placeholder="Type a message" type="text"/>
                                        <button type="sumbit">Send a message</button>      
                                </form>
                                <IconButton>
                                <MicNoneOutlinedIcon/>  
                                </IconButton>
                        </div>
                </div>
        )
}

export default Chat
