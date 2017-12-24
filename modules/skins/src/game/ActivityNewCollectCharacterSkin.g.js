var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewCollectCharacterSkin = (function (_super) {
            __extends(ActivityNewCollectCharacterSkin, _super);
            function ActivityNewCollectCharacterSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.head_i(), this.btn_close_i(), this.btn_help_i(), this.group_item_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewCollectCharacterSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewCollectCharacterSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 5;
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [-7, -32, -32, "panel_bg_vip", -2, 50, 50]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [3, "center", "bottom"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["right", "visible", "x", "y"], [75, false, 10, 63]);
                t.layout = this.__4_i();
                t.elementsContent = [this.ico_cost_icon_i(), this.label_cost_have_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 60, 9]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_huodong", 60, 16]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "活动时间:", 0xFFE613, 10, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "活动规则:", 0xFFE613, 11, 28]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 421, 12]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 10, 10]);
                return t;
            };
            p.btn_source_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_source = t;
                this.__s(t, ["source", "x", "y"], ["btn_collect_source", 339, 23]);
                return t;
            };
            p.group_content_i = function () {
                var t = new egret.gui.Group();
                this.group_content = t;
                this.__s(t, ["left", "width"], [0, 448]);
                t.elementsContent = [this.__8_i(), this.__9_i(), this.label_activity_time_i(), this.label_activity_desc_i(), this.btn_source_i()];
                return t;
            };
            p.group_item_i = function () {
                var t = new egret.gui.Group();
                this.group_item = t;
                this.__s(t, ["height", "horizontalCenter", "touchChildren", "touchEnabled", "width", "x", "y"], [555, 0, true, true, 454, 20, 219]);
                t.layout = this.__11_i();
                t.elementsContent = [this.group_content_i(), this.list_items_i()];
                return t;
            };
            p.head_i = function () {
                var t = new g_comp.ActivityItem();
                this.head = t;
                this.__s(t, ["horizontalCenter", "skinName", "x", "y"], [0, skins.game.ActivityNewCenterCellSkin, 20, 81]);
                return t;
            };
            p.ico_cost_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_cost_icon = t;
                this.__s(t, ["source", "touchEnabled", "x"], ["ico_yuanbao", false, 0]);
                return t;
            };
            p.label_activity_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_desc = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "width", "x", "y"], ["黑体", 15, "标签\r标签标标签\r标签标", 0xE6E4A8, 235, 98, 30]);
                return t;
            };
            p.label_activity_time_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_time = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "width", "x", "y"], ["黑体", 24, 18, "02月13日10:00--02月16日12:00", 260, 94, 0]);
                return t;
            };
            p.label_cost_have_i = function () {
                var t = new egret.gui.Label();
                this.label_cost_have = t;
                this.__s(t, ["size", "text", "textColor", "verticalAlign", "x"], [16, "124125", 0xFDB42C, "middle", 0]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "left", "maxHeight", "skinName", "top", "width"], [skins.game.ActivityNewCollectCharacterItemSkin, 0, 510, skins.comp.List_Empty_Skin, 80, 453]);
                t.layout = this.__10_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            ActivityNewCollectCharacterSkin._skinParts = ["ico_cost_icon", "label_cost_have", "head", "btn_close", "btn_help", "label_activity_time", "label_activity_desc", "btn_source", "group_content", "list_items", "group_item"];
            return ActivityNewCollectCharacterSkin;
        })(egret.gui.Skin);
        game.ActivityNewCollectCharacterSkin = ActivityNewCollectCharacterSkin;
        egret.registerClass(ActivityNewCollectCharacterSkin,"skins.game.ActivityNewCollectCharacterSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
