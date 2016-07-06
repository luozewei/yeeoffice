
export default class SignalrHubs {
    static proxy = {};
    static hubserver = {
        initiativeGetMessage: function (proxy, start, end, isRead, where) {
            console.log(this);
            return proxy.invoke('InitiativeGetMessage', start, end, isRead, where);
        },
        initiativeGetSubscriptionList: function (proxy) {
            return proxy.invoke('initiativeGetSubscriptionList');
        },
        initiativeSendALLNotification: function (proxy, Message) {
            return proxy.invoke('initiativeSendALLNotification', Message);
        },
        initiativeMarkReadGetMessge: function (proxy, id, start, end, isRead, where) {
            return proxy.invoke('initiativeMarkReadGetMessge', id, start, end, isRead, where);
        }
    }

}
