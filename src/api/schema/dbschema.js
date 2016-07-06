const MessageSchema = {
    name: 'message',
    properties: {
        id: 'string',
        title: 'string',
        body: 'string',
        fromid: 'string',
        toid: 'string'
    }
}
const UserSchema = {
    name: 'user',
    properties: {
        id: 'string',
        icon: 'string'
    }
}
const FriendSchema = {
    name: 'friend',
    properties: {

    }
}
export const DBSchema = {
    schema: [
        MessageSchema, UserSchema, FriendSchema
    ]
};