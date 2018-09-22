/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.ele = (function() {

        /**
         * Namespace ele.
         * @memberof com
         * @namespace
         */
        var ele = {};

        ele.model = (function() {

            /**
             * Namespace model.
             * @memberof com.ele
             * @namespace
             */
            var model = {};

            model.dto = (function() {

                /**
                 * Namespace dto.
                 * @memberof com.ele.model
                 * @namespace
                 */
                var dto = {};

                dto.ele = (function() {

                    /**
                     * Namespace ele.
                     * @memberof com.ele.model.dto
                     * @namespace
                     */
                    var ele = {};

                    /**
                     * PromotionType enum.
                     * @name com.ele.model.dto.ele.PromotionType
                     * @enum {string}
                     * @property {number} NONE=0 NONE value
                     * @property {number} NEW=1 NEW value
                     * @property {number} SUBTRACTION=2 SUBTRACTION value
                     * @property {number} SPECIAL=3 SPECIAL value
                     * @property {number} DISCOUNT=4 DISCOUNT value
                     */
                    ele.PromotionType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "NONE"] = 0;
                        values[valuesById[1] = "NEW"] = 1;
                        values[valuesById[2] = "SUBTRACTION"] = 2;
                        values[valuesById[3] = "SPECIAL"] = 3;
                        values[valuesById[4] = "DISCOUNT"] = 4;
                        return values;
                    })();

                    ele.Promotion = (function() {

                        /**
                         * Properties of a Promotion.
                         * @memberof com.ele.model.dto.ele
                         * @interface IPromotion
                         * @property {com.ele.model.dto.ele.PromotionType|null} [variety] Promotion variety
                         * @property {string|null} [slogan] Promotion slogan
                         */

                        /**
                         * Constructs a new Promotion.
                         * @memberof com.ele.model.dto.ele
                         * @classdesc Represents a Promotion.
                         * @implements IPromotion
                         * @constructor
                         * @param {com.ele.model.dto.ele.IPromotion=} [properties] Properties to set
                         */
                        function Promotion(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Promotion variety.
                         * @member {com.ele.model.dto.ele.PromotionType} variety
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @instance
                         */
                        Promotion.prototype.variety = 0;

                        /**
                         * Promotion slogan.
                         * @member {string} slogan
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @instance
                         */
                        Promotion.prototype.slogan = "";

                        /**
                         * Creates a new Promotion instance using the specified properties.
                         * @function create
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {com.ele.model.dto.ele.IPromotion=} [properties] Properties to set
                         * @returns {com.ele.model.dto.ele.Promotion} Promotion instance
                         */
                        Promotion.create = function create(properties) {
                            return new Promotion(properties);
                        };

                        /**
                         * Encodes the specified Promotion message. Does not implicitly {@link com.ele.model.dto.ele.Promotion.verify|verify} messages.
                         * @function encode
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {com.ele.model.dto.ele.IPromotion} message Promotion message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Promotion.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.variety != null && message.hasOwnProperty("variety"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.variety);
                            if (message.slogan != null && message.hasOwnProperty("slogan"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.slogan);
                            return writer;
                        };

                        /**
                         * Encodes the specified Promotion message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.Promotion.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {com.ele.model.dto.ele.IPromotion} message Promotion message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Promotion.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Promotion message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.ele.model.dto.ele.Promotion} Promotion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Promotion.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.ele.model.dto.ele.Promotion();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.variety = reader.int32();
                                    break;
                                case 2:
                                    message.slogan = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Promotion message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.ele.model.dto.ele.Promotion} Promotion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Promotion.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Promotion message.
                         * @function verify
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Promotion.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.variety != null && message.hasOwnProperty("variety"))
                                switch (message.variety) {
                                default:
                                    return "variety: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                    break;
                                }
                            if (message.slogan != null && message.hasOwnProperty("slogan"))
                                if (!$util.isString(message.slogan))
                                    return "slogan: string expected";
                            return null;
                        };

                        /**
                         * Creates a Promotion message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.ele.model.dto.ele.Promotion} Promotion
                         */
                        Promotion.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.ele.model.dto.ele.Promotion)
                                return object;
                            var message = new $root.com.ele.model.dto.ele.Promotion();
                            switch (object.variety) {
                            case "NONE":
                            case 0:
                                message.variety = 0;
                                break;
                            case "NEW":
                            case 1:
                                message.variety = 1;
                                break;
                            case "SUBTRACTION":
                            case 2:
                                message.variety = 2;
                                break;
                            case "SPECIAL":
                            case 3:
                                message.variety = 3;
                                break;
                            case "DISCOUNT":
                            case 4:
                                message.variety = 4;
                                break;
                            }
                            if (object.slogan != null)
                                message.slogan = String(object.slogan);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Promotion message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {com.ele.model.dto.ele.Promotion} message Promotion
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Promotion.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.variety = options.enums === String ? "NONE" : 0;
                                object.slogan = "";
                            }
                            if (message.variety != null && message.hasOwnProperty("variety"))
                                object.variety = options.enums === String ? $root.com.ele.model.dto.ele.PromotionType[message.variety] : message.variety;
                            if (message.slogan != null && message.hasOwnProperty("slogan"))
                                object.slogan = message.slogan;
                            return object;
                        };

                        /**
                         * Converts this Promotion to JSON.
                         * @function toJSON
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Promotion.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Promotion;
                    })();

                    ele.Good = (function() {

                        /**
                         * Properties of a Good.
                         * @memberof com.ele.model.dto.ele
                         * @interface IGood
                         * @property {string|null} [imgUrl] Good imgUrl
                         * @property {string|null} [name] Good name
                         * @property {string|null} [desc] Good desc
                         * @property {number|null} [monthSale] Good monthSale
                         * @property {number|null} [favorableRate] Good favorableRate
                         * @property {number|null} [oriPrice] Good oriPrice
                         * @property {number|null} [nowPrice] Good nowPrice
                         * @property {number|null} [orderNum] Good orderNum
                         */

                        /**
                         * Constructs a new Good.
                         * @memberof com.ele.model.dto.ele
                         * @classdesc Represents a Good.
                         * @implements IGood
                         * @constructor
                         * @param {com.ele.model.dto.ele.IGood=} [properties] Properties to set
                         */
                        function Good(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Good imgUrl.
                         * @member {string} imgUrl
                         * @memberof com.ele.model.dto.ele.Good
                         * @instance
                         */
                        Good.prototype.imgUrl = "";

                        /**
                         * Good name.
                         * @member {string} name
                         * @memberof com.ele.model.dto.ele.Good
                         * @instance
                         */
                        Good.prototype.name = "";

                        /**
                         * Good desc.
                         * @member {string} desc
                         * @memberof com.ele.model.dto.ele.Good
                         * @instance
                         */
                        Good.prototype.desc = "";

                        /**
                         * Good monthSale.
                         * @member {number} monthSale
                         * @memberof com.ele.model.dto.ele.Good
                         * @instance
                         */
                        Good.prototype.monthSale = 0;

                        /**
                         * Good favorableRate.
                         * @member {number} favorableRate
                         * @memberof com.ele.model.dto.ele.Good
                         * @instance
                         */
                        Good.prototype.favorableRate = 0;

                        /**
                         * Good oriPrice.
                         * @member {number} oriPrice
                         * @memberof com.ele.model.dto.ele.Good
                         * @instance
                         */
                        Good.prototype.oriPrice = 0;

                        /**
                         * Good nowPrice.
                         * @member {number} nowPrice
                         * @memberof com.ele.model.dto.ele.Good
                         * @instance
                         */
                        Good.prototype.nowPrice = 0;

                        /**
                         * Good orderNum.
                         * @member {number} orderNum
                         * @memberof com.ele.model.dto.ele.Good
                         * @instance
                         */
                        Good.prototype.orderNum = 0;

                        /**
                         * Creates a new Good instance using the specified properties.
                         * @function create
                         * @memberof com.ele.model.dto.ele.Good
                         * @static
                         * @param {com.ele.model.dto.ele.IGood=} [properties] Properties to set
                         * @returns {com.ele.model.dto.ele.Good} Good instance
                         */
                        Good.create = function create(properties) {
                            return new Good(properties);
                        };

                        /**
                         * Encodes the specified Good message. Does not implicitly {@link com.ele.model.dto.ele.Good.verify|verify} messages.
                         * @function encode
                         * @memberof com.ele.model.dto.ele.Good
                         * @static
                         * @param {com.ele.model.dto.ele.IGood} message Good message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Good.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.imgUrl);
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                            if (message.desc != null && message.hasOwnProperty("desc"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.desc);
                            if (message.monthSale != null && message.hasOwnProperty("monthSale"))
                                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.monthSale);
                            if (message.favorableRate != null && message.hasOwnProperty("favorableRate"))
                                writer.uint32(/* id 5, wireType 1 =*/41).double(message.favorableRate);
                            if (message.oriPrice != null && message.hasOwnProperty("oriPrice"))
                                writer.uint32(/* id 6, wireType 1 =*/49).double(message.oriPrice);
                            if (message.nowPrice != null && message.hasOwnProperty("nowPrice"))
                                writer.uint32(/* id 7, wireType 1 =*/57).double(message.nowPrice);
                            if (message.orderNum != null && message.hasOwnProperty("orderNum"))
                                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.orderNum);
                            return writer;
                        };

                        /**
                         * Encodes the specified Good message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.Good.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.ele.model.dto.ele.Good
                         * @static
                         * @param {com.ele.model.dto.ele.IGood} message Good message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Good.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Good message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.ele.model.dto.ele.Good
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.ele.model.dto.ele.Good} Good
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Good.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.ele.model.dto.ele.Good();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.imgUrl = reader.string();
                                    break;
                                case 2:
                                    message.name = reader.string();
                                    break;
                                case 3:
                                    message.desc = reader.string();
                                    break;
                                case 4:
                                    message.monthSale = reader.uint32();
                                    break;
                                case 5:
                                    message.favorableRate = reader.double();
                                    break;
                                case 6:
                                    message.oriPrice = reader.double();
                                    break;
                                case 7:
                                    message.nowPrice = reader.double();
                                    break;
                                case 8:
                                    message.orderNum = reader.uint32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Good message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.ele.model.dto.ele.Good
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.ele.model.dto.ele.Good} Good
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Good.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Good message.
                         * @function verify
                         * @memberof com.ele.model.dto.ele.Good
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Good.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                                if (!$util.isString(message.imgUrl))
                                    return "imgUrl: string expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.desc != null && message.hasOwnProperty("desc"))
                                if (!$util.isString(message.desc))
                                    return "desc: string expected";
                            if (message.monthSale != null && message.hasOwnProperty("monthSale"))
                                if (!$util.isInteger(message.monthSale))
                                    return "monthSale: integer expected";
                            if (message.favorableRate != null && message.hasOwnProperty("favorableRate"))
                                if (typeof message.favorableRate !== "number")
                                    return "favorableRate: number expected";
                            if (message.oriPrice != null && message.hasOwnProperty("oriPrice"))
                                if (typeof message.oriPrice !== "number")
                                    return "oriPrice: number expected";
                            if (message.nowPrice != null && message.hasOwnProperty("nowPrice"))
                                if (typeof message.nowPrice !== "number")
                                    return "nowPrice: number expected";
                            if (message.orderNum != null && message.hasOwnProperty("orderNum"))
                                if (!$util.isInteger(message.orderNum))
                                    return "orderNum: integer expected";
                            return null;
                        };

                        /**
                         * Creates a Good message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.ele.model.dto.ele.Good
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.ele.model.dto.ele.Good} Good
                         */
                        Good.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.ele.model.dto.ele.Good)
                                return object;
                            var message = new $root.com.ele.model.dto.ele.Good();
                            if (object.imgUrl != null)
                                message.imgUrl = String(object.imgUrl);
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.desc != null)
                                message.desc = String(object.desc);
                            if (object.monthSale != null)
                                message.monthSale = object.monthSale >>> 0;
                            if (object.favorableRate != null)
                                message.favorableRate = Number(object.favorableRate);
                            if (object.oriPrice != null)
                                message.oriPrice = Number(object.oriPrice);
                            if (object.nowPrice != null)
                                message.nowPrice = Number(object.nowPrice);
                            if (object.orderNum != null)
                                message.orderNum = object.orderNum >>> 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a Good message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.ele.model.dto.ele.Good
                         * @static
                         * @param {com.ele.model.dto.ele.Good} message Good
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Good.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.imgUrl = "";
                                object.name = "";
                                object.desc = "";
                                object.monthSale = 0;
                                object.favorableRate = 0;
                                object.oriPrice = 0;
                                object.nowPrice = 0;
                                object.orderNum = 0;
                            }
                            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                                object.imgUrl = message.imgUrl;
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.desc != null && message.hasOwnProperty("desc"))
                                object.desc = message.desc;
                            if (message.monthSale != null && message.hasOwnProperty("monthSale"))
                                object.monthSale = message.monthSale;
                            if (message.favorableRate != null && message.hasOwnProperty("favorableRate"))
                                object.favorableRate = options.json && !isFinite(message.favorableRate) ? String(message.favorableRate) : message.favorableRate;
                            if (message.oriPrice != null && message.hasOwnProperty("oriPrice"))
                                object.oriPrice = options.json && !isFinite(message.oriPrice) ? String(message.oriPrice) : message.oriPrice;
                            if (message.nowPrice != null && message.hasOwnProperty("nowPrice"))
                                object.nowPrice = options.json && !isFinite(message.nowPrice) ? String(message.nowPrice) : message.nowPrice;
                            if (message.orderNum != null && message.hasOwnProperty("orderNum"))
                                object.orderNum = message.orderNum;
                            return object;
                        };

                        /**
                         * Converts this Good to JSON.
                         * @function toJSON
                         * @memberof com.ele.model.dto.ele.Good
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Good.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Good;
                    })();

                    ele.Variety = (function() {

                        /**
                         * Properties of a Variety.
                         * @memberof com.ele.model.dto.ele
                         * @interface IVariety
                         * @property {string|null} [name] Variety name
                         * @property {number|null} [orderNum] Variety orderNum
                         * @property {string|null} [desc] Variety desc
                         * @property {Array.<com.ele.model.dto.ele.IGood>|null} [goodList] Variety goodList
                         */

                        /**
                         * Constructs a new Variety.
                         * @memberof com.ele.model.dto.ele
                         * @classdesc Represents a Variety.
                         * @implements IVariety
                         * @constructor
                         * @param {com.ele.model.dto.ele.IVariety=} [properties] Properties to set
                         */
                        function Variety(properties) {
                            this.goodList = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Variety name.
                         * @member {string} name
                         * @memberof com.ele.model.dto.ele.Variety
                         * @instance
                         */
                        Variety.prototype.name = "";

                        /**
                         * Variety orderNum.
                         * @member {number} orderNum
                         * @memberof com.ele.model.dto.ele.Variety
                         * @instance
                         */
                        Variety.prototype.orderNum = 0;

                        /**
                         * Variety desc.
                         * @member {string} desc
                         * @memberof com.ele.model.dto.ele.Variety
                         * @instance
                         */
                        Variety.prototype.desc = "";

                        /**
                         * Variety goodList.
                         * @member {Array.<com.ele.model.dto.ele.IGood>} goodList
                         * @memberof com.ele.model.dto.ele.Variety
                         * @instance
                         */
                        Variety.prototype.goodList = $util.emptyArray;

                        /**
                         * Creates a new Variety instance using the specified properties.
                         * @function create
                         * @memberof com.ele.model.dto.ele.Variety
                         * @static
                         * @param {com.ele.model.dto.ele.IVariety=} [properties] Properties to set
                         * @returns {com.ele.model.dto.ele.Variety} Variety instance
                         */
                        Variety.create = function create(properties) {
                            return new Variety(properties);
                        };

                        /**
                         * Encodes the specified Variety message. Does not implicitly {@link com.ele.model.dto.ele.Variety.verify|verify} messages.
                         * @function encode
                         * @memberof com.ele.model.dto.ele.Variety
                         * @static
                         * @param {com.ele.model.dto.ele.IVariety} message Variety message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Variety.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.orderNum != null && message.hasOwnProperty("orderNum"))
                                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.orderNum);
                            if (message.desc != null && message.hasOwnProperty("desc"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.desc);
                            if (message.goodList != null && message.goodList.length)
                                for (var i = 0; i < message.goodList.length; ++i)
                                    $root.com.ele.model.dto.ele.Good.encode(message.goodList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified Variety message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.Variety.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.ele.model.dto.ele.Variety
                         * @static
                         * @param {com.ele.model.dto.ele.IVariety} message Variety message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Variety.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Variety message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.ele.model.dto.ele.Variety
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.ele.model.dto.ele.Variety} Variety
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Variety.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.ele.model.dto.ele.Variety();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    message.orderNum = reader.uint32();
                                    break;
                                case 3:
                                    message.desc = reader.string();
                                    break;
                                case 4:
                                    if (!(message.goodList && message.goodList.length))
                                        message.goodList = [];
                                    message.goodList.push($root.com.ele.model.dto.ele.Good.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Variety message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.ele.model.dto.ele.Variety
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.ele.model.dto.ele.Variety} Variety
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Variety.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Variety message.
                         * @function verify
                         * @memberof com.ele.model.dto.ele.Variety
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Variety.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.orderNum != null && message.hasOwnProperty("orderNum"))
                                if (!$util.isInteger(message.orderNum))
                                    return "orderNum: integer expected";
                            if (message.desc != null && message.hasOwnProperty("desc"))
                                if (!$util.isString(message.desc))
                                    return "desc: string expected";
                            if (message.goodList != null && message.hasOwnProperty("goodList")) {
                                if (!Array.isArray(message.goodList))
                                    return "goodList: array expected";
                                for (var i = 0; i < message.goodList.length; ++i) {
                                    var error = $root.com.ele.model.dto.ele.Good.verify(message.goodList[i]);
                                    if (error)
                                        return "goodList." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a Variety message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.ele.model.dto.ele.Variety
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.ele.model.dto.ele.Variety} Variety
                         */
                        Variety.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.ele.model.dto.ele.Variety)
                                return object;
                            var message = new $root.com.ele.model.dto.ele.Variety();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.orderNum != null)
                                message.orderNum = object.orderNum >>> 0;
                            if (object.desc != null)
                                message.desc = String(object.desc);
                            if (object.goodList) {
                                if (!Array.isArray(object.goodList))
                                    throw TypeError(".com.ele.model.dto.ele.Variety.goodList: array expected");
                                message.goodList = [];
                                for (var i = 0; i < object.goodList.length; ++i) {
                                    if (typeof object.goodList[i] !== "object")
                                        throw TypeError(".com.ele.model.dto.ele.Variety.goodList: object expected");
                                    message.goodList[i] = $root.com.ele.model.dto.ele.Good.fromObject(object.goodList[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Variety message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.ele.model.dto.ele.Variety
                         * @static
                         * @param {com.ele.model.dto.ele.Variety} message Variety
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Variety.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.goodList = [];
                            if (options.defaults) {
                                object.name = "";
                                object.orderNum = 0;
                                object.desc = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.orderNum != null && message.hasOwnProperty("orderNum"))
                                object.orderNum = message.orderNum;
                            if (message.desc != null && message.hasOwnProperty("desc"))
                                object.desc = message.desc;
                            if (message.goodList && message.goodList.length) {
                                object.goodList = [];
                                for (var j = 0; j < message.goodList.length; ++j)
                                    object.goodList[j] = $root.com.ele.model.dto.ele.Good.toObject(message.goodList[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this Variety to JSON.
                         * @function toJSON
                         * @memberof com.ele.model.dto.ele.Variety
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Variety.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Variety;
                    })();

                    ele.ShopProfile = (function() {

                        /**
                         * Properties of a ShopProfile.
                         * @memberof com.ele.model.dto.ele
                         * @interface IShopProfile
                         * @property {string|null} [id] ShopProfile id
                         * @property {string|null} [imgUrl] ShopProfile imgUrl
                         * @property {boolean|null} [isBrand] ShopProfile isBrand
                         * @property {string|null} [shopName] ShopProfile shopName
                         * @property {number|null} [starNum] ShopProfile starNum
                         * @property {number|null} [monthlySales] ShopProfile monthlySales
                         * @property {number|null} [initMoney] ShopProfile initMoney
                         * @property {number|null} [deliveryFee] ShopProfile deliveryFee
                         * @property {number|null} [distance] ShopProfile distance
                         * @property {string|null} [needTime] ShopProfile needTime
                         * @property {boolean|null} [isBird] ShopProfile isBird
                         * @property {boolean|null} [isOntime] ShopProfile isOntime
                         * @property {boolean|null} [isInsurance] ShopProfile isInsurance
                         * @property {boolean|null} [needtip] ShopProfile needtip
                         * @property {boolean|null} [isNewShop] ShopProfile isNewShop
                         * @property {Array.<com.ele.model.dto.ele.IPromotion>|null} [shopActivity] ShopProfile shopActivity
                         */

                        /**
                         * Constructs a new ShopProfile.
                         * @memberof com.ele.model.dto.ele
                         * @classdesc Represents a ShopProfile.
                         * @implements IShopProfile
                         * @constructor
                         * @param {com.ele.model.dto.ele.IShopProfile=} [properties] Properties to set
                         */
                        function ShopProfile(properties) {
                            this.shopActivity = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ShopProfile id.
                         * @member {string} id
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.id = "";

                        /**
                         * ShopProfile imgUrl.
                         * @member {string} imgUrl
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.imgUrl = "";

                        /**
                         * ShopProfile isBrand.
                         * @member {boolean} isBrand
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.isBrand = false;

                        /**
                         * ShopProfile shopName.
                         * @member {string} shopName
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.shopName = "";

                        /**
                         * ShopProfile starNum.
                         * @member {number} starNum
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.starNum = 0;

                        /**
                         * ShopProfile monthlySales.
                         * @member {number} monthlySales
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.monthlySales = 0;

                        /**
                         * ShopProfile initMoney.
                         * @member {number} initMoney
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.initMoney = 0;

                        /**
                         * ShopProfile deliveryFee.
                         * @member {number} deliveryFee
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.deliveryFee = 0;

                        /**
                         * ShopProfile distance.
                         * @member {number} distance
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.distance = 0;

                        /**
                         * ShopProfile needTime.
                         * @member {string} needTime
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.needTime = "";

                        /**
                         * ShopProfile isBird.
                         * @member {boolean} isBird
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.isBird = false;

                        /**
                         * ShopProfile isOntime.
                         * @member {boolean} isOntime
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.isOntime = false;

                        /**
                         * ShopProfile isInsurance.
                         * @member {boolean} isInsurance
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.isInsurance = false;

                        /**
                         * ShopProfile needtip.
                         * @member {boolean} needtip
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.needtip = false;

                        /**
                         * ShopProfile isNewShop.
                         * @member {boolean} isNewShop
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.isNewShop = false;

                        /**
                         * ShopProfile shopActivity.
                         * @member {Array.<com.ele.model.dto.ele.IPromotion>} shopActivity
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         */
                        ShopProfile.prototype.shopActivity = $util.emptyArray;

                        /**
                         * Creates a new ShopProfile instance using the specified properties.
                         * @function create
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @static
                         * @param {com.ele.model.dto.ele.IShopProfile=} [properties] Properties to set
                         * @returns {com.ele.model.dto.ele.ShopProfile} ShopProfile instance
                         */
                        ShopProfile.create = function create(properties) {
                            return new ShopProfile(properties);
                        };

                        /**
                         * Encodes the specified ShopProfile message. Does not implicitly {@link com.ele.model.dto.ele.ShopProfile.verify|verify} messages.
                         * @function encode
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @static
                         * @param {com.ele.model.dto.ele.IShopProfile} message ShopProfile message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ShopProfile.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.id != null && message.hasOwnProperty("id"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.imgUrl);
                            if (message.isBrand != null && message.hasOwnProperty("isBrand"))
                                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isBrand);
                            if (message.shopName != null && message.hasOwnProperty("shopName"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.shopName);
                            if (message.starNum != null && message.hasOwnProperty("starNum"))
                                writer.uint32(/* id 5, wireType 1 =*/41).double(message.starNum);
                            if (message.monthlySales != null && message.hasOwnProperty("monthlySales"))
                                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.monthlySales);
                            if (message.initMoney != null && message.hasOwnProperty("initMoney"))
                                writer.uint32(/* id 7, wireType 1 =*/57).double(message.initMoney);
                            if (message.deliveryFee != null && message.hasOwnProperty("deliveryFee"))
                                writer.uint32(/* id 8, wireType 1 =*/65).double(message.deliveryFee);
                            if (message.distance != null && message.hasOwnProperty("distance"))
                                writer.uint32(/* id 9, wireType 1 =*/73).double(message.distance);
                            if (message.needTime != null && message.hasOwnProperty("needTime"))
                                writer.uint32(/* id 10, wireType 2 =*/82).string(message.needTime);
                            if (message.isBird != null && message.hasOwnProperty("isBird"))
                                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isBird);
                            if (message.isOntime != null && message.hasOwnProperty("isOntime"))
                                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.isOntime);
                            if (message.isInsurance != null && message.hasOwnProperty("isInsurance"))
                                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.isInsurance);
                            if (message.needtip != null && message.hasOwnProperty("needtip"))
                                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.needtip);
                            if (message.isNewShop != null && message.hasOwnProperty("isNewShop"))
                                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.isNewShop);
                            if (message.shopActivity != null && message.shopActivity.length)
                                for (var i = 0; i < message.shopActivity.length; ++i)
                                    $root.com.ele.model.dto.ele.Promotion.encode(message.shopActivity[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified ShopProfile message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.ShopProfile.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @static
                         * @param {com.ele.model.dto.ele.IShopProfile} message ShopProfile message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ShopProfile.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ShopProfile message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.ele.model.dto.ele.ShopProfile} ShopProfile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ShopProfile.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.ele.model.dto.ele.ShopProfile();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.id = reader.string();
                                    break;
                                case 2:
                                    message.imgUrl = reader.string();
                                    break;
                                case 3:
                                    message.isBrand = reader.bool();
                                    break;
                                case 4:
                                    message.shopName = reader.string();
                                    break;
                                case 5:
                                    message.starNum = reader.double();
                                    break;
                                case 6:
                                    message.monthlySales = reader.uint32();
                                    break;
                                case 7:
                                    message.initMoney = reader.double();
                                    break;
                                case 8:
                                    message.deliveryFee = reader.double();
                                    break;
                                case 9:
                                    message.distance = reader.double();
                                    break;
                                case 10:
                                    message.needTime = reader.string();
                                    break;
                                case 11:
                                    message.isBird = reader.bool();
                                    break;
                                case 12:
                                    message.isOntime = reader.bool();
                                    break;
                                case 13:
                                    message.isInsurance = reader.bool();
                                    break;
                                case 14:
                                    message.needtip = reader.bool();
                                    break;
                                case 15:
                                    message.isNewShop = reader.bool();
                                    break;
                                case 16:
                                    if (!(message.shopActivity && message.shopActivity.length))
                                        message.shopActivity = [];
                                    message.shopActivity.push($root.com.ele.model.dto.ele.Promotion.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ShopProfile message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.ele.model.dto.ele.ShopProfile} ShopProfile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ShopProfile.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ShopProfile message.
                         * @function verify
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ShopProfile.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.id != null && message.hasOwnProperty("id"))
                                if (!$util.isString(message.id))
                                    return "id: string expected";
                            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                                if (!$util.isString(message.imgUrl))
                                    return "imgUrl: string expected";
                            if (message.isBrand != null && message.hasOwnProperty("isBrand"))
                                if (typeof message.isBrand !== "boolean")
                                    return "isBrand: boolean expected";
                            if (message.shopName != null && message.hasOwnProperty("shopName"))
                                if (!$util.isString(message.shopName))
                                    return "shopName: string expected";
                            if (message.starNum != null && message.hasOwnProperty("starNum"))
                                if (typeof message.starNum !== "number")
                                    return "starNum: number expected";
                            if (message.monthlySales != null && message.hasOwnProperty("monthlySales"))
                                if (!$util.isInteger(message.monthlySales))
                                    return "monthlySales: integer expected";
                            if (message.initMoney != null && message.hasOwnProperty("initMoney"))
                                if (typeof message.initMoney !== "number")
                                    return "initMoney: number expected";
                            if (message.deliveryFee != null && message.hasOwnProperty("deliveryFee"))
                                if (typeof message.deliveryFee !== "number")
                                    return "deliveryFee: number expected";
                            if (message.distance != null && message.hasOwnProperty("distance"))
                                if (typeof message.distance !== "number")
                                    return "distance: number expected";
                            if (message.needTime != null && message.hasOwnProperty("needTime"))
                                if (!$util.isString(message.needTime))
                                    return "needTime: string expected";
                            if (message.isBird != null && message.hasOwnProperty("isBird"))
                                if (typeof message.isBird !== "boolean")
                                    return "isBird: boolean expected";
                            if (message.isOntime != null && message.hasOwnProperty("isOntime"))
                                if (typeof message.isOntime !== "boolean")
                                    return "isOntime: boolean expected";
                            if (message.isInsurance != null && message.hasOwnProperty("isInsurance"))
                                if (typeof message.isInsurance !== "boolean")
                                    return "isInsurance: boolean expected";
                            if (message.needtip != null && message.hasOwnProperty("needtip"))
                                if (typeof message.needtip !== "boolean")
                                    return "needtip: boolean expected";
                            if (message.isNewShop != null && message.hasOwnProperty("isNewShop"))
                                if (typeof message.isNewShop !== "boolean")
                                    return "isNewShop: boolean expected";
                            if (message.shopActivity != null && message.hasOwnProperty("shopActivity")) {
                                if (!Array.isArray(message.shopActivity))
                                    return "shopActivity: array expected";
                                for (var i = 0; i < message.shopActivity.length; ++i) {
                                    var error = $root.com.ele.model.dto.ele.Promotion.verify(message.shopActivity[i]);
                                    if (error)
                                        return "shopActivity." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a ShopProfile message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.ele.model.dto.ele.ShopProfile} ShopProfile
                         */
                        ShopProfile.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.ele.model.dto.ele.ShopProfile)
                                return object;
                            var message = new $root.com.ele.model.dto.ele.ShopProfile();
                            if (object.id != null)
                                message.id = String(object.id);
                            if (object.imgUrl != null)
                                message.imgUrl = String(object.imgUrl);
                            if (object.isBrand != null)
                                message.isBrand = Boolean(object.isBrand);
                            if (object.shopName != null)
                                message.shopName = String(object.shopName);
                            if (object.starNum != null)
                                message.starNum = Number(object.starNum);
                            if (object.monthlySales != null)
                                message.monthlySales = object.monthlySales >>> 0;
                            if (object.initMoney != null)
                                message.initMoney = Number(object.initMoney);
                            if (object.deliveryFee != null)
                                message.deliveryFee = Number(object.deliveryFee);
                            if (object.distance != null)
                                message.distance = Number(object.distance);
                            if (object.needTime != null)
                                message.needTime = String(object.needTime);
                            if (object.isBird != null)
                                message.isBird = Boolean(object.isBird);
                            if (object.isOntime != null)
                                message.isOntime = Boolean(object.isOntime);
                            if (object.isInsurance != null)
                                message.isInsurance = Boolean(object.isInsurance);
                            if (object.needtip != null)
                                message.needtip = Boolean(object.needtip);
                            if (object.isNewShop != null)
                                message.isNewShop = Boolean(object.isNewShop);
                            if (object.shopActivity) {
                                if (!Array.isArray(object.shopActivity))
                                    throw TypeError(".com.ele.model.dto.ele.ShopProfile.shopActivity: array expected");
                                message.shopActivity = [];
                                for (var i = 0; i < object.shopActivity.length; ++i) {
                                    if (typeof object.shopActivity[i] !== "object")
                                        throw TypeError(".com.ele.model.dto.ele.ShopProfile.shopActivity: object expected");
                                    message.shopActivity[i] = $root.com.ele.model.dto.ele.Promotion.fromObject(object.shopActivity[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a ShopProfile message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @static
                         * @param {com.ele.model.dto.ele.ShopProfile} message ShopProfile
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ShopProfile.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.shopActivity = [];
                            if (options.defaults) {
                                object.id = "";
                                object.imgUrl = "";
                                object.isBrand = false;
                                object.shopName = "";
                                object.starNum = 0;
                                object.monthlySales = 0;
                                object.initMoney = 0;
                                object.deliveryFee = 0;
                                object.distance = 0;
                                object.needTime = "";
                                object.isBird = false;
                                object.isOntime = false;
                                object.isInsurance = false;
                                object.needtip = false;
                                object.isNewShop = false;
                            }
                            if (message.id != null && message.hasOwnProperty("id"))
                                object.id = message.id;
                            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                                object.imgUrl = message.imgUrl;
                            if (message.isBrand != null && message.hasOwnProperty("isBrand"))
                                object.isBrand = message.isBrand;
                            if (message.shopName != null && message.hasOwnProperty("shopName"))
                                object.shopName = message.shopName;
                            if (message.starNum != null && message.hasOwnProperty("starNum"))
                                object.starNum = options.json && !isFinite(message.starNum) ? String(message.starNum) : message.starNum;
                            if (message.monthlySales != null && message.hasOwnProperty("monthlySales"))
                                object.monthlySales = message.monthlySales;
                            if (message.initMoney != null && message.hasOwnProperty("initMoney"))
                                object.initMoney = options.json && !isFinite(message.initMoney) ? String(message.initMoney) : message.initMoney;
                            if (message.deliveryFee != null && message.hasOwnProperty("deliveryFee"))
                                object.deliveryFee = options.json && !isFinite(message.deliveryFee) ? String(message.deliveryFee) : message.deliveryFee;
                            if (message.distance != null && message.hasOwnProperty("distance"))
                                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
                            if (message.needTime != null && message.hasOwnProperty("needTime"))
                                object.needTime = message.needTime;
                            if (message.isBird != null && message.hasOwnProperty("isBird"))
                                object.isBird = message.isBird;
                            if (message.isOntime != null && message.hasOwnProperty("isOntime"))
                                object.isOntime = message.isOntime;
                            if (message.isInsurance != null && message.hasOwnProperty("isInsurance"))
                                object.isInsurance = message.isInsurance;
                            if (message.needtip != null && message.hasOwnProperty("needtip"))
                                object.needtip = message.needtip;
                            if (message.isNewShop != null && message.hasOwnProperty("isNewShop"))
                                object.isNewShop = message.isNewShop;
                            if (message.shopActivity && message.shopActivity.length) {
                                object.shopActivity = [];
                                for (var j = 0; j < message.shopActivity.length; ++j)
                                    object.shopActivity[j] = $root.com.ele.model.dto.ele.Promotion.toObject(message.shopActivity[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this ShopProfile to JSON.
                         * @function toJSON
                         * @memberof com.ele.model.dto.ele.ShopProfile
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ShopProfile.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return ShopProfile;
                    })();

                    ele.ShopDetail = (function() {

                        /**
                         * Properties of a ShopDetail.
                         * @memberof com.ele.model.dto.ele
                         * @interface IShopDetail
                         * @property {string|null} [shopImgUrl] ShopDetail shopImgUrl
                         * @property {string|null} [shopName] ShopDetail shopName
                         * @property {string|null} [shopAddress] ShopDetail shopAddress
                         * @property {string|null} [shopService] ShopDetail shopService
                         * @property {string|null} [announcement] ShopDetail announcement
                         * @property {string|null} [openTime] ShopDetail openTime
                         * @property {string|null} [slogan] ShopDetail slogan
                         * @property {number|null} [starNum] ShopDetail starNum
                         * @property {number|null} [deliveryFee] ShopDetail deliveryFee
                         * @property {number|null} [sendThreshold] ShopDetail sendThreshold
                         * @property {number|null} [activityNum] ShopDetail activityNum
                         * @property {Array.<com.ele.model.dto.ele.IPromotion>|null} [shopActivity] ShopDetail shopActivity
                         * @property {Array.<com.ele.model.dto.ele.IVariety>|null} [varietyList] ShopDetail varietyList
                         */

                        /**
                         * Constructs a new ShopDetail.
                         * @memberof com.ele.model.dto.ele
                         * @classdesc Represents a ShopDetail.
                         * @implements IShopDetail
                         * @constructor
                         * @param {com.ele.model.dto.ele.IShopDetail=} [properties] Properties to set
                         */
                        function ShopDetail(properties) {
                            this.shopActivity = [];
                            this.varietyList = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ShopDetail shopImgUrl.
                         * @member {string} shopImgUrl
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.shopImgUrl = "";

                        /**
                         * ShopDetail shopName.
                         * @member {string} shopName
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.shopName = "";

                        /**
                         * ShopDetail shopAddress.
                         * @member {string} shopAddress
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.shopAddress = "";

                        /**
                         * ShopDetail shopService.
                         * @member {string} shopService
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.shopService = "";

                        /**
                         * ShopDetail announcement.
                         * @member {string} announcement
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.announcement = "";

                        /**
                         * ShopDetail openTime.
                         * @member {string} openTime
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.openTime = "";

                        /**
                         * ShopDetail slogan.
                         * @member {string} slogan
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.slogan = "";

                        /**
                         * ShopDetail starNum.
                         * @member {number} starNum
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.starNum = 0;

                        /**
                         * ShopDetail deliveryFee.
                         * @member {number} deliveryFee
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.deliveryFee = 0;

                        /**
                         * ShopDetail sendThreshold.
                         * @member {number} sendThreshold
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.sendThreshold = 0;

                        /**
                         * ShopDetail activityNum.
                         * @member {number} activityNum
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.activityNum = 0;

                        /**
                         * ShopDetail shopActivity.
                         * @member {Array.<com.ele.model.dto.ele.IPromotion>} shopActivity
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.shopActivity = $util.emptyArray;

                        /**
                         * ShopDetail varietyList.
                         * @member {Array.<com.ele.model.dto.ele.IVariety>} varietyList
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         */
                        ShopDetail.prototype.varietyList = $util.emptyArray;

                        /**
                         * Creates a new ShopDetail instance using the specified properties.
                         * @function create
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @static
                         * @param {com.ele.model.dto.ele.IShopDetail=} [properties] Properties to set
                         * @returns {com.ele.model.dto.ele.ShopDetail} ShopDetail instance
                         */
                        ShopDetail.create = function create(properties) {
                            return new ShopDetail(properties);
                        };

                        /**
                         * Encodes the specified ShopDetail message. Does not implicitly {@link com.ele.model.dto.ele.ShopDetail.verify|verify} messages.
                         * @function encode
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @static
                         * @param {com.ele.model.dto.ele.IShopDetail} message ShopDetail message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ShopDetail.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.shopImgUrl != null && message.hasOwnProperty("shopImgUrl"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.shopImgUrl);
                            if (message.shopName != null && message.hasOwnProperty("shopName"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.shopName);
                            if (message.shopAddress != null && message.hasOwnProperty("shopAddress"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.shopAddress);
                            if (message.shopService != null && message.hasOwnProperty("shopService"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.shopService);
                            if (message.announcement != null && message.hasOwnProperty("announcement"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.announcement);
                            if (message.openTime != null && message.hasOwnProperty("openTime"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.openTime);
                            if (message.slogan != null && message.hasOwnProperty("slogan"))
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.slogan);
                            if (message.starNum != null && message.hasOwnProperty("starNum"))
                                writer.uint32(/* id 8, wireType 1 =*/65).double(message.starNum);
                            if (message.deliveryFee != null && message.hasOwnProperty("deliveryFee"))
                                writer.uint32(/* id 9, wireType 1 =*/73).double(message.deliveryFee);
                            if (message.sendThreshold != null && message.hasOwnProperty("sendThreshold"))
                                writer.uint32(/* id 10, wireType 1 =*/81).double(message.sendThreshold);
                            if (message.activityNum != null && message.hasOwnProperty("activityNum"))
                                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.activityNum);
                            if (message.shopActivity != null && message.shopActivity.length)
                                for (var i = 0; i < message.shopActivity.length; ++i)
                                    $root.com.ele.model.dto.ele.Promotion.encode(message.shopActivity[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                            if (message.varietyList != null && message.varietyList.length)
                                for (var i = 0; i < message.varietyList.length; ++i)
                                    $root.com.ele.model.dto.ele.Variety.encode(message.varietyList[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified ShopDetail message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.ShopDetail.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @static
                         * @param {com.ele.model.dto.ele.IShopDetail} message ShopDetail message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ShopDetail.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ShopDetail message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.ele.model.dto.ele.ShopDetail} ShopDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ShopDetail.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.ele.model.dto.ele.ShopDetail();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.shopImgUrl = reader.string();
                                    break;
                                case 2:
                                    message.shopName = reader.string();
                                    break;
                                case 3:
                                    message.shopAddress = reader.string();
                                    break;
                                case 4:
                                    message.shopService = reader.string();
                                    break;
                                case 5:
                                    message.announcement = reader.string();
                                    break;
                                case 6:
                                    message.openTime = reader.string();
                                    break;
                                case 7:
                                    message.slogan = reader.string();
                                    break;
                                case 8:
                                    message.starNum = reader.double();
                                    break;
                                case 9:
                                    message.deliveryFee = reader.double();
                                    break;
                                case 10:
                                    message.sendThreshold = reader.double();
                                    break;
                                case 11:
                                    message.activityNum = reader.uint32();
                                    break;
                                case 12:
                                    if (!(message.shopActivity && message.shopActivity.length))
                                        message.shopActivity = [];
                                    message.shopActivity.push($root.com.ele.model.dto.ele.Promotion.decode(reader, reader.uint32()));
                                    break;
                                case 13:
                                    if (!(message.varietyList && message.varietyList.length))
                                        message.varietyList = [];
                                    message.varietyList.push($root.com.ele.model.dto.ele.Variety.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ShopDetail message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.ele.model.dto.ele.ShopDetail} ShopDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ShopDetail.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ShopDetail message.
                         * @function verify
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ShopDetail.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.shopImgUrl != null && message.hasOwnProperty("shopImgUrl"))
                                if (!$util.isString(message.shopImgUrl))
                                    return "shopImgUrl: string expected";
                            if (message.shopName != null && message.hasOwnProperty("shopName"))
                                if (!$util.isString(message.shopName))
                                    return "shopName: string expected";
                            if (message.shopAddress != null && message.hasOwnProperty("shopAddress"))
                                if (!$util.isString(message.shopAddress))
                                    return "shopAddress: string expected";
                            if (message.shopService != null && message.hasOwnProperty("shopService"))
                                if (!$util.isString(message.shopService))
                                    return "shopService: string expected";
                            if (message.announcement != null && message.hasOwnProperty("announcement"))
                                if (!$util.isString(message.announcement))
                                    return "announcement: string expected";
                            if (message.openTime != null && message.hasOwnProperty("openTime"))
                                if (!$util.isString(message.openTime))
                                    return "openTime: string expected";
                            if (message.slogan != null && message.hasOwnProperty("slogan"))
                                if (!$util.isString(message.slogan))
                                    return "slogan: string expected";
                            if (message.starNum != null && message.hasOwnProperty("starNum"))
                                if (typeof message.starNum !== "number")
                                    return "starNum: number expected";
                            if (message.deliveryFee != null && message.hasOwnProperty("deliveryFee"))
                                if (typeof message.deliveryFee !== "number")
                                    return "deliveryFee: number expected";
                            if (message.sendThreshold != null && message.hasOwnProperty("sendThreshold"))
                                if (typeof message.sendThreshold !== "number")
                                    return "sendThreshold: number expected";
                            if (message.activityNum != null && message.hasOwnProperty("activityNum"))
                                if (!$util.isInteger(message.activityNum))
                                    return "activityNum: integer expected";
                            if (message.shopActivity != null && message.hasOwnProperty("shopActivity")) {
                                if (!Array.isArray(message.shopActivity))
                                    return "shopActivity: array expected";
                                for (var i = 0; i < message.shopActivity.length; ++i) {
                                    var error = $root.com.ele.model.dto.ele.Promotion.verify(message.shopActivity[i]);
                                    if (error)
                                        return "shopActivity." + error;
                                }
                            }
                            if (message.varietyList != null && message.hasOwnProperty("varietyList")) {
                                if (!Array.isArray(message.varietyList))
                                    return "varietyList: array expected";
                                for (var i = 0; i < message.varietyList.length; ++i) {
                                    var error = $root.com.ele.model.dto.ele.Variety.verify(message.varietyList[i]);
                                    if (error)
                                        return "varietyList." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a ShopDetail message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.ele.model.dto.ele.ShopDetail} ShopDetail
                         */
                        ShopDetail.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.ele.model.dto.ele.ShopDetail)
                                return object;
                            var message = new $root.com.ele.model.dto.ele.ShopDetail();
                            if (object.shopImgUrl != null)
                                message.shopImgUrl = String(object.shopImgUrl);
                            if (object.shopName != null)
                                message.shopName = String(object.shopName);
                            if (object.shopAddress != null)
                                message.shopAddress = String(object.shopAddress);
                            if (object.shopService != null)
                                message.shopService = String(object.shopService);
                            if (object.announcement != null)
                                message.announcement = String(object.announcement);
                            if (object.openTime != null)
                                message.openTime = String(object.openTime);
                            if (object.slogan != null)
                                message.slogan = String(object.slogan);
                            if (object.starNum != null)
                                message.starNum = Number(object.starNum);
                            if (object.deliveryFee != null)
                                message.deliveryFee = Number(object.deliveryFee);
                            if (object.sendThreshold != null)
                                message.sendThreshold = Number(object.sendThreshold);
                            if (object.activityNum != null)
                                message.activityNum = object.activityNum >>> 0;
                            if (object.shopActivity) {
                                if (!Array.isArray(object.shopActivity))
                                    throw TypeError(".com.ele.model.dto.ele.ShopDetail.shopActivity: array expected");
                                message.shopActivity = [];
                                for (var i = 0; i < object.shopActivity.length; ++i) {
                                    if (typeof object.shopActivity[i] !== "object")
                                        throw TypeError(".com.ele.model.dto.ele.ShopDetail.shopActivity: object expected");
                                    message.shopActivity[i] = $root.com.ele.model.dto.ele.Promotion.fromObject(object.shopActivity[i]);
                                }
                            }
                            if (object.varietyList) {
                                if (!Array.isArray(object.varietyList))
                                    throw TypeError(".com.ele.model.dto.ele.ShopDetail.varietyList: array expected");
                                message.varietyList = [];
                                for (var i = 0; i < object.varietyList.length; ++i) {
                                    if (typeof object.varietyList[i] !== "object")
                                        throw TypeError(".com.ele.model.dto.ele.ShopDetail.varietyList: object expected");
                                    message.varietyList[i] = $root.com.ele.model.dto.ele.Variety.fromObject(object.varietyList[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a ShopDetail message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @static
                         * @param {com.ele.model.dto.ele.ShopDetail} message ShopDetail
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ShopDetail.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.shopActivity = [];
                                object.varietyList = [];
                            }
                            if (options.defaults) {
                                object.shopImgUrl = "";
                                object.shopName = "";
                                object.shopAddress = "";
                                object.shopService = "";
                                object.announcement = "";
                                object.openTime = "";
                                object.slogan = "";
                                object.starNum = 0;
                                object.deliveryFee = 0;
                                object.sendThreshold = 0;
                                object.activityNum = 0;
                            }
                            if (message.shopImgUrl != null && message.hasOwnProperty("shopImgUrl"))
                                object.shopImgUrl = message.shopImgUrl;
                            if (message.shopName != null && message.hasOwnProperty("shopName"))
                                object.shopName = message.shopName;
                            if (message.shopAddress != null && message.hasOwnProperty("shopAddress"))
                                object.shopAddress = message.shopAddress;
                            if (message.shopService != null && message.hasOwnProperty("shopService"))
                                object.shopService = message.shopService;
                            if (message.announcement != null && message.hasOwnProperty("announcement"))
                                object.announcement = message.announcement;
                            if (message.openTime != null && message.hasOwnProperty("openTime"))
                                object.openTime = message.openTime;
                            if (message.slogan != null && message.hasOwnProperty("slogan"))
                                object.slogan = message.slogan;
                            if (message.starNum != null && message.hasOwnProperty("starNum"))
                                object.starNum = options.json && !isFinite(message.starNum) ? String(message.starNum) : message.starNum;
                            if (message.deliveryFee != null && message.hasOwnProperty("deliveryFee"))
                                object.deliveryFee = options.json && !isFinite(message.deliveryFee) ? String(message.deliveryFee) : message.deliveryFee;
                            if (message.sendThreshold != null && message.hasOwnProperty("sendThreshold"))
                                object.sendThreshold = options.json && !isFinite(message.sendThreshold) ? String(message.sendThreshold) : message.sendThreshold;
                            if (message.activityNum != null && message.hasOwnProperty("activityNum"))
                                object.activityNum = message.activityNum;
                            if (message.shopActivity && message.shopActivity.length) {
                                object.shopActivity = [];
                                for (var j = 0; j < message.shopActivity.length; ++j)
                                    object.shopActivity[j] = $root.com.ele.model.dto.ele.Promotion.toObject(message.shopActivity[j], options);
                            }
                            if (message.varietyList && message.varietyList.length) {
                                object.varietyList = [];
                                for (var j = 0; j < message.varietyList.length; ++j)
                                    object.varietyList[j] = $root.com.ele.model.dto.ele.Variety.toObject(message.varietyList[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this ShopDetail to JSON.
                         * @function toJSON
                         * @memberof com.ele.model.dto.ele.ShopDetail
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ShopDetail.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return ShopDetail;
                    })();

                    ele.EvaluationStamp = (function() {

                        /**
                         * Properties of an EvaluationStamp.
                         * @memberof com.ele.model.dto.ele
                         * @interface IEvaluationStamp
                         * @property {string|null} [name] EvaluationStamp name
                         * @property {number|null} [num] EvaluationStamp num
                         */

                        /**
                         * Constructs a new EvaluationStamp.
                         * @memberof com.ele.model.dto.ele
                         * @classdesc Represents an EvaluationStamp.
                         * @implements IEvaluationStamp
                         * @constructor
                         * @param {com.ele.model.dto.ele.IEvaluationStamp=} [properties] Properties to set
                         */
                        function EvaluationStamp(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * EvaluationStamp name.
                         * @member {string} name
                         * @memberof com.ele.model.dto.ele.EvaluationStamp
                         * @instance
                         */
                        EvaluationStamp.prototype.name = "";

                        /**
                         * EvaluationStamp num.
                         * @member {number} num
                         * @memberof com.ele.model.dto.ele.EvaluationStamp
                         * @instance
                         */
                        EvaluationStamp.prototype.num = 0;

                        /**
                         * Creates a new EvaluationStamp instance using the specified properties.
                         * @function create
                         * @memberof com.ele.model.dto.ele.EvaluationStamp
                         * @static
                         * @param {com.ele.model.dto.ele.IEvaluationStamp=} [properties] Properties to set
                         * @returns {com.ele.model.dto.ele.EvaluationStamp} EvaluationStamp instance
                         */
                        EvaluationStamp.create = function create(properties) {
                            return new EvaluationStamp(properties);
                        };

                        /**
                         * Encodes the specified EvaluationStamp message. Does not implicitly {@link com.ele.model.dto.ele.EvaluationStamp.verify|verify} messages.
                         * @function encode
                         * @memberof com.ele.model.dto.ele.EvaluationStamp
                         * @static
                         * @param {com.ele.model.dto.ele.IEvaluationStamp} message EvaluationStamp message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EvaluationStamp.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.num != null && message.hasOwnProperty("num"))
                                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.num);
                            return writer;
                        };

                        /**
                         * Encodes the specified EvaluationStamp message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.EvaluationStamp.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.ele.model.dto.ele.EvaluationStamp
                         * @static
                         * @param {com.ele.model.dto.ele.IEvaluationStamp} message EvaluationStamp message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EvaluationStamp.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an EvaluationStamp message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.ele.model.dto.ele.EvaluationStamp
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.ele.model.dto.ele.EvaluationStamp} EvaluationStamp
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EvaluationStamp.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.ele.model.dto.ele.EvaluationStamp();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    message.num = reader.uint32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an EvaluationStamp message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.ele.model.dto.ele.EvaluationStamp
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.ele.model.dto.ele.EvaluationStamp} EvaluationStamp
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EvaluationStamp.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an EvaluationStamp message.
                         * @function verify
                         * @memberof com.ele.model.dto.ele.EvaluationStamp
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        EvaluationStamp.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.num != null && message.hasOwnProperty("num"))
                                if (!$util.isInteger(message.num))
                                    return "num: integer expected";
                            return null;
                        };

                        /**
                         * Creates an EvaluationStamp message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.ele.model.dto.ele.EvaluationStamp
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.ele.model.dto.ele.EvaluationStamp} EvaluationStamp
                         */
                        EvaluationStamp.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.ele.model.dto.ele.EvaluationStamp)
                                return object;
                            var message = new $root.com.ele.model.dto.ele.EvaluationStamp();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.num != null)
                                message.num = object.num >>> 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from an EvaluationStamp message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.ele.model.dto.ele.EvaluationStamp
                         * @static
                         * @param {com.ele.model.dto.ele.EvaluationStamp} message EvaluationStamp
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        EvaluationStamp.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.name = "";
                                object.num = 0;
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.num != null && message.hasOwnProperty("num"))
                                object.num = message.num;
                            return object;
                        };

                        /**
                         * Converts this EvaluationStamp to JSON.
                         * @function toJSON
                         * @memberof com.ele.model.dto.ele.EvaluationStamp
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        EvaluationStamp.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return EvaluationStamp;
                    })();

                    ele.EvaluationComment = (function() {

                        /**
                         * Properties of an EvaluationComment.
                         * @memberof com.ele.model.dto.ele
                         * @interface IEvaluationComment
                         * @property {string|null} [profileImg] EvaluationComment profileImg
                         * @property {string|null} [name] EvaluationComment name
                         * @property {string|null} [time] EvaluationComment time
                         * @property {Array.<string>|null} [foods] EvaluationComment foods
                         * @property {string|null} [content] EvaluationComment content
                         * @property {string|null} [costTime] EvaluationComment costTime
                         * @property {number|null} [star] EvaluationComment star
                         */

                        /**
                         * Constructs a new EvaluationComment.
                         * @memberof com.ele.model.dto.ele
                         * @classdesc Represents an EvaluationComment.
                         * @implements IEvaluationComment
                         * @constructor
                         * @param {com.ele.model.dto.ele.IEvaluationComment=} [properties] Properties to set
                         */
                        function EvaluationComment(properties) {
                            this.foods = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * EvaluationComment profileImg.
                         * @member {string} profileImg
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @instance
                         */
                        EvaluationComment.prototype.profileImg = "";

                        /**
                         * EvaluationComment name.
                         * @member {string} name
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @instance
                         */
                        EvaluationComment.prototype.name = "";

                        /**
                         * EvaluationComment time.
                         * @member {string} time
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @instance
                         */
                        EvaluationComment.prototype.time = "";

                        /**
                         * EvaluationComment foods.
                         * @member {Array.<string>} foods
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @instance
                         */
                        EvaluationComment.prototype.foods = $util.emptyArray;

                        /**
                         * EvaluationComment content.
                         * @member {string} content
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @instance
                         */
                        EvaluationComment.prototype.content = "";

                        /**
                         * EvaluationComment costTime.
                         * @member {string} costTime
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @instance
                         */
                        EvaluationComment.prototype.costTime = "";

                        /**
                         * EvaluationComment star.
                         * @member {number} star
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @instance
                         */
                        EvaluationComment.prototype.star = 0;

                        /**
                         * Creates a new EvaluationComment instance using the specified properties.
                         * @function create
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @static
                         * @param {com.ele.model.dto.ele.IEvaluationComment=} [properties] Properties to set
                         * @returns {com.ele.model.dto.ele.EvaluationComment} EvaluationComment instance
                         */
                        EvaluationComment.create = function create(properties) {
                            return new EvaluationComment(properties);
                        };

                        /**
                         * Encodes the specified EvaluationComment message. Does not implicitly {@link com.ele.model.dto.ele.EvaluationComment.verify|verify} messages.
                         * @function encode
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @static
                         * @param {com.ele.model.dto.ele.IEvaluationComment} message EvaluationComment message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EvaluationComment.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.profileImg != null && message.hasOwnProperty("profileImg"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.profileImg);
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                            if (message.time != null && message.hasOwnProperty("time"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.time);
                            if (message.foods != null && message.foods.length)
                                for (var i = 0; i < message.foods.length; ++i)
                                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.foods[i]);
                            if (message.content != null && message.hasOwnProperty("content"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
                            if (message.costTime != null && message.hasOwnProperty("costTime"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.costTime);
                            if (message.star != null && message.hasOwnProperty("star"))
                                writer.uint32(/* id 7, wireType 1 =*/57).double(message.star);
                            return writer;
                        };

                        /**
                         * Encodes the specified EvaluationComment message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.EvaluationComment.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @static
                         * @param {com.ele.model.dto.ele.IEvaluationComment} message EvaluationComment message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EvaluationComment.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an EvaluationComment message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.ele.model.dto.ele.EvaluationComment} EvaluationComment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EvaluationComment.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.ele.model.dto.ele.EvaluationComment();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.profileImg = reader.string();
                                    break;
                                case 2:
                                    message.name = reader.string();
                                    break;
                                case 3:
                                    message.time = reader.string();
                                    break;
                                case 4:
                                    if (!(message.foods && message.foods.length))
                                        message.foods = [];
                                    message.foods.push(reader.string());
                                    break;
                                case 5:
                                    message.content = reader.string();
                                    break;
                                case 6:
                                    message.costTime = reader.string();
                                    break;
                                case 7:
                                    message.star = reader.double();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an EvaluationComment message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.ele.model.dto.ele.EvaluationComment} EvaluationComment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EvaluationComment.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an EvaluationComment message.
                         * @function verify
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        EvaluationComment.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.profileImg != null && message.hasOwnProperty("profileImg"))
                                if (!$util.isString(message.profileImg))
                                    return "profileImg: string expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.time != null && message.hasOwnProperty("time"))
                                if (!$util.isString(message.time))
                                    return "time: string expected";
                            if (message.foods != null && message.hasOwnProperty("foods")) {
                                if (!Array.isArray(message.foods))
                                    return "foods: array expected";
                                for (var i = 0; i < message.foods.length; ++i)
                                    if (!$util.isString(message.foods[i]))
                                        return "foods: string[] expected";
                            }
                            if (message.content != null && message.hasOwnProperty("content"))
                                if (!$util.isString(message.content))
                                    return "content: string expected";
                            if (message.costTime != null && message.hasOwnProperty("costTime"))
                                if (!$util.isString(message.costTime))
                                    return "costTime: string expected";
                            if (message.star != null && message.hasOwnProperty("star"))
                                if (typeof message.star !== "number")
                                    return "star: number expected";
                            return null;
                        };

                        /**
                         * Creates an EvaluationComment message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.ele.model.dto.ele.EvaluationComment} EvaluationComment
                         */
                        EvaluationComment.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.ele.model.dto.ele.EvaluationComment)
                                return object;
                            var message = new $root.com.ele.model.dto.ele.EvaluationComment();
                            if (object.profileImg != null)
                                message.profileImg = String(object.profileImg);
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.time != null)
                                message.time = String(object.time);
                            if (object.foods) {
                                if (!Array.isArray(object.foods))
                                    throw TypeError(".com.ele.model.dto.ele.EvaluationComment.foods: array expected");
                                message.foods = [];
                                for (var i = 0; i < object.foods.length; ++i)
                                    message.foods[i] = String(object.foods[i]);
                            }
                            if (object.content != null)
                                message.content = String(object.content);
                            if (object.costTime != null)
                                message.costTime = String(object.costTime);
                            if (object.star != null)
                                message.star = Number(object.star);
                            return message;
                        };

                        /**
                         * Creates a plain object from an EvaluationComment message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @static
                         * @param {com.ele.model.dto.ele.EvaluationComment} message EvaluationComment
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        EvaluationComment.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.foods = [];
                            if (options.defaults) {
                                object.profileImg = "";
                                object.name = "";
                                object.time = "";
                                object.content = "";
                                object.costTime = "";
                                object.star = 0;
                            }
                            if (message.profileImg != null && message.hasOwnProperty("profileImg"))
                                object.profileImg = message.profileImg;
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.time != null && message.hasOwnProperty("time"))
                                object.time = message.time;
                            if (message.foods && message.foods.length) {
                                object.foods = [];
                                for (var j = 0; j < message.foods.length; ++j)
                                    object.foods[j] = message.foods[j];
                            }
                            if (message.content != null && message.hasOwnProperty("content"))
                                object.content = message.content;
                            if (message.costTime != null && message.hasOwnProperty("costTime"))
                                object.costTime = message.costTime;
                            if (message.star != null && message.hasOwnProperty("star"))
                                object.star = options.json && !isFinite(message.star) ? String(message.star) : message.star;
                            return object;
                        };

                        /**
                         * Converts this EvaluationComment to JSON.
                         * @function toJSON
                         * @memberof com.ele.model.dto.ele.EvaluationComment
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        EvaluationComment.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return EvaluationComment;
                    })();

                    ele.ShopEvaluation = (function() {

                        /**
                         * Properties of a ShopEvaluation.
                         * @memberof com.ele.model.dto.ele
                         * @interface IShopEvaluation
                         * @property {number|null} [score] ShopEvaluation score
                         * @property {number|null} [ratio] ShopEvaluation ratio
                         * @property {number|null} [service] ShopEvaluation service
                         * @property {number|null} [dish] ShopEvaluation dish
                         * @property {number|null} [time] ShopEvaluation time
                         * @property {Array.<com.ele.model.dto.ele.IEvaluationStamp>|null} [stamps] ShopEvaluation stamps
                         * @property {Array.<com.ele.model.dto.ele.IEvaluationComment>|null} [comments] ShopEvaluation comments
                         */

                        /**
                         * Constructs a new ShopEvaluation.
                         * @memberof com.ele.model.dto.ele
                         * @classdesc Represents a ShopEvaluation.
                         * @implements IShopEvaluation
                         * @constructor
                         * @param {com.ele.model.dto.ele.IShopEvaluation=} [properties] Properties to set
                         */
                        function ShopEvaluation(properties) {
                            this.stamps = [];
                            this.comments = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ShopEvaluation score.
                         * @member {number} score
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @instance
                         */
                        ShopEvaluation.prototype.score = 0;

                        /**
                         * ShopEvaluation ratio.
                         * @member {number} ratio
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @instance
                         */
                        ShopEvaluation.prototype.ratio = 0;

                        /**
                         * ShopEvaluation service.
                         * @member {number} service
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @instance
                         */
                        ShopEvaluation.prototype.service = 0;

                        /**
                         * ShopEvaluation dish.
                         * @member {number} dish
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @instance
                         */
                        ShopEvaluation.prototype.dish = 0;

                        /**
                         * ShopEvaluation time.
                         * @member {number} time
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @instance
                         */
                        ShopEvaluation.prototype.time = 0;

                        /**
                         * ShopEvaluation stamps.
                         * @member {Array.<com.ele.model.dto.ele.IEvaluationStamp>} stamps
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @instance
                         */
                        ShopEvaluation.prototype.stamps = $util.emptyArray;

                        /**
                         * ShopEvaluation comments.
                         * @member {Array.<com.ele.model.dto.ele.IEvaluationComment>} comments
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @instance
                         */
                        ShopEvaluation.prototype.comments = $util.emptyArray;

                        /**
                         * Creates a new ShopEvaluation instance using the specified properties.
                         * @function create
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @static
                         * @param {com.ele.model.dto.ele.IShopEvaluation=} [properties] Properties to set
                         * @returns {com.ele.model.dto.ele.ShopEvaluation} ShopEvaluation instance
                         */
                        ShopEvaluation.create = function create(properties) {
                            return new ShopEvaluation(properties);
                        };

                        /**
                         * Encodes the specified ShopEvaluation message. Does not implicitly {@link com.ele.model.dto.ele.ShopEvaluation.verify|verify} messages.
                         * @function encode
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @static
                         * @param {com.ele.model.dto.ele.IShopEvaluation} message ShopEvaluation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ShopEvaluation.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.score != null && message.hasOwnProperty("score"))
                                writer.uint32(/* id 1, wireType 1 =*/9).double(message.score);
                            if (message.ratio != null && message.hasOwnProperty("ratio"))
                                writer.uint32(/* id 2, wireType 1 =*/17).double(message.ratio);
                            if (message.service != null && message.hasOwnProperty("service"))
                                writer.uint32(/* id 3, wireType 1 =*/25).double(message.service);
                            if (message.dish != null && message.hasOwnProperty("dish"))
                                writer.uint32(/* id 4, wireType 1 =*/33).double(message.dish);
                            if (message.time != null && message.hasOwnProperty("time"))
                                writer.uint32(/* id 5, wireType 1 =*/41).double(message.time);
                            if (message.stamps != null && message.stamps.length)
                                for (var i = 0; i < message.stamps.length; ++i)
                                    $root.com.ele.model.dto.ele.EvaluationStamp.encode(message.stamps[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                            if (message.comments != null && message.comments.length)
                                for (var i = 0; i < message.comments.length; ++i)
                                    $root.com.ele.model.dto.ele.EvaluationComment.encode(message.comments[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified ShopEvaluation message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.ShopEvaluation.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @static
                         * @param {com.ele.model.dto.ele.IShopEvaluation} message ShopEvaluation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ShopEvaluation.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ShopEvaluation message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.ele.model.dto.ele.ShopEvaluation} ShopEvaluation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ShopEvaluation.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.ele.model.dto.ele.ShopEvaluation();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.score = reader.double();
                                    break;
                                case 2:
                                    message.ratio = reader.double();
                                    break;
                                case 3:
                                    message.service = reader.double();
                                    break;
                                case 4:
                                    message.dish = reader.double();
                                    break;
                                case 5:
                                    message.time = reader.double();
                                    break;
                                case 6:
                                    if (!(message.stamps && message.stamps.length))
                                        message.stamps = [];
                                    message.stamps.push($root.com.ele.model.dto.ele.EvaluationStamp.decode(reader, reader.uint32()));
                                    break;
                                case 7:
                                    if (!(message.comments && message.comments.length))
                                        message.comments = [];
                                    message.comments.push($root.com.ele.model.dto.ele.EvaluationComment.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ShopEvaluation message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.ele.model.dto.ele.ShopEvaluation} ShopEvaluation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ShopEvaluation.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ShopEvaluation message.
                         * @function verify
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ShopEvaluation.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.score != null && message.hasOwnProperty("score"))
                                if (typeof message.score !== "number")
                                    return "score: number expected";
                            if (message.ratio != null && message.hasOwnProperty("ratio"))
                                if (typeof message.ratio !== "number")
                                    return "ratio: number expected";
                            if (message.service != null && message.hasOwnProperty("service"))
                                if (typeof message.service !== "number")
                                    return "service: number expected";
                            if (message.dish != null && message.hasOwnProperty("dish"))
                                if (typeof message.dish !== "number")
                                    return "dish: number expected";
                            if (message.time != null && message.hasOwnProperty("time"))
                                if (typeof message.time !== "number")
                                    return "time: number expected";
                            if (message.stamps != null && message.hasOwnProperty("stamps")) {
                                if (!Array.isArray(message.stamps))
                                    return "stamps: array expected";
                                for (var i = 0; i < message.stamps.length; ++i) {
                                    var error = $root.com.ele.model.dto.ele.EvaluationStamp.verify(message.stamps[i]);
                                    if (error)
                                        return "stamps." + error;
                                }
                            }
                            if (message.comments != null && message.hasOwnProperty("comments")) {
                                if (!Array.isArray(message.comments))
                                    return "comments: array expected";
                                for (var i = 0; i < message.comments.length; ++i) {
                                    var error = $root.com.ele.model.dto.ele.EvaluationComment.verify(message.comments[i]);
                                    if (error)
                                        return "comments." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a ShopEvaluation message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.ele.model.dto.ele.ShopEvaluation} ShopEvaluation
                         */
                        ShopEvaluation.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.ele.model.dto.ele.ShopEvaluation)
                                return object;
                            var message = new $root.com.ele.model.dto.ele.ShopEvaluation();
                            if (object.score != null)
                                message.score = Number(object.score);
                            if (object.ratio != null)
                                message.ratio = Number(object.ratio);
                            if (object.service != null)
                                message.service = Number(object.service);
                            if (object.dish != null)
                                message.dish = Number(object.dish);
                            if (object.time != null)
                                message.time = Number(object.time);
                            if (object.stamps) {
                                if (!Array.isArray(object.stamps))
                                    throw TypeError(".com.ele.model.dto.ele.ShopEvaluation.stamps: array expected");
                                message.stamps = [];
                                for (var i = 0; i < object.stamps.length; ++i) {
                                    if (typeof object.stamps[i] !== "object")
                                        throw TypeError(".com.ele.model.dto.ele.ShopEvaluation.stamps: object expected");
                                    message.stamps[i] = $root.com.ele.model.dto.ele.EvaluationStamp.fromObject(object.stamps[i]);
                                }
                            }
                            if (object.comments) {
                                if (!Array.isArray(object.comments))
                                    throw TypeError(".com.ele.model.dto.ele.ShopEvaluation.comments: array expected");
                                message.comments = [];
                                for (var i = 0; i < object.comments.length; ++i) {
                                    if (typeof object.comments[i] !== "object")
                                        throw TypeError(".com.ele.model.dto.ele.ShopEvaluation.comments: object expected");
                                    message.comments[i] = $root.com.ele.model.dto.ele.EvaluationComment.fromObject(object.comments[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a ShopEvaluation message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @static
                         * @param {com.ele.model.dto.ele.ShopEvaluation} message ShopEvaluation
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ShopEvaluation.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.stamps = [];
                                object.comments = [];
                            }
                            if (options.defaults) {
                                object.score = 0;
                                object.ratio = 0;
                                object.service = 0;
                                object.dish = 0;
                                object.time = 0;
                            }
                            if (message.score != null && message.hasOwnProperty("score"))
                                object.score = options.json && !isFinite(message.score) ? String(message.score) : message.score;
                            if (message.ratio != null && message.hasOwnProperty("ratio"))
                                object.ratio = options.json && !isFinite(message.ratio) ? String(message.ratio) : message.ratio;
                            if (message.service != null && message.hasOwnProperty("service"))
                                object.service = options.json && !isFinite(message.service) ? String(message.service) : message.service;
                            if (message.dish != null && message.hasOwnProperty("dish"))
                                object.dish = options.json && !isFinite(message.dish) ? String(message.dish) : message.dish;
                            if (message.time != null && message.hasOwnProperty("time"))
                                object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
                            if (message.stamps && message.stamps.length) {
                                object.stamps = [];
                                for (var j = 0; j < message.stamps.length; ++j)
                                    object.stamps[j] = $root.com.ele.model.dto.ele.EvaluationStamp.toObject(message.stamps[j], options);
                            }
                            if (message.comments && message.comments.length) {
                                object.comments = [];
                                for (var j = 0; j < message.comments.length; ++j)
                                    object.comments[j] = $root.com.ele.model.dto.ele.EvaluationComment.toObject(message.comments[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this ShopEvaluation to JSON.
                         * @function toJSON
                         * @memberof com.ele.model.dto.ele.ShopEvaluation
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ShopEvaluation.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return ShopEvaluation;
                    })();

                    return ele;
                })();

                return dto;
            })();

            return model;
        })();

        return ele;
    })();

    return com;
})();

module.exports = $root;
