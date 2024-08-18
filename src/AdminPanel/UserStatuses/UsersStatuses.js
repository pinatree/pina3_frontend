import React from "react";
import './UsersStatuses.css'; // Import the CSS file

class UsersStatuses extends React.Component {

    constructor(props){
        super(props)
        this._tableData = [];
        this.loadTableData();
    }

    render() {
        return(
            <div>
                <p className="userStatusCaption">Статусы пользователей</p>
                <table width="100%" className="userStatusesTable">
                    <thead>
                        <tr>
                            <th className="userStatusesTH">
                                Номер пользователя
                            </th>
                            <th className="userStatusesTH">
                                Имя пользователя
                            </th>
                            <th className="userStatusesTH">
                                Статус
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this._tableData.map(
                            (item, index) => (
                                <tr data-index={index}>
                                    <td className="userStatusesTD">{item.userId}</td>
                                    <td className="userStatusesTD">{item.userName}</td>
                                    <td className="userStatusesTD">{item.status}</td>
                                </tr>
                            )
                        )
                    }  
                    </tbody>
                </table>
            </div>
        );
    }

    loadTableData() {
        let getDataPromise = this.getMockTableData()
        let self = this;
        getDataPromise.then(
            //success
            (tableData) => {
                self._tableData = tableData;
                self.forceUpdate();
            },
            //error
            (oError) => {
                alert(oError);
            }
        )
    }

    getMockTableData() {
        return new Promise(
            (fnSuccess, fnReject) => {
                var millisecondsToWait = 2000;
                setTimeout(
                    () => {
                        let moqData = [
                            {
                                userId: 1,
                                userName: "Alex",
                                status: "main"
                            },
                            {
                                userId: 2,
                                userName: "Ivan",
                                status: "additionalInfo"
                            },
                            {
                                userId: 3,
                                userName: "Petr",
                                status: "technicalSupport"
                            },
                            {
                                userId: 4,
                                userName: "Vasiliy",
                                status: "main"
                            },
                            {
                                userId: 5,
                                userName: "Aliya",
                                status: "main"
                            },
                        ];

                        fnSuccess(moqData);
                        // Whatever you want to do after the wait
                    },
                    millisecondsToWait
                );
            }
        )
    }
}

export default UsersStatuses;