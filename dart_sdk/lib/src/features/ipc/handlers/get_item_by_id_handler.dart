import 'dart:convert';

import 'package:pylons_sdk/src/core/constants/strings.dart';
import 'package:pylons_sdk/src/features/ipc/base/ipc_handler.dart';
import 'package:pylons_sdk/src/features/models/sdk_ipc_response.dart';
import 'package:pylons_sdk/src/generated/pylons/item.pb.dart';

import '../../../pylons_wallet/response_fetcher/response_fetch.dart';

class GetItemByIdHandler implements IPCHandler {
  @override
  void handler(SDKIPCResponse<dynamic> response) {
    final defaultResponse = SDKIPCResponse<Item>(
        success: response.success,
        action: response.action,
        data: Item.create()..createEmptyInstance(),
        error: response.error,
        errorCode: response.errorCode);

    try {
      if (response.success) {
        defaultResponse.data = Item.create()
          ..mergeFromProto3Json(jsonDecode(response.data));
      }
    } on FormatException catch (_) {
      defaultResponse.error = _.message;
      defaultResponse.errorCode = Strings.ERR_MALFORMED_ITEM;
      defaultResponse.success = false;
    }

        getResponseFetch().complete(key: Strings.GET_ITEM_BY_ID, sdkipcResponse: defaultResponse);

  }
}
