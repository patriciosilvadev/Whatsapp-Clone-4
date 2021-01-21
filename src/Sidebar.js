import React from 'react'
import "./Sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
        return (
                <div className= 'sidebar'>
                        <div className="sidebar_header">
                                <Avatar src="https://images.indianexpress.com/2014/03/JoeBiden-1-e1611213123220.jpg"/>
                                <div className="sidebar_headerRight">
                                        <IconButton>
                                                <DonutLargeIcon />
                                        </IconButton>
                                        <IconButton>
                                                <ChatIcon/>
                                        </IconButton>
                                        <IconButton>
                                                <MoreVertIcon/>
                                        </IconButton>
                                </div>
                                
                        </div>
                        <div className="sidebar_search">
                                <div className="sidebar_searchContainer">
                                        <SearchOutlinedIcon/>
                                        <input placeholder = "Search or start new chat" type="text"/>
                                </div>                
                        </div>
                        <div className="sidebar_chat">
                                <SidebarChat />
                                <SidebarChat />
                                <SidebarChat />
                                <SidebarChat />
                        </div>
                </div>
        );
}

export default Sidebar
