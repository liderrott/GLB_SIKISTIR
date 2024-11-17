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
import {
  defaultValue_default
} from "./chunk-Q7IIOKAT.js";
import {
  DeveloperError_default
} from "./chunk-EMCXAVSG.js";
import {
  __glob,
  __require,
  defined_default
} from "./chunk-K7QC3WDT.js";

// import("./**/*.js") in packages/engine/Source/Workers/createGeometry.js
var globImport_js = __glob({
  "./combineGeometry.js": () => import("./combineGeometry.js"),
  "./createBoxGeometry.js": () => import("./createBoxGeometry.js"),
  "./createBoxOutlineGeometry.js": () => import("./createBoxOutlineGeometry.js"),
  "./createCircleGeometry.js": () => import("./createCircleGeometry.js"),
  "./createCircleOutlineGeometry.js": () => import("./createCircleOutlineGeometry.js"),
  "./createCoplanarPolygonGeometry.js": () => import("./createCoplanarPolygonGeometry.js"),
  "./createCoplanarPolygonOutlineGeometry.js": () => import("./createCoplanarPolygonOutlineGeometry.js"),
  "./createCorridorGeometry.js": () => import("./createCorridorGeometry.js"),
  "./createCorridorOutlineGeometry.js": () => import("./createCorridorOutlineGeometry.js"),
  "./createCylinderGeometry.js": () => import("./createCylinderGeometry.js"),
  "./createCylinderOutlineGeometry.js": () => import("./createCylinderOutlineGeometry.js"),
  "./createEllipseGeometry.js": () => import("./createEllipseGeometry.js"),
  "./createEllipseOutlineGeometry.js": () => import("./createEllipseOutlineGeometry.js"),
  "./createEllipsoidGeometry.js": () => import("./createEllipsoidGeometry.js"),
  "./createEllipsoidOutlineGeometry.js": () => import("./createEllipsoidOutlineGeometry.js"),
  "./createFrustumGeometry.js": () => import("./createFrustumGeometry.js"),
  "./createFrustumOutlineGeometry.js": () => import("./createFrustumOutlineGeometry.js"),
  "./createGeometry.js": () => import("./createGeometry.js"),
  "./createGroundPolylineGeometry.js": () => import("./createGroundPolylineGeometry.js"),
  "./createPlaneGeometry.js": () => import("./createPlaneGeometry.js"),
  "./createPlaneOutlineGeometry.js": () => import("./createPlaneOutlineGeometry.js"),
  "./createPolygonGeometry.js": () => import("./createPolygonGeometry.js"),
  "./createPolygonOutlineGeometry.js": () => import("./createPolygonOutlineGeometry.js"),
  "./createPolylineGeometry.js": () => import("./createPolylineGeometry.js"),
  "./createPolylineVolumeGeometry.js": () => import("./createPolylineVolumeGeometry.js"),
  "./createPolylineVolumeOutlineGeometry.js": () => import("./createPolylineVolumeOutlineGeometry.js"),
  "./createRectangleGeometry.js": () => import("./createRectangleGeometry.js"),
  "./createRectangleOutlineGeometry.js": () => import("./createRectangleOutlineGeometry.js"),
  "./createSimplePolylineGeometry.js": () => import("./createSimplePolylineGeometry.js"),
  "./createSphereGeometry.js": () => import("./createSphereGeometry.js"),
  "./createSphereOutlineGeometry.js": () => import("./createSphereOutlineGeometry.js"),
  "./createTaskProcessorWorker.js": () => import("./createTaskProcessorWorker.js"),
  "./createVectorTileClampedPolylines.js": () => import("./createVectorTileClampedPolylines.js"),
  "./createVectorTileGeometries.js": () => import("./createVectorTileGeometries.js"),
  "./createVectorTilePoints.js": () => import("./createVectorTilePoints.js"),
  "./createVectorTilePolygons.js": () => import("./createVectorTilePolygons.js"),
  "./createVectorTilePolylines.js": () => import("./createVectorTilePolylines.js"),
  "./createVerticesFromGoogleEarthEnterpriseBuffer.js": () => import("./createVerticesFromGoogleEarthEnterpriseBuffer.js"),
  "./createVerticesFromHeightmap.js": () => import("./createVerticesFromHeightmap.js"),
  "./createVerticesFromQuantizedTerrainMesh.js": () => import("./createVerticesFromQuantizedTerrainMesh.js"),
  "./createWallGeometry.js": () => import("./createWallGeometry.js"),
  "./createWallOutlineGeometry.js": () => import("./createWallOutlineGeometry.js"),
  "./decodeDraco.js": () => import("./decodeDraco.js"),
  "./decodeGoogleEarthEnterprisePacket.js": () => import("./decodeGoogleEarthEnterprisePacket.js"),
  "./decodeI3S.js": () => import("./decodeI3S.js"),
  "./transcodeKTX2.js": () => import("./transcodeKTX2.js"),
  "./transferTypedArrayTest.js": () => import("./transferTypedArrayTest.js"),
  "./upsampleQuantizedTerrainMesh.js": () => import("./upsampleQuantizedTerrainMesh.js")
});

// packages/engine/Source/Workers/createGeometry.js
var moduleCache = {};
async function getModule(moduleName, modulePath) {
  let module = defaultValue_default(moduleCache[modulePath], moduleCache[moduleName]);
  if (defined_default(module)) {
    return module;
  }
  if (defined_default(modulePath)) {
    if (typeof exports === "object") {
      module = __require(modulePath);
    } else {
      const result = await import(modulePath);
      module = result.default;
    }
    moduleCache[modulePath] = module;
    return module;
  }
  if (typeof exports === "object") {
    module = __require(`Workers/${moduleName}`);
  } else {
    const result = defined_default(modulePath) ? await import(modulePath) : await globImport_js(`./${moduleName}.js`);
    module = result.default;
  }
  moduleCache[moduleName] = module;
  return module;
}
async function createGeometry(parameters, transferableObjects) {
  const subTasks = parameters.subTasks;
  const length = subTasks.length;
  const resultsOrPromises = new Array(length);
  for (let i = 0; i < length; i++) {
    const task = subTasks[i];
    const geometry = task.geometry;
    const moduleName = task.moduleName;
    const modulePath = task.modulePath;
    if (defined_default(moduleName) && defined_default(modulePath)) {
      throw new DeveloperError_default("Must only set moduleName or modulePath");
    }
    if (defined_default(moduleName) || defined_default(modulePath)) {
      resultsOrPromises[i] = getModule(moduleName, modulePath).then(
        (createFunction) => createFunction(geometry, task.offset)
      );
    } else {
      resultsOrPromises[i] = geometry;
    }
  }
  return Promise.all(resultsOrPromises).then(function(results) {
    return PrimitivePipeline_default.packCreateGeometryResults(
      results,
      transferableObjects
    );
  });
}
var createGeometry_default = createTaskProcessorWorker_default(createGeometry);
export {
  createGeometry_default as default
};
