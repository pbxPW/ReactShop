import React from "react";

export default class NumberOfItemsOnPageSelector extends React.Component {
    render() {
        return (
            <div className="NumberOfItemsOnPageSelector">
                <select defaultValue="20">
                    <option value="20">20</option>
                    <option value="40">40</option>
                    <option value="80">80</option>
                    <option value="all">All</option>
                </select>

            </div>
        )
    }
}



