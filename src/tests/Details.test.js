import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Details from '../components/Details/Details'

describe(`Details Component`, () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <Details 
                    agent={
                        { 
                            "id": 1, 
                            "first_name": "Cross", 
                            "last_name": "Hurkett", 
                            "contact": { 
                                "email": "churkett0@163.com", 
                                "phone": "214-889-8105"
                            }, 
                            "vol": "$62182049.03", 
                            "trans": 47280, 
                            "exp": 15, 
                            "office": { 
                                "name": "Demimbu", 
                                "street": "8451 Thierer Terrace", 
                                "city": "Arlington", 
                                "state": "Texas", 
                                "zip": "76011"
                            }
                        }
                    }
                />
            </BrowserRouter>, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})