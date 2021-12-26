
   
import React, { Component } from 'react'

export default class HigherOrderComponent extends Component {
    // PROGRESSION 1 | DEFINE THE STATE
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

            ]
        }
    }

    // PROGRESSION 2 | LIST ALL ITEMS
    renderItems = () => {
        let data = this.state.userData;
        let new_data = data.map((item) => {
            return <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>ID : {item.id} </span>
                    <span>Name : {item.name} </span>
                    <span>User Type : {item.user_type} </span>
                </li>
            </React.Fragment>
        })
        return new_data;
    }

    // PROGRESSION 3 | LIST ALL DATA BASED ON USERTYPE
    renderItemsOnType = (type) => {
        let data = this.state.userData;
        let new_data = data.filter((item) => {
            return item.user_type === type;
        })
            .map((item) => {
                return <React.Fragment>
                    <li className="list-elements">
                        <span>ID : {item.id} </span>
                        <span>Name : {item.name} </span>
                        <span>User Type : {item.user_type} </span>
                    </li>
                </React.Fragment>
            })
        return new_data
    }

    // PROGRESSION 4 | FILTER ALL DATA STARTING WITH THE LETTER J
    renderItemsOnLetterJ = () => {
        let data = this.state.userData;
        let new_data = data.filter((item) => {
            return item.name.startsWith("J");
        })
            .map((item) => {
                return <React.Fragment>
                    <li className="list-elements">
                        <span>ID : {item.id} </span>
                        <span>Name : {item.name} </span>
                        <span>User Type : {item.user_type} </span>
                    </li>
                </React.Fragment>
            })
        return new_data
    }

    // PROGRESSION 5 | FILTER DATA BASED ON AGE
    renderItemsOnAge = () => {
        let data = this.state.userData;
        let new_data = data.filter((item) => {
            return item.age > 28 && item.age <= 50;
        })
            .map((item) => {
                return <React.Fragment>
                    <li className="list-elements">
                        <span>ID : {item.id} </span>
                        <span>Name : {item.name} </span>
                        <span>User Type : {item.user_type} </span>
                    </li>
                </React.Fragment>
            })
        return new_data
    }

    // PROGRESSION 6 | FIND THE TOTAL EXPERIENCE OF THE DESIGNERS
    renderItemsOnTotalExp = () => {
        let data = this.state.userData;
        let new_data = data.filter((item) => {
            return item.user_type === 'Designer';
        })
            .reduce((a, b) => {
                return a.years + b.years;
            })
        return <React.Fragment>
            <li className="list-elements">
                <span>Total Years : {new_data} </span>
            </li>
        </React.Fragment>
    }

    render() {
        return (
            <React.Fragment>
                <h1>Display all items</h1>
                <div className="box">
                    <ul>{this.renderItems()}</ul>
                </div>
                <h1>Display based on type</h1>
                <div className="box">
                    <ul>{this.renderItemsOnType('Designer')}</ul>
                </div>
                <h1>Filter all data starting with J</h1>
                <div className="box">
                    <ul>{this.renderItemsOnLetterJ()}</ul>
                </div>
                <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
                <div className="box">
                    <ul>{this.renderItemsOnAge()}</ul>
                </div>
                <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
                <div className="box">
                    <ul>{this.renderItemsOnTotalExp()}</ul>
                </div>
            </React.Fragment>
        )
    }
}