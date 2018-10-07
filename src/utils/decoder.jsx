import * as protobuf from "protobufjs";

export function decodeItem(decoder, buffer) {
    const reader = new protobuf.Reader(new Uint8Array(buffer));

    return decoder.decodeDelimited(reader);
}

export function decodeArray(decoder, buffer, max = -1) {
    debugger;
    const reader = new protobuf.Reader(new Uint8Array(buffer));
    const result = [];
    while (reader.len > reader.pos) {
        result.push(decoder.decodeDelimited(reader));
        if (result.length === max) {
            break;
        }
    }

    return result;
}