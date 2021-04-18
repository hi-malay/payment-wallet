import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { ContextMain } from "./../common/Drawer/ContextMain"
import ReactGA from 'react-ga'


class Charts extends React.Component<any,
    {
        name: any,
        amount: any
    }> {

    constructor(props: any) {
        super(props);
        this.state =
        {
            name: null,
            amount: null
        }

    }
    componentDidMount = () => {
        const amount = this.context.userData[0].map((data: any) => data.amount)
        const name = this.context.userData[0].map((data: any) => data.name)
        this.setState({ name, amount })

        ReactGA.set({ page: '/Chart' })
        ReactGA.pageview('/Chart');
        ReactGA.event({
            category: `Chart Cicked`,
            action: 'Chart Cicked',
            label: 'Chart Cicked'
        });
    }

    render() {
        let chardData = {
            labels: this.state.name,
            datasets: [
                {
                    label: 'Amount in wallet',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    data: this.state.amount
                }
            ]
        }

        return (
            <div>
                <Bar
                    data={chardData}
                    options={{
                        title: {
                            display: true,
                            text: 'Amount in wallet of Known',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}

Charts.contextType = ContextMain
export default Charts;