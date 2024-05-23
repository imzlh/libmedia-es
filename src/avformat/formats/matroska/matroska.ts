/*
 * libmedia matroska defined
 *
 * 版权所有 (C) 2024 赵高兴
 * Copyright (C) 2024 Gaoxing Zhao
 *
 * 此文件是 libmedia 的一部分
 * This file is part of libmedia.
 * 
 * libmedia 是自由软件；您可以根据 GNU Lesser General Public License（GNU LGPL）3.1
 * 或任何其更新的版本条款重新分发或修改它
 * libmedia is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3.1 of the License, or (at your option) any later version.
 * 
 * libmedia 希望能够为您提供帮助，但不提供任何明示或暗示的担保，包括但不限于适销性或特定用途的保证
 * 您应自行承担使用 libmedia 的风险，并且需要遵守 GNU Lesser General Public License 中的条款和条件。
 * libmedia is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 */

import { AVCodecID } from 'avutil/codec'

export const enum EbmlType {
  NONE,
  UINT,
  UINT64,
  SINT,
  SINT64,
  FLOAT,
  DOUBLE,
  STRING,
  BUFFER,
  OBJECT,
  BOOL
}

export const enum EBMLId {
  HEADER = 0x1A45DFA3,
  SEGMENT = 0x18538067,

  EBML_VERSION = 0x4286,
  EBML_READ_VERSION = 0x42F7,
  EBML_MAX_ID_LENGTH = 0x42F2,
  EBML_MAX_SIZE_LENGTH = 0x42F3,
  DOCTYPE = 0x4282,
  DOC_TYPE_VERSION = 0x4287,
  DOC_TYPE_READ_VERSION = 0x4285,
  VOID = 0xEC,
  CRC32 = 0xBF,

  // Matroska top-level master ID
  INFO = 0x1549A966,
  TRACKS = 0x1654AE6B,
  CUES = 0x1C53BB6B,
  TAGS = 0x1254C367,
  SEEK_HEAD = 0x114D9B74,
  ATTACHMENTS = 0x1941A469,
  CLUSTER = 0x1F43B675,
  CHAPTERS = 0x1043A770,

  /* IDs in the info master */
  TIME_CODE_SCALE = 0x2AD7B1,
  DURATION = 0x4489,
  TITLE = 0x7BA9,
  WRITING_APP = 0x5741,
  MUXING_APP = 0x4D80,
  DATE_UTC = 0x4461,
  SEGMENT_UID = 0x73A4,

  /* ID in the tracks master */
  TRACK_ENTRY = 0xAE,

  /* IDs in the track entry master */
  TRACK_NUMBER = 0xD7,
  TRACK_UID = 0x73C5,
  TRACK_TYPE = 0x83,
  TRACK_VIDEO = 0xE0,
  TRACK_AUDIO = 0xE1,
  TRACK_OPERATION = 0xE2,
  TRACK_COMBINE_PLANES = 0xE3,
  TRACK_PLANE = 0xE4,
  TRACK_PLANE_UID = 0xE5,
  TRACK_PLANE_TYPE = 0xE6,
  CODEC_ID = 0x86,
  CODEC_PRIVATE = 0x63A2,
  CODEC_NAME = 0x258688,
  CODEC_INFO_URL = 0x3B4040,
  CODEC_DOWN_LOAD_URL = 0x26B240,
  CODEC_DECODE_ALL = 0xAA,
  CODEC_DELAY = 0x56AA,
  SEEK_PREROLL = 0x56BB,
  TRACK_NAME = 0x536E,
  TRACK_LANGUAGE = 0x22B59C,
  TRACK_FLAG_ENABLED = 0xB9,
  TRACK_FLAG_DEFAULT = 0x88,
  TRACK_FLAG_FORCED = 0x55AA,
  TRACK_FLAG_LACING = 0x9C,
  TRACK_MIN_CACHE = 0x6DE7,
  TRACK_MAX_CACHE = 0x6DF8,
  TRACK_DEFAULT_DURATION = 0x23E383,
  TRACK_CONTENT_ENCODINGS = 0x6D80,
  TRACK_CONTENT_ENCODING = 0x6240,
  TRACK_TIME_CODE_SCALE = 0x23314F,
  TRACK_MAX_BLK_ADD_ID = 0x55EE,

  /* IDs in the track video master */
  VIDEO_FRAMERATE = 0x2383E3,
  VIDEO_DISPLAY_WIDTH = 0x54B0,
  VIDEO_DISPLAY_HEIGHT = 0x54BA,
  VIDEO_PIXEL_WIDTH = 0xB0,
  VIDEO_PIXEL_HEIGHT = 0xBA,
  VIDEO_PIXEL_CROP_B = 0x54AA,
  VIDEO_PIXEL_CROP_T = 0x54BB,
  VIDEO_PIXEL_CROP_L = 0x54CC,
  VIDEO_PIXEL_CROP_R = 0x54DD,
  VIDEO_DISPLAY_UNIT = 0x54B2,
  VIDEO_FLAG_INTERLACED = 0x9A,
  VIDEO_FIELD_ORDER = 0x9D,
  VIDEO_STEREO_MODE = 0x53B8,
  VIDEO_ALPHA_MODE = 0x53C0,
  VIDEO_ASPECT_RATIO = 0x54B3,
  VIDEO_COLORSPACE = 0x2EB524,
  VIDEO_COLOR = 0x55B0,

  VIDEO_COLOR_MATRIX_COEFF = 0x55B1,
  VIDEO_COLOR_BITS_PER_CHANNEL = 0x55B2,
  VIDEO_COLOR_CHROMA_SUB_HORZ = 0x55B3,
  VIDEO_COLOR_CHROMA_SUB_VERT = 0x55B4,
  VIDEO_COLOR_CB_SUB_HORZ = 0x55B5,
  VIDEO_COLOR_CB_SUB_VERT = 0x55B6,
  VIDEO_COLOR_CHROMA_SITING_HORZ = 0x55B7,
  VIDEO_COLOR_CHROMA_SITING_VERT = 0x55B8,
  VIDEO_COLOR_RANGE = 0x55B9,
  VIDEO_COLOR_TRANSFER_CHARACTERISTICS = 0x55BA,

  VIDEO_COLOR_PRIMARIES = 0x55BB,
  VIDEO_COLOR_MAX_CLL = 0x55BC,
  VIDEO_COLOR_MAX_FALL = 0x55BD,

  VIDEO_COLOR_MASTERING_META = 0x55D0,
  VIDEO_COLOR_RX = 0x55D1,
  VIDEO_COLOR_RY = 0x55D2,
  VIDEO_COLOR_GX = 0x55D3,
  VIDEO_COLOR_GY = 0x55D4,
  VIDEO_COLOR_BX = 0x55D5,
  VIDEO_COLOR_BY = 0x55D6,
  VIDEO_COLOR_WHITE_X = 0x55D7,
  VIDEO_COLOR_WHITE_Y = 0x55D8,
  VIDEO_COLOR_LUMINA_NCE_MAX = 0x55D9,
  VIDEO_COLOR_LUMINA_NCE_MIN = 0x55DA,

  VIDEO_PROJECTION = 0x7670,
  VIDEO_PROJECTION_TYPE = 0x7671,
  VIDEO_PROJECTION_PRIVATE = 0x7672,
  VIDEO_PROJECTION_POSE_YAW = 0x7673,
  VIDEO_PROJECTION_POSE_PITCH = 0x7674,
  VIDEO_PROJECTION_POSE_ROLL = 0x7675,

  /* IDs in the track audio master */
  AUDIO_SAMPLING_FREQ = 0xB5,
  AUDIO_OUT_SAMPLING_FREQ = 0x78B5,

  AUDIO_BITDEPTH = 0x6264,
  AUDIO_CHANNELS = 0x9F,

  /* IDs in the content encoding master */
  ENCODING_ORDER = 0x5031,
  ENCODING_SCOPE = 0x5032,
  ENCODING_TYPE = 0x5033,
  ENCODING_COMPRESSION = 0x5034,
  ENCODING_COMP_ALGO = 0x4254,
  ENCODING_COMP_SETTINGS = 0x4255,

  ENCODING_ENCRYPTION = 0x5035,
  ENCODING_ENC_AES_SETTINGS = 0x47E7,
  ENCODING_ENC_ALGO = 0x47E1,
  ENCODING_ENC_KEY_ID = 0x47E2,
  ENCODING_SIG_ALGO = 0x47E5,
  ENCODING_SIG_HASH_ALGO = 0x47E6,
  ENCODING_SIG_KEY_ID = 0x47E4,
  ENCODING_SIG_NATURE = 0x47E3,

  /* ID in the cues master */
  POINT_ENTRY = 0xBB,

  /* IDs in the point entry master */
  CUE_TIME = 0xB3,
  CUE_TRACK_POSITION = 0xB7,

  /* IDs in the cue track position master */
  CUE_TRACK = 0xF7,
  CUE_CLUSTER_POSITION = 0xF1,
  CUE_RELATIVE_POSITION = 0xF0,
  CUE_DURATION = 0xB2,
  CUE_BLOCKNUMBER = 0x5378,

  /* IDs in the tags master */
  TAG = 0x7373,
  TAG_SIMPLE = 0x67C8,
  TAG_NAME = 0x45A3,
  TAG_STRING = 0x4487,
  TAG_LANG = 0x447A,
  TAG_DEFAULT = 0x4484,
  TAG_DEFAULT_BUG = 0x44B4,
  TAG_TARGETS = 0x63C0,
  TAG_TARGETS_TYPE = 0x63CA,
  TAG_TARGETS_TYPE_VALUE = 0x68CA,
  TAG_TARGETS_TRACK_UID = 0x63C5,
  TAG_TARGETS_CHAPTER_UID = 0x63C4,
  TAG_TARGETS_ATTACH_UID = 0x63C6,

  /* IDs in the seek head master */
  SEEK_ENTRY = 0x4DBB,

  /* IDs in the seek point master */
  SEEK_ID = 0x53AB,
  SEEK_POSITION = 0x53AC,

  /* IDs in the cluster master */
  CLUSTER_TIME_CODE = 0xE7,
  CLUSTER_POSITION = 0xA7,
  CLUSTER_PREV_SIZE = 0xAB,
  BLOCK_GROUP = 0xA0,
  BLOCK_ADDITIONS = 0x75A1,
  BLOCK_MORE = 0xA6,
  BLOCK_ADD_ID = 0xEE,
  BLOCK_ADDITIONAL = 0xA5,
  SIMPLE_BLOCK = 0xA3,

  /* IDs in the block group master */
  BLOCK = 0xA1,
  BLOCK_DURATION = 0x9B,
  BLOCK_REFERENCE = 0xFB,
  CODEC_STATE = 0xA4,
  DISCARD_PADDING = 0x75A2,

  /* IDs in the attachments master */
  ATTACHED_FILE = 0x61A7,
  FILE_DESC = 0x467E,
  FILE_NAME = 0x466E,
  FILE_MIMETYPE = 0x4660,
  FILE_DATA = 0x465C,
  FILE_UID = 0x46AE,

  /* IDs in the chapters master */
  EDITION_ENTRY = 0x45B9,
  CHAPTER_ATOM = 0xB6,
  CHAPTER_TIME_START = 0x91,
  CHAPTER_TIME_END = 0x92,
  CHAPTER_DISPLAY = 0x80,
  CHAP_STRING = 0x85,
  CHAP_LANG = 0x437C,
  CHAP_COUNTRY = 0x437E,
  EDITION_UID = 0x45BC,
  EDITION_FLAG_HIDDEN = 0x45BD,
  EDITION_FLAG_DEFAULT = 0x45DB,
  EDITION_FLAG_ORDERED = 0x45DD,
  CHAPTER_UID = 0x73C4,
  CHAPTER_FLAG_HIDDEN = 0x98,
  CHAPTER_FLAG_ENABLED = 0x4598,
  CHAPTER_PHYS_EQUIV = 0x63C3
}

