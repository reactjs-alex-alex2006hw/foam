/**
 * @license
 * Copyright 2013 Google Inc. All Rights Reserved.
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

package foam.dao;

import java.util.Comparator;

import foam.core.Expression;
import foam.core.Model;
import foam.core.X;


public interface DAO
  extends DAOListener
{

  public Model getModel();

  public Object find(X x, Object where)
    throws DAOException, DAOInternalException;
  
  public Sink select(X x, Sink sink)
    throws DAOException, DAOInternalException;
  
  public Sink select_(X x, Sink sink, Expression<Boolean> p, Comparator c, long skip, long limit)
    throws DAOException, DAOInternalException;
  
  public void removeAll(X x)
    throws DAOException, DAOInternalException;
  
  public void removeAll_(X x, Expression<Boolean> p)
    throws DAOException, DAOInternalException;
  
  /*****************************/
  
  public DAO where(Expression<Boolean> p);
  
  public DAO limit(long i);
  
  public DAO skip(long i);
  
  /*****************************/
  
  public void listen(DAOListener listener);
  
  public void unlisten(DAOListener listener);
  
  public void pipe(DAOListener listener)
    throws DAOException, DAOInternalException;

}