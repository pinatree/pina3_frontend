import React from "react";

class ClientsRequests extends React.Component {

    constructor(props){
        super(props)
        this._clientsRequests = [];
        this.loadClientsRequests();
    }

    render() {
        return(
            <div>
                <p className="userStatusCaption">Запросы на обслуживание</p>
                <table width="100%" className="userStatusesTable">
                    <thead>
                        <tr>
                            <th className="userStatusesTH">
                                Дата обращения
                            </th>
                            <th className="userStatusesTH">
                                Имя пользователя
                            </th>
                            <th className="userStatusesTH">
                                Тип обращения
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this._clientsRequests.map(
                            (item, index) => (
                                <tr data-index={index}>
                                    <td className="userStatusesTD">{item.date}</td>
                                    <td className="userStatusesTD">{item.user.login}</td>
                                    <td className="userStatusesTD">{item.type.name}</td>
                                </tr>
                            )
                        )
                    }  
                    </tbody>
                </table>
            </div>
        );
    }

    loadClientsRequests() {
        this._clientsRequests = this.getClientsRequests();
    }

    getClientsRequests() {
        
        let moqData = [
            {
                date: "01.01.2020",
                type: {
                    id: 26,
                    name: "Разработка сайта"
                },
                user: {
                    id: 5,
                    login: "user_1"
                }
            },
            {
                date: "02.01.2020",
                type: {
                    id: 2,
                    name: "Разработка мобильного приложения"
                },
                user: {
                    id: 6,
                    login: "kek1"
                }
            },
            {
                date: "12.01.2020",
                type: {
                    id: 1,
                    name: "Разработка сайта"
                },
                user: {
                    id: 6,
                    login: "kek1"
                }
            },
            {
                date: "01.02.2020",
                type: {
                    id: 3,
                    name: "AI решение"
                },
                user: {
                    id: 8,
                    login: "asdqwe"
                }
            },
            {
                date: "02.02.2020",
                type: {
                    id: 4,
                    name: "SEO"
                },
                user: {
                    id: 543,
                    login: "company_business_account_1"
                }
            }
        ];

        return moqData;
    }
}

export default ClientsRequests;