export const enum MATROSKATrackType {
  NONE = 0x0,
  VIDEO = 0x1,
  AUDIO = 0x2,
  COMPLEX = 0x3,
  LOGO = 0x10,
  SUBTITLE = 0x11,
  BUTTONS = 0x12,
  CONTROL = 0x20,
  METADATA = 0x21,
}

export const enum MATROSKATrackEncodingComp {
  Z_LIB = 0,
  BZ_LIB = 1,
  LZO = 2,
  HEADER_STRIP = 3
}

export const enum MATROSKAVideoInterlaceFlag {
  UNDETERMINED = 0,
  INTERLACED = 1,
  PROGRESSIVE = 2
}

export const enum MATROSKAVideoFieldOrder {
  PROGRESSIVE = 0,
  TT = 1,
  UNDETERMINED = 2,
  BB = 6,
  TB = 9,
  BT = 14
}

export const enum MATROSKAVideoStereoModeType {
  MONO = 0,
  LEFT_RIGHT = 1,
  BOTTOM_TOP = 2,
  TOP_BOTTOM = 3,
  CHECKERBOARD_RL = 4,
  CHECKERBOARD_LR = 5,
  ROW_INTERLEAVED_RL = 6,
  ROW_INTERLEAVED_LR = 7,
  COL_INTERLEAVED_RL = 8,
  COL_INTERLEAVED_LR = 9,
  ANAGLYPH_CYAN_RED  = 10,
  RIGHT_LEFT = 11,
  ANAGLYPH_GREEN_MAG = 12,
  BOTH_EYES_BLOCK_LR = 13,
  BOTH_EYES_BLOCK_RL = 14,
  NB
}

