import React from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import {setPosts} from "../store/postReducer";
import Posts from "./Posts";

const handleChange =(id, setPosts) => {
    console.log(id);
    setPosts(id)
}

const User = ({ location, setPosts }) => {
     const {state:{ selectedUser}} = location;
    console.log(location);
    return(
        <div>
    {/*<h1>{state.selectedUser.name} screen</h1>*/}
            <p onClick={() => handleChange(selectedUser.id,setPosts )}>POSTS </p>
        </div>
    );
};
const mapStateToProps = (state) =>{
    return{users: state.userReducer.users,
        isAuthenticated: state.userReducer.isAuthenticated,
    }
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ setPosts}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(User);