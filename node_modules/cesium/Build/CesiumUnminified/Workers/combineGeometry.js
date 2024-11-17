/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.123.1
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  PrimitivePipeline_default
} from "./chunk-JPNFQRN7.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-IJWXYSFC.js";
import "./chunk-GBPW65E3.js";
import "./chunk-PH3T7LNP.js";
import "./chunk-GRQQHWMD.js";
import "./chunk-IVCFTVYW.js";
import "./chunk-DR56WFYZ.js";
import "./chunk-KKMH4BKN.js";
import "./chunk-H3RMGG7L.js";
import "./chunk-WMHJAREU.js";
import "./chunk-PJHRB4YJ.js";
import "./chunk-54NYY4U4.js";
import "./chunk-7D6T2WYT.js";
import "./chunk-2IJZVFHY.js";
import "./chunk-AER5CLXD.js";
import "./chunk-LVHHB5T6.js";
import "./chunk-COHL4R3G.js";
import "./chunk-NELAPOO6.js";
import "./chunk-Q7IIOKAT.js";
import "./chunk-EMCXAVSG.js";
import "./chunk-K7QC3WDT.js";

// packages/engine/Source/Workers/combineGeometry.js
function combineGeometry(packedParameters, transferableObjects) {
  const parameters = PrimitivePipeline_default.unpackCombineGeometryParameters(packedParameters);
  const results = PrimitivePipeline_default.combineGeometry(parameters);
  return PrimitivePipeline_default.packCombineGeometryResults(
    results,
    transferableObjects
  );
}
var combineGeometry_default = createTaskProcessorWorker_default(combineGeometry);
export {
  combineGeometry_default as default
};
