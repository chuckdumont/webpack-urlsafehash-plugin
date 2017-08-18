/*
 * (C) Copyright IBM Corp. 2012, 2016 All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = class UrlSafeHashPlugin {

  apply(compiler) {
    compiler.plugin("compilation", (compilation) => {
      compilation.plugin("after-hash", () => {
        compilation.chunks.forEach((chunk) =>{
          chunk.hash = chunk.hash.replace(/[/+=]/g, (c) => {
            switch (c) {
              case '/': return '_';
              case '+': return '-';
              case '=': return '';
            }
            return c;
          });
          chunk.renderedHash = chunk.hash.substr(0, compiler.options.hashDigestLength);
        });
      });
    });
  }
};
