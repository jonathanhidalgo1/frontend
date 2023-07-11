import React from "react";
import ListComponent from "./ListComponent";

export default class UserLists extends React.Component{
    state = { lists: [], loading: true}
    async componentDidMount(){
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        config.headers['Authorization']='Token 01d31064d7ea4b3a1daed4383b5bf60fc9d479ac'

        var url = "http://127.0.0.1:8000/list/"
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data)
        this.setState({lists: data, loading: false});
    }

    render(){

        const listsApi = this.state.lists;
        return (
            <div>
                
                {listsApi.map(list => <ListComponent key={list.id} listName={list.name} />)}
            </div>
        )
        }
    }
    