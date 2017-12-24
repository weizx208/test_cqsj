/**
 * Created by Administrator on 2015/10/16.
 *
 * ��Ϣ����
 */
module gd {
    export class MsgReceiverCtrl extends mo.DataController {
        static ON_VALUE_KEY:string = "v";
        _initProp() {
            super._initProp();
        }

        initData(data?) {
            pomelo.removeAllListeners(gc.c_prop.receiverKey.chat);
            pomelo.removeAllListeners(gc.c_prop.receiverKey.point);
            pomelo.removeAllListeners(gc.c_prop.receiverKey.task);
            pomelo.removeAllListeners(gc.c_prop.receiverKey.pkDeal);

            pomelo.on(gc.c_prop.receiverKey.chat, function (data) {
                //����
                var newId = data[MsgReceiverCtrl.ON_VALUE_KEY];
                chatCtrl.updateNewMsg(newId);
            });

            //�����̵���ֵ�֪ͨ
            pomelo.on(gc.c_prop.receiverKey.point, function (data) {
                //���
            });

            //�����̵���ֵ�֪ͨ
            pomelo.on(gc.c_prop.receiverKey.task, function (data) {
                //����
                var updateData = data[MsgReceiverCtrl.ON_VALUE_KEY];
                if(updateData){
                    taskCtrl.updateEntity(updateData);
                }
            });

            //֪ͨ������
            pomelo.on(gc.c_prop.receiverKey.pkDeal, function (data) {
                pkOutCtrl.dealRecord();
            });
        }
    }

    export var msgReceiverCtrl:MsgReceiverCtrl = MsgReceiverCtrl.getInstance();
}
