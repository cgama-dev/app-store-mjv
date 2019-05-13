const UserModel = require('../models/user.model')

const RepositorUser = () => {

    const Repository = {
        query: () => UserModel.find({}),

        getById: (id) => UserModel.findById(id),

        create: (data) => {
            const customer = new UserModel(data)
            return customer.save()
        },
        authenticate: async (data) => {
           return UserModel.findOne({
                email: data.email,
                password: data.password
            })
        }
    }

    return Repository
}

module.exports = RepositorUser