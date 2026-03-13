(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.nostratech:modula'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.nostratech:modula'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'com.nostratech:modula'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'com.nostratech:modula'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'com.nostratech:modula'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'com.nostratech:modula'.");
    }
    globalThis['com.nostratech:modula'] = factory(typeof globalThis['com.nostratech:modula'] === 'undefined' ? {} : globalThis['com.nostratech:modula'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.c7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i6;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var initMetadataForObject = kotlin_kotlin.$_$.m6;
  var VOID = kotlin_kotlin.$_$.b;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var objectCreate = kotlin_kotlin.$_$.b7;
  var toString = kotlin_kotlin.$_$.v9;
  var getStringHashCode = kotlin_kotlin.$_$.f6;
  var getBooleanHashCode = kotlin_kotlin.$_$.c6;
  var equals = kotlin_kotlin.$_$.b6;
  var initMetadataForClass = kotlin_kotlin.$_$.h6;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var getNumberHashCode = kotlin_kotlin.$_$.d6;
  var getKClass = kotlin_kotlin.$_$.o7;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.c;
  var lazy = kotlin_kotlin.$_$.q9;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var toString_0 = kotlin_kotlin.$_$.e7;
  var hashCode = kotlin_kotlin.$_$.g6;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var isCharSequence = kotlin_kotlin.$_$.r6;
  var trim = kotlin_kotlin.$_$.m8;
  var arrayOf = kotlin_kotlin.$_$.j9;
  var createKType = kotlin_kotlin.$_$.m7;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var isInterface = kotlin_kotlin.$_$.v6;
  var listOf = kotlin_kotlin.$_$.l4;
  var KtList = kotlin_kotlin.$_$.f3;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.l7;
  var startsWith = kotlin_kotlin.$_$.a8;
  var println = kotlin_kotlin.$_$.b5;
  var printStackTrace = kotlin_kotlin.$_$.u9;
  var emptyList = kotlin_kotlin.$_$.a4;
  var Exception = kotlin_kotlin.$_$.t8;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var copyToArray = kotlin_kotlin.$_$.z3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.s9;
  var defineProp = kotlin_kotlin.$_$.a6;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SDUIStyle, 'SDUIStyle', SDUIStyle, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SDUIMargin, 'SDUIMargin', SDUIMargin, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SDUIPadding, 'SDUIPadding', SDUIPadding, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_2, VOID, [SerializerFactory]);
  initMetadataForClass(SDUIComponent, 'SDUIComponent', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TextComponent, 'TextComponent', VOID, SDUIComponent, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ButtonComponent, 'ButtonComponent', VOID, SDUIComponent, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ContainerComponent, 'ContainerComponent', VOID, SDUIComponent, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ColumnComponent, 'ColumnComponent', VOID, SDUIComponent, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RowComponent, 'RowComponent', VOID, SDUIComponent, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForClass(SduiParser, 'SduiParser', SduiParser);
  initMetadataForClass(JsSDUIStyle, 'JsSDUIStyle');
  initMetadataForClass(JsSDUIComponent, 'JsSDUIComponent');
  initMetadataForObject(ModulaSDK, 'ModulaSDK');
  initMetadataForClass(JsPlatform, 'JsPlatform', JsPlatform);
  //endregion
  function get_sduiJson() {
    _init_properties_SDUI_kt__c4m5wb();
    return sduiJson;
  }
  var sduiJson;
  var com_nostratech_modula_SDUIStyle_$serializer$stable;
  var com_nostratech_modula_SDUIStyle$stable;
  var com_nostratech_modula_SDUIMargin_$serializer$stable;
  var com_nostratech_modula_SDUIMargin$stable;
  var com_nostratech_modula_SDUIPadding_$serializer$stable;
  var com_nostratech_modula_SDUIPadding$stable;
  var com_nostratech_modula_SDUIComponent$stable;
  var com_nostratech_modula_TextComponent_$serializer$stable;
  var com_nostratech_modula_TextComponent$stable;
  var com_nostratech_modula_ButtonComponent_$serializer$stable;
  var com_nostratech_modula_ButtonComponent$stable;
  var com_nostratech_modula_ContainerComponent_$serializer$stable;
  var com_nostratech_modula_ContainerComponent$stable;
  var com_nostratech_modula_ColumnComponent_$serializer$stable;
  var com_nostratech_modula_ColumnComponent$stable;
  var com_nostratech_modula_RowComponent_$serializer$stable;
  var com_nostratech_modula_RowComponent$stable;
  var com_nostratech_modula_SduiParser$stable;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.nostratech.modula.SDUIStyle', this, 9);
    tmp0_serialDesc.ln('width', true);
    tmp0_serialDesc.ln('height', true);
    tmp0_serialDesc.ln('backgroundColor', true);
    tmp0_serialDesc.ln('align', true);
    tmp0_serialDesc.ln('arrangement', true);
    tmp0_serialDesc.ln('scrollable', true);
    tmp0_serialDesc.ln('margin', true);
    tmp0_serialDesc.ln('padding', true);
    tmp0_serialDesc.ln('round', true);
    this.t13_1 = tmp0_serialDesc;
  }
  protoOf($serializer).ye = function (decoder) {
    var tmp0_desc = this.t13_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_input = decoder.zh(tmp0_desc);
    if (tmp13_input.pi()) {
      tmp4_local0 = tmp13_input.ni(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.ni(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.ni(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.ni(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.ni(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.ni(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.ni(tmp0_desc, 6, $serializer_getInstance_0(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.ni(tmp0_desc, 7, $serializer_getInstance_1(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.ni(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.qi(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.ni(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.ni(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.ni(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.ni(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.ni(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.ni(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.ni(tmp0_desc, 6, $serializer_getInstance_0(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.ni(tmp0_desc, 7, $serializer_getInstance_1(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.ni(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.ai(tmp0_desc);
    return SDUIStyle_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer).xe = function () {
    return this.t13_1;
  };
  protoOf($serializer).nn = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_0()), get_nullable($serializer_getInstance_1()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function SDUIStyle_init_$Init$(seen0, width, height, backgroundColor, align, arrangement, scrollable, margin, padding, round, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().t13_1);
    }
    if (0 === (seen0 & 1))
      $this.u13_1 = null;
    else
      $this.u13_1 = width;
    if (0 === (seen0 & 2))
      $this.v13_1 = null;
    else
      $this.v13_1 = height;
    if (0 === (seen0 & 4))
      $this.w13_1 = null;
    else
      $this.w13_1 = backgroundColor;
    if (0 === (seen0 & 8))
      $this.x13_1 = null;
    else
      $this.x13_1 = align;
    if (0 === (seen0 & 16))
      $this.y13_1 = null;
    else
      $this.y13_1 = arrangement;
    if (0 === (seen0 & 32))
      $this.z13_1 = null;
    else
      $this.z13_1 = scrollable;
    if (0 === (seen0 & 64))
      $this.a14_1 = null;
    else
      $this.a14_1 = margin;
    if (0 === (seen0 & 128))
      $this.b14_1 = null;
    else
      $this.b14_1 = padding;
    if (0 === (seen0 & 256))
      $this.c14_1 = null;
    else
      $this.c14_1 = round;
    return $this;
  }
  function SDUIStyle_init_$Create$(seen0, width, height, backgroundColor, align, arrangement, scrollable, margin, padding, round, serializationConstructorMarker) {
    return SDUIStyle_init_$Init$(seen0, width, height, backgroundColor, align, arrangement, scrollable, margin, padding, round, serializationConstructorMarker, objectCreate(protoOf(SDUIStyle)));
  }
  function SDUIStyle(width, height, backgroundColor, align, arrangement, scrollable, margin, padding, round) {
    width = width === VOID ? null : width;
    height = height === VOID ? null : height;
    backgroundColor = backgroundColor === VOID ? null : backgroundColor;
    align = align === VOID ? null : align;
    arrangement = arrangement === VOID ? null : arrangement;
    scrollable = scrollable === VOID ? null : scrollable;
    margin = margin === VOID ? null : margin;
    padding = padding === VOID ? null : padding;
    round = round === VOID ? null : round;
    this.u13_1 = width;
    this.v13_1 = height;
    this.w13_1 = backgroundColor;
    this.x13_1 = align;
    this.y13_1 = arrangement;
    this.z13_1 = scrollable;
    this.a14_1 = margin;
    this.b14_1 = padding;
    this.c14_1 = round;
  }
  protoOf(SDUIStyle).toString = function () {
    return 'SDUIStyle(width=' + this.u13_1 + ', height=' + this.v13_1 + ', backgroundColor=' + this.w13_1 + ', align=' + this.x13_1 + ', arrangement=' + this.y13_1 + ', scrollable=' + this.z13_1 + ', margin=' + toString(this.a14_1) + ', padding=' + toString(this.b14_1) + ', round=' + this.c14_1 + ')';
  };
  protoOf(SDUIStyle).hashCode = function () {
    var result = this.u13_1 == null ? 0 : getStringHashCode(this.u13_1);
    result = imul(result, 31) + (this.v13_1 == null ? 0 : getStringHashCode(this.v13_1)) | 0;
    result = imul(result, 31) + (this.w13_1 == null ? 0 : getStringHashCode(this.w13_1)) | 0;
    result = imul(result, 31) + (this.x13_1 == null ? 0 : getStringHashCode(this.x13_1)) | 0;
    result = imul(result, 31) + (this.y13_1 == null ? 0 : getStringHashCode(this.y13_1)) | 0;
    result = imul(result, 31) + (this.z13_1 == null ? 0 : getBooleanHashCode(this.z13_1)) | 0;
    result = imul(result, 31) + (this.a14_1 == null ? 0 : this.a14_1.hashCode()) | 0;
    result = imul(result, 31) + (this.b14_1 == null ? 0 : this.b14_1.hashCode()) | 0;
    result = imul(result, 31) + (this.c14_1 == null ? 0 : getStringHashCode(this.c14_1)) | 0;
    return result;
  };
  protoOf(SDUIStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SDUIStyle))
      return false;
    if (!(this.u13_1 == other.u13_1))
      return false;
    if (!(this.v13_1 == other.v13_1))
      return false;
    if (!(this.w13_1 == other.w13_1))
      return false;
    if (!(this.x13_1 == other.x13_1))
      return false;
    if (!(this.y13_1 == other.y13_1))
      return false;
    if (!(this.z13_1 == other.z13_1))
      return false;
    if (!equals(this.a14_1, other.a14_1))
      return false;
    if (!equals(this.b14_1, other.b14_1))
      return false;
    if (!(this.c14_1 == other.c14_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.nostratech.modula.SDUIMargin', this, 4);
    tmp0_serialDesc.ln('left', true);
    tmp0_serialDesc.ln('top', true);
    tmp0_serialDesc.ln('right', true);
    tmp0_serialDesc.ln('bottom', true);
    this.d14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).ye = function (decoder) {
    var tmp0_desc = this.d14_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.zh(tmp0_desc);
    if (tmp8_input.pi()) {
      tmp4_local0 = tmp8_input.ni(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ni(tmp0_desc, 1, DoubleSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ni(tmp0_desc, 2, DoubleSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ni(tmp0_desc, 3, DoubleSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.qi(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ni(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ni(tmp0_desc, 1, DoubleSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ni(tmp0_desc, 2, DoubleSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ni(tmp0_desc, 3, DoubleSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.ai(tmp0_desc);
    return SDUIMargin_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_0).xe = function () {
    return this.d14_1;
  };
  protoOf($serializer_0).nn = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance())];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function SDUIMargin_init_$Init$(seen0, left, top, right, bottom, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().d14_1);
    }
    if (0 === (seen0 & 1))
      $this.e14_1 = 0.0;
    else
      $this.e14_1 = left;
    if (0 === (seen0 & 2))
      $this.f14_1 = 0.0;
    else
      $this.f14_1 = top;
    if (0 === (seen0 & 4))
      $this.g14_1 = 0.0;
    else
      $this.g14_1 = right;
    if (0 === (seen0 & 8))
      $this.h14_1 = 0.0;
    else
      $this.h14_1 = bottom;
    return $this;
  }
  function SDUIMargin_init_$Create$(seen0, left, top, right, bottom, serializationConstructorMarker) {
    return SDUIMargin_init_$Init$(seen0, left, top, right, bottom, serializationConstructorMarker, objectCreate(protoOf(SDUIMargin)));
  }
  function SDUIMargin(left, top, right, bottom) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    right = right === VOID ? 0.0 : right;
    bottom = bottom === VOID ? 0.0 : bottom;
    this.e14_1 = left;
    this.f14_1 = top;
    this.g14_1 = right;
    this.h14_1 = bottom;
  }
  protoOf(SDUIMargin).toString = function () {
    return 'SDUIMargin(left=' + this.e14_1 + ', top=' + this.f14_1 + ', right=' + this.g14_1 + ', bottom=' + this.h14_1 + ')';
  };
  protoOf(SDUIMargin).hashCode = function () {
    var result = this.e14_1 == null ? 0 : getNumberHashCode(this.e14_1);
    result = imul(result, 31) + (this.f14_1 == null ? 0 : getNumberHashCode(this.f14_1)) | 0;
    result = imul(result, 31) + (this.g14_1 == null ? 0 : getNumberHashCode(this.g14_1)) | 0;
    result = imul(result, 31) + (this.h14_1 == null ? 0 : getNumberHashCode(this.h14_1)) | 0;
    return result;
  };
  protoOf(SDUIMargin).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SDUIMargin))
      return false;
    if (!equals(this.e14_1, other.e14_1))
      return false;
    if (!equals(this.f14_1, other.f14_1))
      return false;
    if (!equals(this.g14_1, other.g14_1))
      return false;
    if (!equals(this.h14_1, other.h14_1))
      return false;
    return true;
  };
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.nostratech.modula.SDUIPadding', this, 4);
    tmp0_serialDesc.ln('left', true);
    tmp0_serialDesc.ln('top', true);
    tmp0_serialDesc.ln('right', true);
    tmp0_serialDesc.ln('bottom', true);
    this.i14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).ye = function (decoder) {
    var tmp0_desc = this.i14_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.zh(tmp0_desc);
    if (tmp8_input.pi()) {
      tmp4_local0 = tmp8_input.ni(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ni(tmp0_desc, 1, DoubleSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ni(tmp0_desc, 2, DoubleSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ni(tmp0_desc, 3, DoubleSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.qi(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ni(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ni(tmp0_desc, 1, DoubleSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ni(tmp0_desc, 2, DoubleSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ni(tmp0_desc, 3, DoubleSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.ai(tmp0_desc);
    return SDUIPadding_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_1).xe = function () {
    return this.i14_1;
  };
  protoOf($serializer_1).nn = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance())];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function SDUIPadding_init_$Init$(seen0, left, top, right, bottom, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().i14_1);
    }
    if (0 === (seen0 & 1))
      $this.j14_1 = 0.0;
    else
      $this.j14_1 = left;
    if (0 === (seen0 & 2))
      $this.k14_1 = 0.0;
    else
      $this.k14_1 = top;
    if (0 === (seen0 & 4))
      $this.l14_1 = 0.0;
    else
      $this.l14_1 = right;
    if (0 === (seen0 & 8))
      $this.m14_1 = 0.0;
    else
      $this.m14_1 = bottom;
    return $this;
  }
  function SDUIPadding_init_$Create$(seen0, left, top, right, bottom, serializationConstructorMarker) {
    return SDUIPadding_init_$Init$(seen0, left, top, right, bottom, serializationConstructorMarker, objectCreate(protoOf(SDUIPadding)));
  }
  function SDUIPadding(left, top, right, bottom) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    right = right === VOID ? 0.0 : right;
    bottom = bottom === VOID ? 0.0 : bottom;
    this.j14_1 = left;
    this.k14_1 = top;
    this.l14_1 = right;
    this.m14_1 = bottom;
  }
  protoOf(SDUIPadding).toString = function () {
    return 'SDUIPadding(left=' + this.j14_1 + ', top=' + this.k14_1 + ', right=' + this.l14_1 + ', bottom=' + this.m14_1 + ')';
  };
  protoOf(SDUIPadding).hashCode = function () {
    var result = this.j14_1 == null ? 0 : getNumberHashCode(this.j14_1);
    result = imul(result, 31) + (this.k14_1 == null ? 0 : getNumberHashCode(this.k14_1)) | 0;
    result = imul(result, 31) + (this.l14_1 == null ? 0 : getNumberHashCode(this.l14_1)) | 0;
    result = imul(result, 31) + (this.m14_1 == null ? 0 : getNumberHashCode(this.m14_1)) | 0;
    return result;
  };
  protoOf(SDUIPadding).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SDUIPadding))
      return false;
    if (!equals(this.j14_1, other.j14_1))
      return false;
    if (!equals(this.k14_1, other.k14_1))
      return false;
    if (!equals(this.l14_1, other.l14_1))
      return false;
    if (!equals(this.m14_1, other.m14_1))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.n14_1.i2();
  }
  function SDUIComponent$Companion$_anonymous__vn0uuh() {
    var tmp = getKClass(SDUIComponent);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(ButtonComponent), getKClass(ColumnComponent), getKClass(ContainerComponent), getKClass(RowComponent), getKClass(TextComponent)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_3(), $serializer_getInstance_5(), $serializer_getInstance_4(), $serializer_getInstance_6(), $serializer_getInstance_2()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('com.nostratech.modula.SDUIComponent', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.n14_1 = lazy(tmp_0, SDUIComponent$Companion$_anonymous__vn0uuh);
  }
  protoOf(Companion_2).uw = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_2).wn = function (typeParamsSerializers) {
    return this.uw();
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function SDUIComponent_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function SDUIComponent() {
    Companion_getInstance_2();
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('text', this, 4);
    tmp0_serialDesc.ln('text', false);
    tmp0_serialDesc.ln('fontSize', true);
    tmp0_serialDesc.ln('color', true);
    tmp0_serialDesc.ln('style', true);
    this.o14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).ye = function (decoder) {
    var tmp0_desc = this.o14_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.zh(tmp0_desc);
    if (tmp8_input.pi()) {
      tmp4_local0 = tmp8_input.ji(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ni(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ni(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ni(tmp0_desc, 3, $serializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.qi(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ji(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ni(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ni(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ni(tmp0_desc, 3, $serializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.ai(tmp0_desc);
    return TextComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).xe = function () {
    return this.o14_1;
  };
  protoOf($serializer_2).nn = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function TextComponent_init_$Init$(seen0, text, fontSize, color, style, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_2().o14_1);
    }
    SDUIComponent_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.p14_1 = text;
    if (0 === (seen0 & 2))
      $this.q14_1 = null;
    else
      $this.q14_1 = fontSize;
    if (0 === (seen0 & 4))
      $this.r14_1 = null;
    else
      $this.r14_1 = color;
    if (0 === (seen0 & 8))
      $this.s14_1 = null;
    else
      $this.s14_1 = style;
    return $this;
  }
  function TextComponent_init_$Create$(seen0, text, fontSize, color, style, serializationConstructorMarker) {
    return TextComponent_init_$Init$(seen0, text, fontSize, color, style, serializationConstructorMarker, objectCreate(protoOf(TextComponent)));
  }
  function TextComponent(text, fontSize, color, style) {
    fontSize = fontSize === VOID ? null : fontSize;
    color = color === VOID ? null : color;
    style = style === VOID ? null : style;
    SDUIComponent.call(this);
    this.p14_1 = text;
    this.q14_1 = fontSize;
    this.r14_1 = color;
    this.s14_1 = style;
  }
  protoOf(TextComponent).toString = function () {
    return 'TextComponent(text=' + this.p14_1 + ', fontSize=' + this.q14_1 + ', color=' + this.r14_1 + ', style=' + toString(this.s14_1) + ')';
  };
  protoOf(TextComponent).hashCode = function () {
    var result = getStringHashCode(this.p14_1);
    result = imul(result, 31) + (this.q14_1 == null ? 0 : this.q14_1) | 0;
    result = imul(result, 31) + (this.r14_1 == null ? 0 : getStringHashCode(this.r14_1)) | 0;
    result = imul(result, 31) + (this.s14_1 == null ? 0 : this.s14_1.hashCode()) | 0;
    return result;
  };
  protoOf(TextComponent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextComponent))
      return false;
    if (!(this.p14_1 === other.p14_1))
      return false;
    if (!(this.q14_1 == other.q14_1))
      return false;
    if (!(this.r14_1 == other.r14_1))
      return false;
    if (!equals(this.s14_1, other.s14_1))
      return false;
    return true;
  };
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('button', this, 3);
    tmp0_serialDesc.ln('label', false);
    tmp0_serialDesc.ln('action', false);
    tmp0_serialDesc.ln('style', true);
    this.t14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).ye = function (decoder) {
    var tmp0_desc = this.t14_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.zh(tmp0_desc);
    if (tmp7_input.pi()) {
      tmp4_local0 = tmp7_input.ji(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ji(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ni(tmp0_desc, 2, $serializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.qi(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ji(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ji(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ni(tmp0_desc, 2, $serializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.ai(tmp0_desc);
    return ButtonComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_3).xe = function () {
    return this.t14_1;
  };
  protoOf($serializer_3).nn = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable($serializer_getInstance())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function ButtonComponent_init_$Init$(seen0, label, action, style, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().t14_1);
    }
    SDUIComponent_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.u14_1 = label;
    $this.v14_1 = action;
    if (0 === (seen0 & 4))
      $this.w14_1 = null;
    else
      $this.w14_1 = style;
    return $this;
  }
  function ButtonComponent_init_$Create$(seen0, label, action, style, serializationConstructorMarker) {
    return ButtonComponent_init_$Init$(seen0, label, action, style, serializationConstructorMarker, objectCreate(protoOf(ButtonComponent)));
  }
  function ButtonComponent(label, action, style) {
    style = style === VOID ? null : style;
    SDUIComponent.call(this);
    this.u14_1 = label;
    this.v14_1 = action;
    this.w14_1 = style;
  }
  protoOf(ButtonComponent).toString = function () {
    return 'ButtonComponent(label=' + this.u14_1 + ', action=' + this.v14_1 + ', style=' + toString(this.w14_1) + ')';
  };
  protoOf(ButtonComponent).hashCode = function () {
    var result = getStringHashCode(this.u14_1);
    result = imul(result, 31) + getStringHashCode(this.v14_1) | 0;
    result = imul(result, 31) + (this.w14_1 == null ? 0 : this.w14_1.hashCode()) | 0;
    return result;
  };
  protoOf(ButtonComponent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ButtonComponent))
      return false;
    if (!(this.u14_1 === other.u14_1))
      return false;
    if (!(this.v14_1 === other.v14_1))
      return false;
    if (!equals(this.w14_1, other.w14_1))
      return false;
    return true;
  };
  function ContainerComponent$Companion$$childSerializers$_anonymous__81yjwy() {
    return new ArrayListSerializer(Companion_getInstance_2().uw());
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x14_1 = [lazy(tmp_0, ContainerComponent$Companion$$childSerializers$_anonymous__81yjwy), null];
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('container', this, 2);
    tmp0_serialDesc.ln('children', false);
    tmp0_serialDesc.ln('style', true);
    this.y14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).ye = function (decoder) {
    var tmp0_desc = this.y14_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.zh(tmp0_desc);
    var tmp7_cached = Companion_getInstance_5().x14_1;
    if (tmp6_input.pi()) {
      tmp4_local0 = tmp6_input.li(tmp0_desc, 0, tmp7_cached[0].i2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ni(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.qi(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.li(tmp0_desc, 0, tmp7_cached[0].i2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ni(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.ai(tmp0_desc);
    return ContainerComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).xe = function () {
    return this.y14_1;
  };
  protoOf($serializer_4).nn = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_5().x14_1[0].i2(), get_nullable($serializer_getInstance())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function ContainerComponent_init_$Init$(seen0, children, style, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_4().y14_1);
    }
    SDUIComponent_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.z14_1 = children;
    if (0 === (seen0 & 2))
      $this.a15_1 = null;
    else
      $this.a15_1 = style;
    return $this;
  }
  function ContainerComponent_init_$Create$(seen0, children, style, serializationConstructorMarker) {
    return ContainerComponent_init_$Init$(seen0, children, style, serializationConstructorMarker, objectCreate(protoOf(ContainerComponent)));
  }
  function ContainerComponent(children, style) {
    Companion_getInstance_5();
    style = style === VOID ? null : style;
    SDUIComponent.call(this);
    this.z14_1 = children;
    this.a15_1 = style;
  }
  protoOf(ContainerComponent).toString = function () {
    return 'ContainerComponent(children=' + toString_0(this.z14_1) + ', style=' + toString(this.a15_1) + ')';
  };
  protoOf(ContainerComponent).hashCode = function () {
    var result = hashCode(this.z14_1);
    result = imul(result, 31) + (this.a15_1 == null ? 0 : this.a15_1.hashCode()) | 0;
    return result;
  };
  protoOf(ContainerComponent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContainerComponent))
      return false;
    if (!equals(this.z14_1, other.z14_1))
      return false;
    if (!equals(this.a15_1, other.a15_1))
      return false;
    return true;
  };
  function ColumnComponent$Companion$$childSerializers$_anonymous__cinwt9() {
    return new ArrayListSerializer(Companion_getInstance_2().uw());
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b15_1 = [lazy(tmp_0, ColumnComponent$Companion$$childSerializers$_anonymous__cinwt9), null];
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('column', this, 2);
    tmp0_serialDesc.ln('children', false);
    tmp0_serialDesc.ln('style', true);
    this.c15_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).ye = function (decoder) {
    var tmp0_desc = this.c15_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.zh(tmp0_desc);
    var tmp7_cached = Companion_getInstance_6().b15_1;
    if (tmp6_input.pi()) {
      tmp4_local0 = tmp6_input.li(tmp0_desc, 0, tmp7_cached[0].i2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ni(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.qi(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.li(tmp0_desc, 0, tmp7_cached[0].i2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ni(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.ai(tmp0_desc);
    return ColumnComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_5).xe = function () {
    return this.c15_1;
  };
  protoOf($serializer_5).nn = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_6().b15_1[0].i2(), get_nullable($serializer_getInstance())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function ColumnComponent_init_$Init$(seen0, children, style, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_5().c15_1);
    }
    SDUIComponent_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.d15_1 = children;
    if (0 === (seen0 & 2))
      $this.e15_1 = null;
    else
      $this.e15_1 = style;
    return $this;
  }
  function ColumnComponent_init_$Create$(seen0, children, style, serializationConstructorMarker) {
    return ColumnComponent_init_$Init$(seen0, children, style, serializationConstructorMarker, objectCreate(protoOf(ColumnComponent)));
  }
  function ColumnComponent(children, style) {
    Companion_getInstance_6();
    style = style === VOID ? null : style;
    SDUIComponent.call(this);
    this.d15_1 = children;
    this.e15_1 = style;
  }
  protoOf(ColumnComponent).toString = function () {
    return 'ColumnComponent(children=' + toString_0(this.d15_1) + ', style=' + toString(this.e15_1) + ')';
  };
  protoOf(ColumnComponent).hashCode = function () {
    var result = hashCode(this.d15_1);
    result = imul(result, 31) + (this.e15_1 == null ? 0 : this.e15_1.hashCode()) | 0;
    return result;
  };
  protoOf(ColumnComponent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColumnComponent))
      return false;
    if (!equals(this.d15_1, other.d15_1))
      return false;
    if (!equals(this.e15_1, other.e15_1))
      return false;
    return true;
  };
  function RowComponent$Companion$$childSerializers$_anonymous__f7dvyx() {
    return new ArrayListSerializer(Companion_getInstance_2().uw());
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f15_1 = [lazy(tmp_0, RowComponent$Companion$$childSerializers$_anonymous__f7dvyx), null];
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('row', this, 2);
    tmp0_serialDesc.ln('children', false);
    tmp0_serialDesc.ln('style', true);
    this.g15_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).ye = function (decoder) {
    var tmp0_desc = this.g15_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.zh(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().f15_1;
    if (tmp6_input.pi()) {
      tmp4_local0 = tmp6_input.li(tmp0_desc, 0, tmp7_cached[0].i2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ni(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.qi(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.li(tmp0_desc, 0, tmp7_cached[0].i2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ni(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.ai(tmp0_desc);
    return RowComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).xe = function () {
    return this.g15_1;
  };
  protoOf($serializer_6).nn = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_7().f15_1[0].i2(), get_nullable($serializer_getInstance())];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function RowComponent_init_$Init$(seen0, children, style, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_6().g15_1);
    }
    SDUIComponent_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.h15_1 = children;
    if (0 === (seen0 & 2))
      $this.i15_1 = null;
    else
      $this.i15_1 = style;
    return $this;
  }
  function RowComponent_init_$Create$(seen0, children, style, serializationConstructorMarker) {
    return RowComponent_init_$Init$(seen0, children, style, serializationConstructorMarker, objectCreate(protoOf(RowComponent)));
  }
  function RowComponent(children, style) {
    Companion_getInstance_7();
    style = style === VOID ? null : style;
    SDUIComponent.call(this);
    this.h15_1 = children;
    this.i15_1 = style;
  }
  protoOf(RowComponent).toString = function () {
    return 'RowComponent(children=' + toString_0(this.h15_1) + ', style=' + toString(this.i15_1) + ')';
  };
  protoOf(RowComponent).hashCode = function () {
    var result = hashCode(this.h15_1);
    result = imul(result, 31) + (this.i15_1 == null ? 0 : this.i15_1.hashCode()) | 0;
    return result;
  };
  protoOf(RowComponent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowComponent))
      return false;
    if (!equals(this.h15_1, other.h15_1))
      return false;
    if (!equals(this.i15_1, other.i15_1))
      return false;
    return true;
  };
  function SduiParser() {
  }
  protoOf(SduiParser).ed = function (json) {
    var tmp;
    try {
      // Inline function 'kotlin.text.trim' call
      var trimmed = toString_0(trim(isCharSequence(json) ? json : THROW_CCE()));
      var tmp_0;
      if (startsWith(trimmed, '[')) {
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = get_sduiJson();
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.oi();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(SDUIComponent), arrayOf([]), false))]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        tmp_0 = this_0.pu(tmp$ret$2, trimmed);
      } else {
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_3 = get_sduiJson();
        // Inline function 'kotlinx.serialization.serializer' call
        var this_4 = this_3.oi();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_5 = serializer(this_4, createKType(getKClass(SDUIComponent), arrayOf([]), false));
        var tmp$ret$5 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
        var tmp$ret$6 = this_3.pu(tmp$ret$5, trimmed);
        tmp_0 = listOf(tmp$ret$6);
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        var e = $p;
        println('SDUI parsing error: ' + e.message);
        printStackTrace(e);
        tmp_1 = emptyList();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(SduiParser).j15 = function () {
    return '{\n  "type": "column",\n  "style": {\n    "width": "match_parent",\n    "backgroundColor": "#F5F7FA",\n    "padding": { "top": 40, "left": 16, "right": 16, "bottom": 40 }\n  },\n  "children": [\n    {\n      "type": "text",\n      "text": "SDUI Unified Layout",\n      "fontSize": 28,\n      "color": "#1A1A1A",\n      "style": { "margin": { "bottom": 8 } }\n    },\n    {\n      "type": "text",\n      "text": "Build once, render beautifully on Android, iOS, and Web.",\n      "fontSize": 16,\n      "color": "#666666",\n      "style": { "align": "center", "margin": { "bottom": 32 } }\n    },\n    {\n      "type": "row",\n      "style": {\n        "width": "match_parent",\n        "arrangement": "space-between",\n        "margin": { "bottom": 32 }\n      },\n      "children": [\n        {\n          "type": "button",\n          "label": "Home",\n          "action": "go_home"\n        },\n        {\n          "type": "button",\n          "label": "Profile",\n          "action": "go_profile"\n        },\n        {\n          "type": "button",\n          "label": "Settings",\n          "action": "go_settings"\n        }\n      ]\n    },\n    {\n      "type": "column",\n      "style": {\n        "width": "match_parent",\n        "backgroundColor": "#FFFFFF",\n        "round": "16",\n        "padding": { "top": 24, "bottom": 24, "left": 20, "right": 20 }\n      },\n      "children": [\n        {\n          "type": "text",\n          "text": "Beautiful Containers",\n          "fontSize": 20,\n          "color": "#1A1A1A",\n          "style": { "margin": { "bottom": 12 } }\n        },\n        {\n          "type": "text",\n          "text": "Containers support padding, margin, exact or responsive dimensions, layout arrangements, scaling, and rounded corners natively in the framework.",\n          "fontSize": 16,\n          "color": "#444444"\n        }\n      ]\n    }\n  ]\n}';
  };
  function sduiJson$lambda($this$Json) {
    _init_properties_SDUI_kt__c4m5wb();
    $this$Json.fv_1 = true;
    $this$Json.kv_1 = 'type';
    return Unit_instance;
  }
  var properties_initialized_SDUI_kt_jpu7q1;
  function _init_properties_SDUI_kt__c4m5wb() {
    if (!properties_initialized_SDUI_kt_jpu7q1) {
      properties_initialized_SDUI_kt_jpu7q1 = true;
      sduiJson = Json(VOID, sduiJson$lambda);
      com_nostratech_modula_SDUIStyle_$serializer$stable = 8;
      com_nostratech_modula_SDUIStyle$stable = 0;
      com_nostratech_modula_SDUIMargin_$serializer$stable = 8;
      com_nostratech_modula_SDUIMargin$stable = 0;
      com_nostratech_modula_SDUIPadding_$serializer$stable = 8;
      com_nostratech_modula_SDUIPadding$stable = 0;
      com_nostratech_modula_SDUIComponent$stable = 0;
      com_nostratech_modula_TextComponent_$serializer$stable = 8;
      com_nostratech_modula_TextComponent$stable = 0;
      com_nostratech_modula_ButtonComponent_$serializer$stable = 8;
      com_nostratech_modula_ButtonComponent$stable = 0;
      com_nostratech_modula_ContainerComponent_$serializer$stable = 8;
      com_nostratech_modula_ContainerComponent$stable = 8;
      com_nostratech_modula_ColumnComponent_$serializer$stable = 8;
      com_nostratech_modula_ColumnComponent$stable = 8;
      com_nostratech_modula_RowComponent_$serializer$stable = 8;
      com_nostratech_modula_RowComponent$stable = 8;
      com_nostratech_modula_SduiParser$stable = 0;
    }
  }
  var com_nostratech_modula_JsSDUIStyle$stable;
  var com_nostratech_modula_JsSDUIComponent$stable;
  var com_nostratech_modula_ModulaSDK$stable;
  function JsSDUIStyle(width, height, backgroundColor, align, arrangement, scrollable, marginLeft, marginTop, marginRight, marginBottom, paddingLeft, paddingTop, paddingRight, paddingBottom, round) {
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.align = align;
    this.arrangement = arrangement;
    this.scrollable = scrollable;
    this.marginLeft = marginLeft;
    this.marginTop = marginTop;
    this.marginRight = marginRight;
    this.marginBottom = marginBottom;
    this.paddingLeft = paddingLeft;
    this.paddingTop = paddingTop;
    this.paddingRight = paddingRight;
    this.paddingBottom = paddingBottom;
    this.round = round;
  }
  protoOf(JsSDUIStyle).k15 = function () {
    return this.width;
  };
  protoOf(JsSDUIStyle).l15 = function () {
    return this.height;
  };
  protoOf(JsSDUIStyle).m15 = function () {
    return this.backgroundColor;
  };
  protoOf(JsSDUIStyle).n15 = function () {
    return this.align;
  };
  protoOf(JsSDUIStyle).o15 = function () {
    return this.arrangement;
  };
  protoOf(JsSDUIStyle).p15 = function () {
    return this.scrollable;
  };
  protoOf(JsSDUIStyle).q15 = function () {
    return this.marginLeft;
  };
  protoOf(JsSDUIStyle).r15 = function () {
    return this.marginTop;
  };
  protoOf(JsSDUIStyle).s15 = function () {
    return this.marginRight;
  };
  protoOf(JsSDUIStyle).t15 = function () {
    return this.marginBottom;
  };
  protoOf(JsSDUIStyle).u15 = function () {
    return this.paddingLeft;
  };
  protoOf(JsSDUIStyle).v15 = function () {
    return this.paddingTop;
  };
  protoOf(JsSDUIStyle).w15 = function () {
    return this.paddingRight;
  };
  protoOf(JsSDUIStyle).x15 = function () {
    return this.paddingBottom;
  };
  protoOf(JsSDUIStyle).y15 = function () {
    return this.round;
  };
  protoOf(JsSDUIStyle).xa = function () {
    return this.width;
  };
  protoOf(JsSDUIStyle).ya = function () {
    return this.height;
  };
  protoOf(JsSDUIStyle).z15 = function () {
    return this.backgroundColor;
  };
  protoOf(JsSDUIStyle).a16 = function () {
    return this.align;
  };
  protoOf(JsSDUIStyle).b16 = function () {
    return this.arrangement;
  };
  protoOf(JsSDUIStyle).c16 = function () {
    return this.scrollable;
  };
  protoOf(JsSDUIStyle).d16 = function () {
    return this.marginLeft;
  };
  protoOf(JsSDUIStyle).e16 = function () {
    return this.marginTop;
  };
  protoOf(JsSDUIStyle).f16 = function () {
    return this.marginRight;
  };
  protoOf(JsSDUIStyle).g16 = function () {
    return this.marginBottom;
  };
  protoOf(JsSDUIStyle).h16 = function () {
    return this.paddingLeft;
  };
  protoOf(JsSDUIStyle).i16 = function () {
    return this.paddingTop;
  };
  protoOf(JsSDUIStyle).j16 = function () {
    return this.paddingRight;
  };
  protoOf(JsSDUIStyle).k16 = function () {
    return this.paddingBottom;
  };
  protoOf(JsSDUIStyle).l16 = function () {
    return this.round;
  };
  protoOf(JsSDUIStyle).m16 = function (width, height, backgroundColor, align, arrangement, scrollable, marginLeft, marginTop, marginRight, marginBottom, paddingLeft, paddingTop, paddingRight, paddingBottom, round) {
    return new JsSDUIStyle(width, height, backgroundColor, align, arrangement, scrollable, marginLeft, marginTop, marginRight, marginBottom, paddingLeft, paddingTop, paddingRight, paddingBottom, round);
  };
  protoOf(JsSDUIStyle).copy = function (width, height, backgroundColor, align, arrangement, scrollable, marginLeft, marginTop, marginRight, marginBottom, paddingLeft, paddingTop, paddingRight, paddingBottom, round, $super) {
    width = width === VOID ? this.width : width;
    height = height === VOID ? this.height : height;
    backgroundColor = backgroundColor === VOID ? this.backgroundColor : backgroundColor;
    align = align === VOID ? this.align : align;
    arrangement = arrangement === VOID ? this.arrangement : arrangement;
    scrollable = scrollable === VOID ? this.scrollable : scrollable;
    marginLeft = marginLeft === VOID ? this.marginLeft : marginLeft;
    marginTop = marginTop === VOID ? this.marginTop : marginTop;
    marginRight = marginRight === VOID ? this.marginRight : marginRight;
    marginBottom = marginBottom === VOID ? this.marginBottom : marginBottom;
    paddingLeft = paddingLeft === VOID ? this.paddingLeft : paddingLeft;
    paddingTop = paddingTop === VOID ? this.paddingTop : paddingTop;
    paddingRight = paddingRight === VOID ? this.paddingRight : paddingRight;
    paddingBottom = paddingBottom === VOID ? this.paddingBottom : paddingBottom;
    round = round === VOID ? this.round : round;
    return $super === VOID ? this.m16(width, height, backgroundColor, align, arrangement, scrollable, marginLeft, marginTop, marginRight, marginBottom, paddingLeft, paddingTop, paddingRight, paddingBottom, round) : $super.m16.call(this, width, height, backgroundColor, align, arrangement, scrollable, marginLeft, marginTop, marginRight, marginBottom, paddingLeft, paddingTop, paddingRight, paddingBottom, round);
  };
  protoOf(JsSDUIStyle).toString = function () {
    return 'JsSDUIStyle(width=' + this.width + ', height=' + this.height + ', backgroundColor=' + this.backgroundColor + ', align=' + this.align + ', arrangement=' + this.arrangement + ', scrollable=' + this.scrollable + ', marginLeft=' + this.marginLeft + ', marginTop=' + this.marginTop + ', marginRight=' + this.marginRight + ', marginBottom=' + this.marginBottom + ', paddingLeft=' + this.paddingLeft + ', paddingTop=' + this.paddingTop + ', paddingRight=' + this.paddingRight + ', paddingBottom=' + this.paddingBottom + ', round=' + this.round + ')';
  };
  protoOf(JsSDUIStyle).hashCode = function () {
    var result = this.width == null ? 0 : getStringHashCode(this.width);
    result = imul(result, 31) + (this.height == null ? 0 : getStringHashCode(this.height)) | 0;
    result = imul(result, 31) + (this.backgroundColor == null ? 0 : getStringHashCode(this.backgroundColor)) | 0;
    result = imul(result, 31) + (this.align == null ? 0 : getStringHashCode(this.align)) | 0;
    result = imul(result, 31) + (this.arrangement == null ? 0 : getStringHashCode(this.arrangement)) | 0;
    result = imul(result, 31) + (this.scrollable == null ? 0 : getBooleanHashCode(this.scrollable)) | 0;
    result = imul(result, 31) + (this.marginLeft == null ? 0 : getNumberHashCode(this.marginLeft)) | 0;
    result = imul(result, 31) + (this.marginTop == null ? 0 : getNumberHashCode(this.marginTop)) | 0;
    result = imul(result, 31) + (this.marginRight == null ? 0 : getNumberHashCode(this.marginRight)) | 0;
    result = imul(result, 31) + (this.marginBottom == null ? 0 : getNumberHashCode(this.marginBottom)) | 0;
    result = imul(result, 31) + (this.paddingLeft == null ? 0 : getNumberHashCode(this.paddingLeft)) | 0;
    result = imul(result, 31) + (this.paddingTop == null ? 0 : getNumberHashCode(this.paddingTop)) | 0;
    result = imul(result, 31) + (this.paddingRight == null ? 0 : getNumberHashCode(this.paddingRight)) | 0;
    result = imul(result, 31) + (this.paddingBottom == null ? 0 : getNumberHashCode(this.paddingBottom)) | 0;
    result = imul(result, 31) + (this.round == null ? 0 : getStringHashCode(this.round)) | 0;
    return result;
  };
  protoOf(JsSDUIStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JsSDUIStyle))
      return false;
    if (!(this.width == other.width))
      return false;
    if (!(this.height == other.height))
      return false;
    if (!(this.backgroundColor == other.backgroundColor))
      return false;
    if (!(this.align == other.align))
      return false;
    if (!(this.arrangement == other.arrangement))
      return false;
    if (!(this.scrollable == other.scrollable))
      return false;
    if (!equals(this.marginLeft, other.marginLeft))
      return false;
    if (!equals(this.marginTop, other.marginTop))
      return false;
    if (!equals(this.marginRight, other.marginRight))
      return false;
    if (!equals(this.marginBottom, other.marginBottom))
      return false;
    if (!equals(this.paddingLeft, other.paddingLeft))
      return false;
    if (!equals(this.paddingTop, other.paddingTop))
      return false;
    if (!equals(this.paddingRight, other.paddingRight))
      return false;
    if (!equals(this.paddingBottom, other.paddingBottom))
      return false;
    if (!(this.round == other.round))
      return false;
    return true;
  };
  function JsSDUIComponent(type, text, fontSize, color, label, action, children, style) {
    this.type = type;
    this.text = text;
    this.fontSize = fontSize;
    this.color = color;
    this.label = label;
    this.action = action;
    this.children = children;
    this.style = style;
  }
  protoOf(JsSDUIComponent).n16 = function () {
    return this.type;
  };
  protoOf(JsSDUIComponent).o16 = function () {
    return this.text;
  };
  protoOf(JsSDUIComponent).p16 = function () {
    return this.fontSize;
  };
  protoOf(JsSDUIComponent).q16 = function () {
    return this.color;
  };
  protoOf(JsSDUIComponent).r16 = function () {
    return this.label;
  };
  protoOf(JsSDUIComponent).s16 = function () {
    return this.action;
  };
  protoOf(JsSDUIComponent).t16 = function () {
    return this.children;
  };
  protoOf(JsSDUIComponent).u16 = function () {
    return this.style;
  };
  protoOf(JsSDUIComponent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JsSDUIComponent))
      return false;
    return this.type === other.type && this.text == other.text && this.label == other.label && this.action == other.action;
  };
  protoOf(JsSDUIComponent).hashCode = function () {
    var result = getStringHashCode(this.type);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.text;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.label;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : getStringHashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.action;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : getStringHashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  protoOf(JsSDUIComponent).xa = function () {
    return this.type;
  };
  protoOf(JsSDUIComponent).ya = function () {
    return this.text;
  };
  protoOf(JsSDUIComponent).z15 = function () {
    return this.fontSize;
  };
  protoOf(JsSDUIComponent).a16 = function () {
    return this.color;
  };
  protoOf(JsSDUIComponent).b16 = function () {
    return this.label;
  };
  protoOf(JsSDUIComponent).c16 = function () {
    return this.action;
  };
  protoOf(JsSDUIComponent).d16 = function () {
    return this.children;
  };
  protoOf(JsSDUIComponent).e16 = function () {
    return this.style;
  };
  protoOf(JsSDUIComponent).v16 = function (type, text, fontSize, color, label, action, children, style) {
    return new JsSDUIComponent(type, text, fontSize, color, label, action, children, style);
  };
  protoOf(JsSDUIComponent).copy = function (type, text, fontSize, color, label, action, children, style, $super) {
    type = type === VOID ? this.type : type;
    text = text === VOID ? this.text : text;
    fontSize = fontSize === VOID ? this.fontSize : fontSize;
    color = color === VOID ? this.color : color;
    label = label === VOID ? this.label : label;
    action = action === VOID ? this.action : action;
    children = children === VOID ? this.children : children;
    style = style === VOID ? this.style : style;
    return $super === VOID ? this.v16(type, text, fontSize, color, label, action, children, style) : $super.v16.call(this, type, text, fontSize, color, label, action, children, style);
  };
  protoOf(JsSDUIComponent).toString = function () {
    return 'JsSDUIComponent(type=' + this.type + ', text=' + this.text + ', fontSize=' + this.fontSize + ', color=' + this.color + ', label=' + this.label + ', action=' + this.action + ', children=' + toString_0(this.children) + ', style=' + toString(this.style) + ')';
  };
  function ModulaSDK() {
    ModulaSDK_instance = this;
    this.w16_1 = new SduiParser();
  }
  protoOf(ModulaSDK).parse = function (json) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.w16_1.ed(json);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.s();
    while (_iterator__ex2g4s.t()) {
      var item = _iterator__ex2g4s.u();
      var tmp$ret$0 = toJs_0(item);
      destination.z(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  };
  protoOf(ModulaSDK).getMockData = function () {
    return this.w16_1.j15();
  };
  protoOf(ModulaSDK).getMockComponents = function () {
    return this.parse(this.w16_1.j15());
  };
  protoOf(ModulaSDK).getPlatformName = function () {
    return getPlatform().l();
  };
  var ModulaSDK_instance;
  function ModulaSDK_getInstance() {
    if (ModulaSDK_instance == null)
      new ModulaSDK();
    return ModulaSDK_instance;
  }
  function toJs(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver = _this__u8e3s4.a14_1;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e14_1;
      var tmp1_safe_receiver = _this__u8e3s4.a14_1;
      var tmp_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f14_1;
      var tmp2_safe_receiver = _this__u8e3s4.a14_1;
      var tmp_2 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.g14_1;
      var tmp3_safe_receiver = _this__u8e3s4.a14_1;
      var tmp_3 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.h14_1;
      var tmp4_safe_receiver = _this__u8e3s4.b14_1;
      var tmp_4 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.j14_1;
      var tmp5_safe_receiver = _this__u8e3s4.b14_1;
      var tmp_5 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.k14_1;
      var tmp6_safe_receiver = _this__u8e3s4.b14_1;
      var tmp_6 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.l14_1;
      var tmp7_safe_receiver = _this__u8e3s4.b14_1;
      tmp = new JsSDUIStyle(_this__u8e3s4.u13_1, _this__u8e3s4.v13_1, _this__u8e3s4.w13_1, _this__u8e3s4.x13_1, _this__u8e3s4.y13_1, _this__u8e3s4.z13_1, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp7_safe_receiver == null ? null : tmp7_safe_receiver.m14_1, _this__u8e3s4.c14_1);
    }
    return tmp;
  }
  function toJs_0(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof TextComponent) {
      tmp = new JsSDUIComponent('text', _this__u8e3s4.p14_1, _this__u8e3s4.q14_1, _this__u8e3s4.r14_1, null, null, null, toJs(_this__u8e3s4.s14_1));
    } else {
      if (_this__u8e3s4 instanceof ButtonComponent) {
        tmp = new JsSDUIComponent('button', null, null, null, _this__u8e3s4.u14_1, _this__u8e3s4.v14_1, null, toJs(_this__u8e3s4.w14_1));
      } else {
        if (_this__u8e3s4 instanceof ContainerComponent) {
          // Inline function 'kotlin.collections.map' call
          var this_0 = _this__u8e3s4.z14_1;
          // Inline function 'kotlin.collections.mapTo' call
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var _iterator__ex2g4s = this_0.s();
          while (_iterator__ex2g4s.t()) {
            var item = _iterator__ex2g4s.u();
            var tmp$ret$0 = toJs_0(item);
            destination.z(tmp$ret$0);
          }
          // Inline function 'kotlin.collections.toTypedArray' call
          var tmp$ret$3 = copyToArray(destination);
          tmp = new JsSDUIComponent('container', null, null, null, null, null, tmp$ret$3, toJs(_this__u8e3s4.a15_1));
        } else {
          if (_this__u8e3s4 instanceof ColumnComponent) {
            // Inline function 'kotlin.collections.map' call
            var this_1 = _this__u8e3s4.d15_1;
            // Inline function 'kotlin.collections.mapTo' call
            var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
            var _iterator__ex2g4s_0 = this_1.s();
            while (_iterator__ex2g4s_0.t()) {
              var item_0 = _iterator__ex2g4s_0.u();
              var tmp$ret$4 = toJs_0(item_0);
              destination_0.z(tmp$ret$4);
            }
            // Inline function 'kotlin.collections.toTypedArray' call
            var tmp$ret$7 = copyToArray(destination_0);
            tmp = new JsSDUIComponent('column', null, null, null, null, null, tmp$ret$7, toJs(_this__u8e3s4.e15_1));
          } else {
            if (_this__u8e3s4 instanceof RowComponent) {
              // Inline function 'kotlin.collections.map' call
              var this_2 = _this__u8e3s4.h15_1;
              // Inline function 'kotlin.collections.mapTo' call
              var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
              var _iterator__ex2g4s_1 = this_2.s();
              while (_iterator__ex2g4s_1.t()) {
                var item_1 = _iterator__ex2g4s_1.u();
                var tmp$ret$8 = toJs_0(item_1);
                destination_1.z(tmp$ret$8);
              }
              // Inline function 'kotlin.collections.toTypedArray' call
              var tmp$ret$11 = copyToArray(destination_1);
              tmp = new JsSDUIComponent('row', null, null, null, null, null, tmp$ret$11, toJs(_this__u8e3s4.i15_1));
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    return tmp;
  }
  var com_nostratech_modula_JsPlatform$stable;
  function JsPlatform() {
    this.x16_1 = 'Web with Kotlin/JS';
  }
  protoOf(JsPlatform).l = function () {
    return this.x16_1;
  };
  function getPlatform() {
    return new JsPlatform();
  }
  //region block: post-declaration
  protoOf($serializer).on = typeParametersSerializers;
  protoOf($serializer_0).on = typeParametersSerializers;
  protoOf($serializer_1).on = typeParametersSerializers;
  protoOf($serializer_2).on = typeParametersSerializers;
  protoOf($serializer_3).on = typeParametersSerializers;
  protoOf($serializer_4).on = typeParametersSerializers;
  protoOf($serializer_5).on = typeParametersSerializers;
  protoOf($serializer_6).on = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  com_nostratech_modula_JsSDUIStyle$stable = 0;
  com_nostratech_modula_JsSDUIComponent$stable = 8;
  com_nostratech_modula_ModulaSDK$stable = 0;
  com_nostratech_modula_JsPlatform$stable = 0;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$nostratech = $com.nostratech || ($com.nostratech = {});
    var $com$nostratech$modula = $com$nostratech.modula || ($com$nostratech.modula = {});
    $com$nostratech$modula.JsSDUIStyle = JsSDUIStyle;
    $com$nostratech$modula.JsSDUIComponent = JsSDUIComponent;
    defineProp($com$nostratech$modula, 'ModulaSDK', ModulaSDK_getInstance, VOID, true);
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=modula-sdk.js.map
