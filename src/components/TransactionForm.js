import React, { PureComponent } from 'react'
import axios from 'axios'

class TransactionForm extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            amount: 1,
            customers: [],
            sender: null,
            receiver: null,
            maxSender: 99999,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onFromSelectChange = this.onFromSelectChange.bind(this);
        this.onToSelectChange = this.onToSelectChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        let {sender, receiver, amount} = this.state;
        let formData = {
            from: sender,
            to: receiver,
            amount: amount
        }
        axios.post('http://localhost:5000/transfer', formData)
        .then(response=>{
            if(response.data.status){
                alert(response.data.message);
                window.location.reload();
            }else{
                alert('Something went wrong!\n'+response.data.message);
            }
        }).catch(err=>{
            alert('Something went wrong!\nTry again later...');
            console.log('Error!\n'+err);
        })
    }

    onAmountChange(e){
        this.setState({
            amount: e.target.value
        });
    }

    onFromSelectChange(e){
        this.setState({
            sender: Number(e.target.value.split(';')[0]),
            maxSender: Number(e.target.value.split(';')[1])
        }, ()=>{
            if(this.state.amount>this.state.maxSender)
            this.setState({amount: Number(this.state.maxSender)});
        });
    }

    onToSelectChange(e){
        this.setState({
            receiver: Number(e.target.value)
        });
    }

    componentDidMount(){
        axios.get('http://localhost:5000/')
        .then(response=>{
            if(response.data.status){
                this.setState({
                    customers: response.data.customers
                });
            }else{
                alert('Something went wrong!');
            }
        }).catch(err=>{
            console.log('Error!\n'+err);
        })
    }
    
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Banking System</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/history">History</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" href="/transfer">Transactions</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <div className='container mt-5 mb-4'>
                    <div className="form text-center p-3 rounded" style={{border: '1px solid black'}}>
                        <h2 className='mt-3'>Transaction Form</h2>
                        <form className='text-start p-4' id='form1' onSubmit={this.onSubmit}>
                            <div className='form-group my-3'>
                                <label htmlFor='fromSelect' className="form-label" style={{fontWeight: 'bold'}}>From:</label>
                                    <select id='fromSelect' className='form-control' onChange={this.onFromSelectChange}>
                                        <option value='' hidden>select sender</option>
                                        {
                                            this.state.customers.map((customer)=>
                                                (Number(this.state.receiver)!==customer.account_no)?
                                                    <option key={customer._id} value={customer.account_no+';'+customer.balance}>{customer.email} (Rs.{customer.balance})</option>
                                                :
                                                    <></>
                                            )
                                        }
                                    </select>
                            </div>

                            <div className='form-group my-3'>
                                <label htmlFor='toSelect' className='form-label' style={{fontWeight: 'bold'}}>To:</label>
                                    <select id='toSelect' className='form-control' onChange={this.onToSelectChange}>
                                        <option value='' hidden>select receiver</option>
                                        {
                                            this.state.customers.map((customer)=>
                                                (Number(this.state.sender)!==customer.account_no)?
                                                    <option key={customer._id} value={customer.account_no}>{customer.email} (Rs.{customer.balance})</option>
                                                :
                                                    <></>
                                            )
                                        }
                                    </select>
                            </div>

                            <div className='form-group' style={{marginTop: '30px'}}>
                                <label htmlFor='amount' className='form-label' style={{fontWeight: 'bold', marginRight: '15px'}}>Amount:</label>
                                <input type='number' className='form-control' id='amount' min='1' max={this.state.maxSender} value={this.state.amount} onChange={this.onAmountChange}/>
                            </div>

                        </form>
                        <input type='submit' form='form1' className='btn btn-success mb-3' value="Transfer"/>
                    </div>
                </div>
            </>
        )
    }
}

export default TransactionForm
