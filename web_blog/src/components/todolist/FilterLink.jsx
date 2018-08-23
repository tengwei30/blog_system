/**
 * Created by xiaosong
 * **/

import React from 'react';
import { connect } from "react-redux";
import { setVisibility } from "../../actions";
import PropTypes from 'prop-types'


const FilterLink = ({active, children, onClick}) => (
    <div className="todo-tab_item">
        <a href="#" style={{ color: active ? '#f01414' : '#4d555d' }}
           onClick={(e) => {
               e.preventDefault()
               onClick()
           }}>
            { children }
        </a>
    </div>
)

const mapStateToProps = (state, ownProps) => {	// ownProps 就是拿到它自身的属性，filter是咱自定义的一个属性，可以通过ownProps来取到，下同
    // console.log('state', state)
    return {
        active: ownProps.filter === state.VisibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('dispatch', dispatch)
    console.log('ownProps', ownProps)
    return {
        onClick: () => {
            dispatch(setVisibility(ownProps.filter))
        }
    }
}

// 强校验
FilterLink.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)