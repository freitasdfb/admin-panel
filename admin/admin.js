const User = require('../Models/user')
const Cliente = require('../Models/cliente')
const WppMessage = require('../Models/wppmesages');
const uploadFeature = require('@admin-bro/upload')

const sidebarGroups = {
    user: {
        name: 'Usuários',
        icon: 'User',
    },
    products: {
        name: 'Produtos',
        icon: 'Product'
    }
};


const AdminBroOptions = {
    resources: [{
        resource: Cliente,
        options: {
            parent: sidebarGroups.user,
        }
    },
    {
        resource: User,
        options: {
            parent: sidebarGroups.user
        }
    },
    {
        resource: WppMessage,
        options: {
            parent: sidebarGroups.products,
            properties: {
                mensagem: {
                    type: 'richtext'
                }
            },
        },
        features: [uploadFeature({
            provider: { local: { bucket: 'uploads' } },
            properties: {
                key: 'path',
                filePath: 'imagePaths'
            },
            validation: {
                mimeTypes: ['image/png', 'image/jpg', 'image/jpeg']
            },
        })]
    }],
    branding: {
        companyName: 'Prime MKT Bulk Messages',
        softwareBrothers: false,
    },
}

module.exports = AdminBroOptions;