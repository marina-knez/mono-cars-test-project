import React, {Component} from 'react'
import {observer} from 'mobx-react'

import '../pages/AddEditPageStyles.css'
import store from '../common/Utilities'
import EditMakePage from '../pages/EditMakePage'
import EditModelPage from '../pages/EditModelPage'
import MainLayout from '../layouts/MainLayout'

@observer
class EditPageLayout extends Component {
    render() {
        const {car} = this.props
        
        let page = null
        if (store.editModel) {
            page = (
                <div className="edit">
                    <EditModelPage store={store} car={car} id={car.id} submitForm={this.submitForm} />
                </div>
            )
        } else {
            page = (
                <div className="edit">
                    <EditMakePage store={store} car={car} id={car.id} submitForm={this.submitForm} />
                </div>
            )
        }

        return (
            <div>
                <MainLayout store={store} mainCenter={page} />
            </div>
        )
    }
}

export default EditPageLayout