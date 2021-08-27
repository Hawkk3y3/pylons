/* eslint-disable */
import { Cookbook } from '../pylons/cookbook';
import { Recipe } from '../pylons/recipe';
import { Coin } from '../cosmos/base/v1beta1/coin';
import { Item, StringKeyValue } from '../pylons/item';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'Pylonstech.pylons.pylons';
const baseEventCreateAccount = { address: '' };
export const EventCreateAccount = {
    encode(message, writer = Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventCreateAccount };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventCreateAccount };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventCreateAccount };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        return message;
    }
};
const baseEventCreateCookbook = { creator: '', ID: '' };
export const EventCreateCookbook = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== '') {
            writer.uint32(18).string(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventCreateCookbook };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventCreateCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventCreateCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        return message;
    }
};
const baseEventUpdateCookbook = {};
export const EventUpdateCookbook = {
    encode(message, writer = Writer.create()) {
        if (message.originalCookbook !== undefined) {
            Cookbook.encode(message.originalCookbook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventUpdateCookbook };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originalCookbook = Cookbook.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventUpdateCookbook };
        if (object.originalCookbook !== undefined && object.originalCookbook !== null) {
            message.originalCookbook = Cookbook.fromJSON(object.originalCookbook);
        }
        else {
            message.originalCookbook = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originalCookbook !== undefined && (obj.originalCookbook = message.originalCookbook ? Cookbook.toJSON(message.originalCookbook) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventUpdateCookbook };
        if (object.originalCookbook !== undefined && object.originalCookbook !== null) {
            message.originalCookbook = Cookbook.fromPartial(object.originalCookbook);
        }
        else {
            message.originalCookbook = undefined;
        }
        return message;
    }
};
const baseEventTransferCookbook = { sender: '', receiver: '', ID: '' };
export const EventTransferCookbook = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== '') {
            writer.uint32(18).string(message.receiver);
        }
        if (message.ID !== '') {
            writer.uint32(26).string(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventTransferCookbook };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.ID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventTransferCookbook };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.ID !== undefined && (obj.ID = message.ID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventTransferCookbook };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        return message;
    }
};
const baseEventCreateRecipe = { creator: '', CookbookID: '', ID: '' };
export const EventCreateRecipe = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.CookbookID !== '') {
            writer.uint32(18).string(message.CookbookID);
        }
        if (message.ID !== '') {
            writer.uint32(26).string(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventCreateRecipe };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.CookbookID = reader.string();
                    break;
                case 3:
                    message.ID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventCreateRecipe };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.CookbookID !== undefined && object.CookbookID !== null) {
            message.CookbookID = String(object.CookbookID);
        }
        else {
            message.CookbookID = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID);
        message.ID !== undefined && (obj.ID = message.ID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventCreateRecipe };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.CookbookID !== undefined && object.CookbookID !== null) {
            message.CookbookID = object.CookbookID;
        }
        else {
            message.CookbookID = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        return message;
    }
};
const baseEventUpdateRecipe = {};
export const EventUpdateRecipe = {
    encode(message, writer = Writer.create()) {
        if (message.originalRecipe !== undefined) {
            Recipe.encode(message.originalRecipe, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventUpdateRecipe };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originalRecipe = Recipe.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventUpdateRecipe };
        if (object.originalRecipe !== undefined && object.originalRecipe !== null) {
            message.originalRecipe = Recipe.fromJSON(object.originalRecipe);
        }
        else {
            message.originalRecipe = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originalRecipe !== undefined && (obj.originalRecipe = message.originalRecipe ? Recipe.toJSON(message.originalRecipe) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventUpdateRecipe };
        if (object.originalRecipe !== undefined && object.originalRecipe !== null) {
            message.originalRecipe = Recipe.fromPartial(object.originalRecipe);
        }
        else {
            message.originalRecipe = undefined;
        }
        return message;
    }
};
const baseEventCreateExecution = { creator: '', ID: '' };
export const EventCreateExecution = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== '') {
            writer.uint32(18).string(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventCreateExecution };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventCreateExecution };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventCreateExecution };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        return message;
    }
};
const baseEventCompleteExecution = { creator: '', ID: '' };
export const EventCompleteExecution = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== '') {
            writer.uint32(18).string(message.ID);
        }
        for (const v of message.burnCoins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.payCoins) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.transferCoins) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.feeCoins) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.coinOutputs) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.mintItems) {
            Item.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.modifyItems) {
            Item.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventCompleteExecution };
        message.burnCoins = [];
        message.payCoins = [];
        message.transferCoins = [];
        message.feeCoins = [];
        message.coinOutputs = [];
        message.mintItems = [];
        message.modifyItems = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                case 3:
                    message.burnCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.payCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.transferCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.feeCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.coinOutputs.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.mintItems.push(Item.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.modifyItems.push(Item.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventCompleteExecution };
        message.burnCoins = [];
        message.payCoins = [];
        message.transferCoins = [];
        message.feeCoins = [];
        message.coinOutputs = [];
        message.mintItems = [];
        message.modifyItems = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        if (object.burnCoins !== undefined && object.burnCoins !== null) {
            for (const e of object.burnCoins) {
                message.burnCoins.push(Coin.fromJSON(e));
            }
        }
        if (object.payCoins !== undefined && object.payCoins !== null) {
            for (const e of object.payCoins) {
                message.payCoins.push(Coin.fromJSON(e));
            }
        }
        if (object.transferCoins !== undefined && object.transferCoins !== null) {
            for (const e of object.transferCoins) {
                message.transferCoins.push(Coin.fromJSON(e));
            }
        }
        if (object.feeCoins !== undefined && object.feeCoins !== null) {
            for (const e of object.feeCoins) {
                message.feeCoins.push(Coin.fromJSON(e));
            }
        }
        if (object.coinOutputs !== undefined && object.coinOutputs !== null) {
            for (const e of object.coinOutputs) {
                message.coinOutputs.push(Coin.fromJSON(e));
            }
        }
        if (object.mintItems !== undefined && object.mintItems !== null) {
            for (const e of object.mintItems) {
                message.mintItems.push(Item.fromJSON(e));
            }
        }
        if (object.modifyItems !== undefined && object.modifyItems !== null) {
            for (const e of object.modifyItems) {
                message.modifyItems.push(Item.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        if (message.burnCoins) {
            obj.burnCoins = message.burnCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.burnCoins = [];
        }
        if (message.payCoins) {
            obj.payCoins = message.payCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.payCoins = [];
        }
        if (message.transferCoins) {
            obj.transferCoins = message.transferCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.transferCoins = [];
        }
        if (message.feeCoins) {
            obj.feeCoins = message.feeCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.feeCoins = [];
        }
        if (message.coinOutputs) {
            obj.coinOutputs = message.coinOutputs.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.coinOutputs = [];
        }
        if (message.mintItems) {
            obj.mintItems = message.mintItems.map((e) => (e ? Item.toJSON(e) : undefined));
        }
        else {
            obj.mintItems = [];
        }
        if (message.modifyItems) {
            obj.modifyItems = message.modifyItems.map((e) => (e ? Item.toJSON(e) : undefined));
        }
        else {
            obj.modifyItems = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventCompleteExecution };
        message.burnCoins = [];
        message.payCoins = [];
        message.transferCoins = [];
        message.feeCoins = [];
        message.coinOutputs = [];
        message.mintItems = [];
        message.modifyItems = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        if (object.burnCoins !== undefined && object.burnCoins !== null) {
            for (const e of object.burnCoins) {
                message.burnCoins.push(Coin.fromPartial(e));
            }
        }
        if (object.payCoins !== undefined && object.payCoins !== null) {
            for (const e of object.payCoins) {
                message.payCoins.push(Coin.fromPartial(e));
            }
        }
        if (object.transferCoins !== undefined && object.transferCoins !== null) {
            for (const e of object.transferCoins) {
                message.transferCoins.push(Coin.fromPartial(e));
            }
        }
        if (object.feeCoins !== undefined && object.feeCoins !== null) {
            for (const e of object.feeCoins) {
                message.feeCoins.push(Coin.fromPartial(e));
            }
        }
        if (object.coinOutputs !== undefined && object.coinOutputs !== null) {
            for (const e of object.coinOutputs) {
                message.coinOutputs.push(Coin.fromPartial(e));
            }
        }
        if (object.mintItems !== undefined && object.mintItems !== null) {
            for (const e of object.mintItems) {
                message.mintItems.push(Item.fromPartial(e));
            }
        }
        if (object.modifyItems !== undefined && object.modifyItems !== null) {
            for (const e of object.modifyItems) {
                message.modifyItems.push(Item.fromPartial(e));
            }
        }
        return message;
    }
};
const baseEventDropExecution = { creator: '', ID: '' };
export const EventDropExecution = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== '') {
            writer.uint32(18).string(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventDropExecution };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventDropExecution };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventDropExecution };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        return message;
    }
};
const baseEventCompleteExecutionEarly = { creator: '', ID: '' };
export const EventCompleteExecutionEarly = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== '') {
            writer.uint32(18).string(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventCompleteExecutionEarly };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventCompleteExecutionEarly };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventCompleteExecutionEarly };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        return message;
    }
};
const baseEventSendItems = { sender: '', receiver: '', CookbookID: '', IDs: '' };
export const EventSendItems = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== '') {
            writer.uint32(18).string(message.receiver);
        }
        if (message.CookbookID !== '') {
            writer.uint32(26).string(message.CookbookID);
        }
        for (const v of message.IDs) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventSendItems };
        message.IDs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.CookbookID = reader.string();
                    break;
                case 4:
                    message.IDs.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventSendItems };
        message.IDs = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = '';
        }
        if (object.CookbookID !== undefined && object.CookbookID !== null) {
            message.CookbookID = String(object.CookbookID);
        }
        else {
            message.CookbookID = '';
        }
        if (object.IDs !== undefined && object.IDs !== null) {
            for (const e of object.IDs) {
                message.IDs.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID);
        if (message.IDs) {
            obj.IDs = message.IDs.map((e) => e);
        }
        else {
            obj.IDs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventSendItems };
        message.IDs = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = '';
        }
        if (object.CookbookID !== undefined && object.CookbookID !== null) {
            message.CookbookID = object.CookbookID;
        }
        else {
            message.CookbookID = '';
        }
        if (object.IDs !== undefined && object.IDs !== null) {
            for (const e of object.IDs) {
                message.IDs.push(e);
            }
        }
        return message;
    }
};
const baseEventSetItemString = { creator: '', CookbookID: '', ID: '' };
export const EventSetItemString = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.CookbookID !== '') {
            writer.uint32(18).string(message.CookbookID);
        }
        if (message.ID !== '') {
            writer.uint32(26).string(message.ID);
        }
        for (const v of message.originalMutableStrings) {
            StringKeyValue.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventSetItemString };
        message.originalMutableStrings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.CookbookID = reader.string();
                    break;
                case 3:
                    message.ID = reader.string();
                    break;
                case 4:
                    message.originalMutableStrings.push(StringKeyValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventSetItemString };
        message.originalMutableStrings = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.CookbookID !== undefined && object.CookbookID !== null) {
            message.CookbookID = String(object.CookbookID);
        }
        else {
            message.CookbookID = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        if (object.originalMutableStrings !== undefined && object.originalMutableStrings !== null) {
            for (const e of object.originalMutableStrings) {
                message.originalMutableStrings.push(StringKeyValue.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID);
        message.ID !== undefined && (obj.ID = message.ID);
        if (message.originalMutableStrings) {
            obj.originalMutableStrings = message.originalMutableStrings.map((e) => (e ? StringKeyValue.toJSON(e) : undefined));
        }
        else {
            obj.originalMutableStrings = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventSetItemString };
        message.originalMutableStrings = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.CookbookID !== undefined && object.CookbookID !== null) {
            message.CookbookID = object.CookbookID;
        }
        else {
            message.CookbookID = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        if (object.originalMutableStrings !== undefined && object.originalMutableStrings !== null) {
            for (const e of object.originalMutableStrings) {
                message.originalMutableStrings.push(StringKeyValue.fromPartial(e));
            }
        }
        return message;
    }
};
const baseEventGooglePurchase = { creator: '', productID: '', purchaseToken: '', receiptDataBase64: '', signature: '' };
export const EventGooglePurchase = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.productID !== '') {
            writer.uint32(18).string(message.productID);
        }
        if (message.purchaseToken !== '') {
            writer.uint32(26).string(message.purchaseToken);
        }
        if (message.receiptDataBase64 !== '') {
            writer.uint32(34).string(message.receiptDataBase64);
        }
        if (message.signature !== '') {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventGooglePurchase };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.productID = reader.string();
                    break;
                case 3:
                    message.purchaseToken = reader.string();
                    break;
                case 4:
                    message.receiptDataBase64 = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventGooglePurchase };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.productID !== undefined && object.productID !== null) {
            message.productID = String(object.productID);
        }
        else {
            message.productID = '';
        }
        if (object.purchaseToken !== undefined && object.purchaseToken !== null) {
            message.purchaseToken = String(object.purchaseToken);
        }
        else {
            message.purchaseToken = '';
        }
        if (object.receiptDataBase64 !== undefined && object.receiptDataBase64 !== null) {
            message.receiptDataBase64 = String(object.receiptDataBase64);
        }
        else {
            message.receiptDataBase64 = '';
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.productID !== undefined && (obj.productID = message.productID);
        message.purchaseToken !== undefined && (obj.purchaseToken = message.purchaseToken);
        message.receiptDataBase64 !== undefined && (obj.receiptDataBase64 = message.receiptDataBase64);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventGooglePurchase };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.productID !== undefined && object.productID !== null) {
            message.productID = object.productID;
        }
        else {
            message.productID = '';
        }
        if (object.purchaseToken !== undefined && object.purchaseToken !== null) {
            message.purchaseToken = object.purchaseToken;
        }
        else {
            message.purchaseToken = '';
        }
        if (object.receiptDataBase64 !== undefined && object.receiptDataBase64 !== null) {
            message.receiptDataBase64 = object.receiptDataBase64;
        }
        else {
            message.receiptDataBase64 = '';
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = '';
        }
        return message;
    }
};
const baseEventStripePurchase = { creator: '', ID: '' };
export const EventStripePurchase = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== '') {
            writer.uint32(18).string(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventStripePurchase };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventStripePurchase };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventStripePurchase };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        return message;
    }
};
