/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
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
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */

define(['./when-7ef6387a', './Check-ed6a1804', './Math-55f9392d', './Cartesian2-4938fd49', './Transforms-c1370102', './RuntimeError-5b606d78', './WebGLConstants-30fc6f5c', './ComponentDatatype-a863af81', './GeometryAttribute-9c9ba21b', './GeometryAttributes-cb18da36', './IndexDatatype-891b5845', './GeometryOffsetAttribute-5cfc2755', './VertexFormat-d75df48f', './CylinderGeometryLibrary-87650134', './CylinderGeometry-a886fdbb'], function (when, Check, _Math, Cartesian2, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, GeometryAttributes, IndexDatatype, GeometryOffsetAttribute, VertexFormat, CylinderGeometryLibrary, CylinderGeometry) { 'use strict';

    function createCylinderGeometry(cylinderGeometry, offset) {
            if (when.defined(offset)) {
                cylinderGeometry = CylinderGeometry.CylinderGeometry.unpack(cylinderGeometry, offset);
            }
            return CylinderGeometry.CylinderGeometry.createGeometry(cylinderGeometry);
        }

    return createCylinderGeometry;

});
//# sourceMappingURL=createCylinderGeometry.js.map