export const enum MATROSKAVideoDisplayUint {
  PIXELS = 0,
  CENTIMETERS = 1,
  INCHES = 2,
  DAR = 3,
  UNKNOWN = 4
}

export const enum MATROSKAColourChromaSitingHorz {
  UNDETERMINED = 0,
  LEFT = 1,
  HALF = 2,
  NB
}

export const enum MATROSKAColourChromaSitingVert {
  UNDETERMINED = 0,
  TOP = 1,
  HALF = 2,
  NB
}

export const enum MATROSKAVideoProjectionType {
  RECTANGULAR = 0,
  EQUIRECTANGULAR = 1,
  CUBE_MAP = 2,
  MESH = 3
}

export const enum MATROSKALacingMode {
  NO_LACING = 0,
  XIPH = 1,
  EBML = 2,
  FIXED_SIZE = 3
}

export const enum MATROSKABlockAddIdType {
  DEFAULT = 0,
  OPAQUE = 1,
  ITU_T_T35 = 4,
  DVCC = 0x64766343,
  DVVC = 0x64767643
}

export const MkvTag2CodecId: Record<string, AVCodecID> = {
  'A_AAC': AVCodecID.AV_CODEC_ID_AAC,
  'A_AC3': AVCodecID.AV_CODEC_ID_AC3,
  'A_ALAC': AVCodecID.AV_CODEC_ID_ALAC,
  'A_DTS': AVCodecID.AV_CODEC_ID_DTS,
  'A_EAC3': AVCodecID.AV_CODEC_ID_EAC3,
  'A_FLAC': AVCodecID.AV_CODEC_ID_FLAC,
  'A_MLP': AVCodecID.AV_CODEC_ID_MLP,
  'A_MPEG/L2': AVCodecID.AV_CODEC_ID_MP2,
  'A_MPEG/L1': AVCodecID.AV_CODEC_ID_MP1,
  'A_MPEG/L3': AVCodecID.AV_CODEC_ID_MP3,
  'A_OPUS': AVCodecID.AV_CODEC_ID_OPUS,
  'A_OPUS/EXPERIMENTAL': AVCodecID.AV_CODEC_ID_OPUS,
  'A_PCM/FLOAT/IEEE': AVCodecID.AV_CODEC_ID_PCM_F32LE,
  'A_PCM/INT/BIG': AVCodecID.AV_CODEC_ID_PCM_S16BE,
  'A_PCM/INT/LIT': AVCodecID.AV_CODEC_ID_PCM_S16LE,
  'A_QUICKTIME/QDMC': AVCodecID.AV_CODEC_ID_QDMC,
  'A_QUICKTIME/QDM2': AVCodecID.AV_CODEC_ID_QDM2,
  'A_REAL/14_4': AVCodecID.AV_CODEC_ID_RA_144,
  'A_REAL/28_8': AVCodecID.AV_CODEC_ID_RA_288,
  'A_REAL/ATRC': AVCodecID.AV_CODEC_ID_ATRAC3,
  'A_REAL/COOK': AVCodecID.AV_CODEC_ID_COOK,
  'A_REAL/SIPR': AVCodecID.AV_CODEC_ID_SIPR,
  'A_TRUEHD': AVCodecID.AV_CODEC_ID_TRUEHD,
  'A_TTA1': AVCodecID.AV_CODEC_ID_TTA,
  'A_VORBIS': AVCodecID.AV_CODEC_ID_VORBIS,
  'A_WAVPACK4': AVCodecID.AV_CODEC_ID_WAVPACK,

  'D_WEBVTT/SUBTITLES': AVCodecID.AV_CODEC_ID_WEBVTT,
  'D_WEBVTT/CAPTIONS': AVCodecID.AV_CODEC_ID_WEBVTT,
  'D_WEBVTT/DESCRIPTIONS': AVCodecID.AV_CODEC_ID_WEBVTT,
  'D_WEBVTT/METADATA': AVCodecID.AV_CODEC_ID_WEBVTT,

  'S_TEXT/UTF8': AVCodecID.AV_CODEC_ID_SUBRIP,
  'S_TEXT/ASCII': AVCodecID.AV_CODEC_ID_TEXT,
  'S_TEXT/ASS': AVCodecID.AV_CODEC_ID_ASS,
  'S_TEXT/SSA': AVCodecID.AV_CODEC_ID_ASS,
  'S_ASS': AVCodecID.AV_CODEC_ID_ASS,
  'S_SSA': AVCodecID.AV_CODEC_ID_ASS,
  'S_VOBSUB': AVCodecID.AV_CODEC_ID_DVD_SUBTITLE,
  'S_DVBSUB': AVCodecID.AV_CODEC_ID_DVB_SUBTITLE,
  'S_HDMV/PGS': AVCodecID.AV_CODEC_ID_HDMV_PGS_SUBTITLE,
  'S_HDMV/TEXTST': AVCodecID.AV_CODEC_ID_HDMV_TEXT_SUBTITLE,

  'V_AV1': AVCodecID.AV_CODEC_ID_AV1,
  'V_DIRAC': AVCodecID.AV_CODEC_ID_DIRAC,
  'V_FFV1': AVCodecID.AV_CODEC_ID_FFV1,
  'V_MJPEG': AVCodecID.AV_CODEC_ID_MJPEG,
  'V_MPEG1': AVCodecID.AV_CODEC_ID_MPEG1VIDEO,
  'V_MPEG2': AVCodecID.AV_CODEC_ID_MPEG2VIDEO,
  'V_MPEG4/ISO/ASP': AVCodecID.AV_CODEC_ID_MPEG4,
  'V_MPEG4/ISO/AP': AVCodecID.AV_CODEC_ID_MPEG4,
  'V_MPEG4/ISO/SP': AVCodecID.AV_CODEC_ID_MPEG4,
  'V_MPEG4/ISO/AVC': AVCodecID.AV_CODEC_ID_H264,
  'V_MPEGH/ISO/HEVC': AVCodecID.AV_CODEC_ID_HEVC,
  'V_MPEG4/MS/V3': AVCodecID.AV_CODEC_ID_MSMPEG4V3,
  'V_PRORES': AVCodecID.AV_CODEC_ID_PRORES,
  'V_REAL/RV10': AVCodecID.AV_CODEC_ID_RV10,
  'V_REAL/RV20': AVCodecID.AV_CODEC_ID_RV20,
  'V_REAL/RV30': AVCodecID.AV_CODEC_ID_RV30,
  'V_REAL/RV40': AVCodecID.AV_CODEC_ID_RV40,
  'V_SNOW': AVCodecID.AV_CODEC_ID_SNOW,
  'V_THEORA': AVCodecID.AV_CODEC_ID_THEORA,
  'V_UNCOMPRESSED': AVCodecID.AV_CODEC_ID_RAWVIDEO,
  'V_VP8': AVCodecID.AV_CODEC_ID_VP8,
  'V_VP9': AVCodecID.AV_CODEC_ID_VP9
}

export const WebmTag2CodecId: Record<string, AVCodecID> = {
  'V_VP8': AVCodecID.AV_CODEC_ID_VP8,
  'V_VP9': AVCodecID.AV_CODEC_ID_VP9,
  'V_AV1': AVCodecID.AV_CODEC_ID_AV1,

  'A_VORBIS': AVCodecID.AV_CODEC_ID_VORBIS,
  'A_OPUS': AVCodecID.AV_CODEC_ID_OPUS,

  'D_WEBVTT/SUBTITLES': AVCodecID.AV_CODEC_ID_WEBVTT,
  'D_WEBVTT/CAPTIONS': AVCodecID.AV_CODEC_ID_WEBVTT,
  'D_WEBVTT/DESCRIPTIONS': AVCodecID.AV_CODEC_ID_WEBVTT,
  'D_WEBVTT/METADATA': AVCodecID.AV_CODEC_ID_WEBVTT,
}
