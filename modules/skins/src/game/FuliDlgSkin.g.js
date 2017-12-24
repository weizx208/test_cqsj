var skins;
(function (skins) {
    var game;
    (function (game) {
        var FuliDlgSkin = (function (_super) {
            __extends(FuliDlgSkin, _super);
            function FuliDlgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_empty_i(), this.container_i(), this.list_activitys_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FuliDlgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FuliDlgSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 431, 14]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Group();
                this.container = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, -3, 3, 0]);
                return t;
            };
            p.label_empty_i = function () {
                var t = new egret.gui.Label();
                this.label_empty = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "y"], [0.5, 20, "活动空空如也，干净如斯", "center", 13422001, false, 405, 384]);
                return t;
            };
            p.list_activitys_i = function () {
                var t = new egret.gui.List();
                this.list_activitys = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "skinName", "width", "y"], [80, -1.5, skins.game.ActivityTabItemSkin, skins.comp.List_Empty_H_Skin, 405, 56]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "scale9Grid", "source"], [true, egret.gui.getScale9Grid("60,83,360,105"), "panel_fuliditu"]);
                return t;
            };
            FuliDlgSkin._skinParts = ["label_empty", "container", "list_activitys", "btn_close"];
            return FuliDlgSkin;
        })(egret.gui.Skin);
        game.FuliDlgSkin = FuliDlgSkin;
        egret.registerClass(FuliDlgSkin,"skins.game.FuliDlgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
