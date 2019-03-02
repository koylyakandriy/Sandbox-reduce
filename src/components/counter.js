import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './counter.css'

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h1 className="text-center">Redux in Action</h1>
      <h2 className="text-center">{counter}</h2>
      <div className="d-flex justify-content-center">  
        <button className="btn btn-primary btn-lg mr-2"
                onClick={dec}>DEC</button>
        <button className="btn btn-primary btn-lg mr-2"
                onClick={inc}>INC</button>
        <button className="btn btn-primary btn-lg"
                onClick={rnd}>RND</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps, actions)(Counter);