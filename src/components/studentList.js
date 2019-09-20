

import React from "react";
import { connect } from "react-redux";
import { fetchStudent } from "../actions/studentAction";


class StudentList extends React.Component {
    componentDidMount() {
        console.log('props1', this.props)
        this.props.fetchStudent();
        console.log('props2', this.props)
    }

    render() {
     
        console.log("sth",this.props)
        const { error, loading, getStudentData } = this.props;
        if (error) {
            return <div>ERROR! {error.message}</div>
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <ul>
                {getStudentData.map(data =>
                    <li key={data._id}>{data.name}</li>
                )}
            </ul>
        );
       
    }
}

//thằng studentRoot phải đặt trùng tên với rootReducer
const mapStateToProps = ({studentRoot}) => ({
    getStudentData: studentRoot.items,
    loading: studentRoot.loading,
    error: studentRoot.error
});

const mapDispatchToProps = dispatch => ({
    fetchStudent: () => dispatch(fetchStudent()),  
  })

export default connect(mapStateToProps,mapDispatchToProps)(StudentList);