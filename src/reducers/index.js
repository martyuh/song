import {combineReducers} from 'redux'

const songsReducer = () =>{
    return[
        {
            title:'No scrubs',
            duration: '4:05'
        },
        {
            title:'Macarena',
            duration: '2:30'
        },
        {
            title: 'All Star',
            duration: '3:15'
        },
        {
            title: 'I want it that way',
            duration: '4:03'
        }
    ]
}

 const selectedSongReducer = (selectedSong=null,action) =>{

    if(action.type==='SONG_SELECTED'){
        // returns song object that is selected
        //updates state 
        return action.payload
    }
    return selectedSong
    // return the current song already selected
    
} 



export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
})