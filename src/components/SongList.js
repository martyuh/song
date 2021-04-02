import React from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../actions'


const SongList = (props) => {

    const renderList = () =>{
        return props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        onClick={()=>{props.selectedSong(song)}}
                        className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    return (
        <div className='ui divided list'>
           {renderList()}
           
        </div>
    )
}

// state variable has state of all reducers
const mapStateToProps = (state) =>{
    // object will always be returned and will be props within this component

return ({ songs:state.songs })
}

const mapDispatchToProps = (dispatch) =>{
    return{
        selectedSong:  song =>dispatch(selectSong(song))
    }
}

// second parantheses is just an embedded function within connect that allows an argument to be passed in
//you can also pass in the dispatch directly into the connect component as {selectSong} which can also be dispatched to the reducers, where you don't need to provide the dispatch function because connect conducts a special operation where it calls the dispatch function for you. 
export default connect(mapStateToProps,mapDispatchToProps)(SongList)
