
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Payload
 * 
 */
export type Payload = $Result.DefaultSelection<Prisma.$PayloadPayload>
/**
 * Model Revision
 * 
 */
export type Revision = $Result.DefaultSelection<Prisma.$RevisionPayload>
/**
 * Model JiraEvent
 * 
 */
export type JiraEvent = $Result.DefaultSelection<Prisma.$JiraEventPayload>
/**
 * Model JiraProject
 * 
 */
export type JiraProject = $Result.DefaultSelection<Prisma.$JiraProjectPayload>
/**
 * Model JiraUser
 * 
 */
export type JiraUser = $Result.DefaultSelection<Prisma.$JiraUserPayload>
/**
 * Model JiraIssue
 * 
 */
export type JiraIssue = $Result.DefaultSelection<Prisma.$JiraIssuePayload>
/**
 * Model JiraPayload
 * 
 */
export type JiraPayload = $Result.DefaultSelection<Prisma.$JiraPayloadPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SourceType: {
  github: 'github',
  gitlab: 'gitlab',
  bitbucket: 'bitbucket'
};

export type SourceType = (typeof SourceType)[keyof typeof SourceType]


export const EventType: {
  opened: 'opened',
  merged: 'merged',
  closed: 'closed',
  changes_requested: 'changes_requested',
  pushed: 'pushed',
  dismissed: 'dismissed',
  approved: 'approved',
  unapproved: 'unapproved',
  reopen: 'reopen'
};

export type EventType = (typeof EventType)[keyof typeof EventType]

}

export type SourceType = $Enums.SourceType

export const SourceType: typeof $Enums.SourceType

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payload`: Exposes CRUD operations for the **Payload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payloads
    * const payloads = await prisma.payload.findMany()
    * ```
    */
  get payload(): Prisma.PayloadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revision`: Exposes CRUD operations for the **Revision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Revisions
    * const revisions = await prisma.revision.findMany()
    * ```
    */
  get revision(): Prisma.RevisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jiraEvent`: Exposes CRUD operations for the **JiraEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JiraEvents
    * const jiraEvents = await prisma.jiraEvent.findMany()
    * ```
    */
  get jiraEvent(): Prisma.JiraEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jiraProject`: Exposes CRUD operations for the **JiraProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JiraProjects
    * const jiraProjects = await prisma.jiraProject.findMany()
    * ```
    */
  get jiraProject(): Prisma.JiraProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jiraUser`: Exposes CRUD operations for the **JiraUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JiraUsers
    * const jiraUsers = await prisma.jiraUser.findMany()
    * ```
    */
  get jiraUser(): Prisma.JiraUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jiraIssue`: Exposes CRUD operations for the **JiraIssue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JiraIssues
    * const jiraIssues = await prisma.jiraIssue.findMany()
    * ```
    */
  get jiraIssue(): Prisma.JiraIssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jiraPayload`: Exposes CRUD operations for the **JiraPayload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JiraPayloads
    * const jiraPayloads = await prisma.jiraPayload.findMany()
    * ```
    */
  get jiraPayload(): Prisma.JiraPayloadDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    User: 'User',
    Ticket: 'Ticket',
    Event: 'Event',
    Payload: 'Payload',
    Revision: 'Revision',
    JiraEvent: 'JiraEvent',
    JiraProject: 'JiraProject',
    JiraUser: 'JiraUser',
    JiraIssue: 'JiraIssue',
    JiraPayload: 'JiraPayload'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "user" | "ticket" | "event" | "payload" | "revision" | "jiraEvent" | "jiraProject" | "jiraUser" | "jiraIssue" | "jiraPayload"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Payload: {
        payload: Prisma.$PayloadPayload<ExtArgs>
        fields: Prisma.PayloadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayloadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayloadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadPayload>
          }
          findFirst: {
            args: Prisma.PayloadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayloadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadPayload>
          }
          findMany: {
            args: Prisma.PayloadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadPayload>[]
          }
          create: {
            args: Prisma.PayloadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadPayload>
          }
          createMany: {
            args: Prisma.PayloadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PayloadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadPayload>
          }
          update: {
            args: Prisma.PayloadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadPayload>
          }
          deleteMany: {
            args: Prisma.PayloadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayloadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayloadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayloadPayload>
          }
          aggregate: {
            args: Prisma.PayloadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayload>
          }
          groupBy: {
            args: Prisma.PayloadGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayloadGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayloadCountArgs<ExtArgs>
            result: $Utils.Optional<PayloadCountAggregateOutputType> | number
          }
        }
      }
      Revision: {
        payload: Prisma.$RevisionPayload<ExtArgs>
        fields: Prisma.RevisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          findFirst: {
            args: Prisma.RevisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          findMany: {
            args: Prisma.RevisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>[]
          }
          create: {
            args: Prisma.RevisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          createMany: {
            args: Prisma.RevisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RevisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          update: {
            args: Prisma.RevisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          deleteMany: {
            args: Prisma.RevisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RevisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          aggregate: {
            args: Prisma.RevisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevision>
          }
          groupBy: {
            args: Prisma.RevisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevisionCountArgs<ExtArgs>
            result: $Utils.Optional<RevisionCountAggregateOutputType> | number
          }
        }
      }
      JiraEvent: {
        payload: Prisma.$JiraEventPayload<ExtArgs>
        fields: Prisma.JiraEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JiraEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JiraEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraEventPayload>
          }
          findFirst: {
            args: Prisma.JiraEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JiraEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraEventPayload>
          }
          findMany: {
            args: Prisma.JiraEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraEventPayload>[]
          }
          create: {
            args: Prisma.JiraEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraEventPayload>
          }
          createMany: {
            args: Prisma.JiraEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JiraEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraEventPayload>
          }
          update: {
            args: Prisma.JiraEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraEventPayload>
          }
          deleteMany: {
            args: Prisma.JiraEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JiraEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JiraEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraEventPayload>
          }
          aggregate: {
            args: Prisma.JiraEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJiraEvent>
          }
          groupBy: {
            args: Prisma.JiraEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<JiraEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.JiraEventCountArgs<ExtArgs>
            result: $Utils.Optional<JiraEventCountAggregateOutputType> | number
          }
        }
      }
      JiraProject: {
        payload: Prisma.$JiraProjectPayload<ExtArgs>
        fields: Prisma.JiraProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JiraProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JiraProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraProjectPayload>
          }
          findFirst: {
            args: Prisma.JiraProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JiraProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraProjectPayload>
          }
          findMany: {
            args: Prisma.JiraProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraProjectPayload>[]
          }
          create: {
            args: Prisma.JiraProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraProjectPayload>
          }
          createMany: {
            args: Prisma.JiraProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JiraProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraProjectPayload>
          }
          update: {
            args: Prisma.JiraProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraProjectPayload>
          }
          deleteMany: {
            args: Prisma.JiraProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JiraProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JiraProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraProjectPayload>
          }
          aggregate: {
            args: Prisma.JiraProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJiraProject>
          }
          groupBy: {
            args: Prisma.JiraProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<JiraProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.JiraProjectCountArgs<ExtArgs>
            result: $Utils.Optional<JiraProjectCountAggregateOutputType> | number
          }
        }
      }
      JiraUser: {
        payload: Prisma.$JiraUserPayload<ExtArgs>
        fields: Prisma.JiraUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JiraUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JiraUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraUserPayload>
          }
          findFirst: {
            args: Prisma.JiraUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JiraUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraUserPayload>
          }
          findMany: {
            args: Prisma.JiraUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraUserPayload>[]
          }
          create: {
            args: Prisma.JiraUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraUserPayload>
          }
          createMany: {
            args: Prisma.JiraUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JiraUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraUserPayload>
          }
          update: {
            args: Prisma.JiraUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraUserPayload>
          }
          deleteMany: {
            args: Prisma.JiraUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JiraUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JiraUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraUserPayload>
          }
          aggregate: {
            args: Prisma.JiraUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJiraUser>
          }
          groupBy: {
            args: Prisma.JiraUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<JiraUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.JiraUserCountArgs<ExtArgs>
            result: $Utils.Optional<JiraUserCountAggregateOutputType> | number
          }
        }
      }
      JiraIssue: {
        payload: Prisma.$JiraIssuePayload<ExtArgs>
        fields: Prisma.JiraIssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JiraIssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraIssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JiraIssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraIssuePayload>
          }
          findFirst: {
            args: Prisma.JiraIssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraIssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JiraIssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraIssuePayload>
          }
          findMany: {
            args: Prisma.JiraIssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraIssuePayload>[]
          }
          create: {
            args: Prisma.JiraIssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraIssuePayload>
          }
          createMany: {
            args: Prisma.JiraIssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JiraIssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraIssuePayload>
          }
          update: {
            args: Prisma.JiraIssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraIssuePayload>
          }
          deleteMany: {
            args: Prisma.JiraIssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JiraIssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JiraIssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraIssuePayload>
          }
          aggregate: {
            args: Prisma.JiraIssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJiraIssue>
          }
          groupBy: {
            args: Prisma.JiraIssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<JiraIssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.JiraIssueCountArgs<ExtArgs>
            result: $Utils.Optional<JiraIssueCountAggregateOutputType> | number
          }
        }
      }
      JiraPayload: {
        payload: Prisma.$JiraPayloadPayload<ExtArgs>
        fields: Prisma.JiraPayloadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JiraPayloadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraPayloadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JiraPayloadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraPayloadPayload>
          }
          findFirst: {
            args: Prisma.JiraPayloadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraPayloadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JiraPayloadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraPayloadPayload>
          }
          findMany: {
            args: Prisma.JiraPayloadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraPayloadPayload>[]
          }
          create: {
            args: Prisma.JiraPayloadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraPayloadPayload>
          }
          createMany: {
            args: Prisma.JiraPayloadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JiraPayloadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraPayloadPayload>
          }
          update: {
            args: Prisma.JiraPayloadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraPayloadPayload>
          }
          deleteMany: {
            args: Prisma.JiraPayloadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JiraPayloadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JiraPayloadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JiraPayloadPayload>
          }
          aggregate: {
            args: Prisma.JiraPayloadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJiraPayload>
          }
          groupBy: {
            args: Prisma.JiraPayloadGroupByArgs<ExtArgs>
            result: $Utils.Optional<JiraPayloadGroupByOutputType>[]
          }
          count: {
            args: Prisma.JiraPayloadCountArgs<ExtArgs>
            result: $Utils.Optional<JiraPayloadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    user?: UserOmit
    ticket?: TicketOmit
    event?: EventOmit
    payload?: PayloadOmit
    revision?: RevisionOmit
    jiraEvent?: JiraEventOmit
    jiraProject?: JiraProjectOmit
    jiraUser?: JiraUserOmit
    jiraIssue?: JiraIssueOmit
    jiraPayload?: JiraPayloadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    events: number
    tickets: number
    contributors: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ProjectCountOutputTypeCountEventsArgs
    tickets?: boolean | ProjectCountOutputTypeCountTicketsArgs
    contributors?: boolean | ProjectCountOutputTypeCountContributorsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountContributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    events: number
    reviewed_events: number
    authoredRevisions: number
    reviewedRevisions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
    reviewed_events?: boolean | UserCountOutputTypeCountReviewed_eventsArgs
    authoredRevisions?: boolean | UserCountOutputTypeCountAuthoredRevisionsArgs
    reviewedRevisions?: boolean | UserCountOutputTypeCountReviewedRevisionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewed_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthoredRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewedRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    events: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TicketCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type JiraProjectCountOutputType
   */

  export type JiraProjectCountOutputType = {
    issues: number
    JiraEvent: number
  }

  export type JiraProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | JiraProjectCountOutputTypeCountIssuesArgs
    JiraEvent?: boolean | JiraProjectCountOutputTypeCountJiraEventArgs
  }

  // Custom InputTypes
  /**
   * JiraProjectCountOutputType without action
   */
  export type JiraProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProjectCountOutputType
     */
    select?: JiraProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JiraProjectCountOutputType without action
   */
  export type JiraProjectCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JiraIssueWhereInput
  }

  /**
   * JiraProjectCountOutputType without action
   */
  export type JiraProjectCountOutputTypeCountJiraEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JiraEventWhereInput
  }


  /**
   * Count Type JiraUserCountOutputType
   */

  export type JiraUserCountOutputType = {
    created_issues: number
    assigned_issues: number
    JiraEvent: number
  }

  export type JiraUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_issues?: boolean | JiraUserCountOutputTypeCountCreated_issuesArgs
    assigned_issues?: boolean | JiraUserCountOutputTypeCountAssigned_issuesArgs
    JiraEvent?: boolean | JiraUserCountOutputTypeCountJiraEventArgs
  }

  // Custom InputTypes
  /**
   * JiraUserCountOutputType without action
   */
  export type JiraUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUserCountOutputType
     */
    select?: JiraUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JiraUserCountOutputType without action
   */
  export type JiraUserCountOutputTypeCountCreated_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JiraIssueWhereInput
  }

  /**
   * JiraUserCountOutputType without action
   */
  export type JiraUserCountOutputTypeCountAssigned_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JiraIssueWhereInput
  }

  /**
   * JiraUserCountOutputType without action
   */
  export type JiraUserCountOutputTypeCountJiraEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JiraEventWhereInput
  }


  /**
   * Count Type JiraIssueCountOutputType
   */

  export type JiraIssueCountOutputType = {
    events: number
  }

  export type JiraIssueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | JiraIssueCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * JiraIssueCountOutputType without action
   */
  export type JiraIssueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssueCountOutputType
     */
    select?: JiraIssueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JiraIssueCountOutputType without action
   */
  export type JiraIssueCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JiraEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    repository: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    repository: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    repository: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    repository?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    repository?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    repository?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    repository: string
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    repository?: boolean
    events?: boolean | Project$eventsArgs<ExtArgs>
    tickets?: boolean | Project$ticketsArgs<ExtArgs>
    contributors?: boolean | Project$contributorsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    repository?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "repository", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Project$eventsArgs<ExtArgs>
    tickets?: boolean | Project$ticketsArgs<ExtArgs>
    contributors?: boolean | Project$contributorsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      contributors: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      repository: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Project$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Project$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Project$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Project$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contributors<T extends Project$contributorsArgs<ExtArgs> = {}>(args?: Subset<T, Project$contributorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly repository: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.events
   */
  export type Project$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Project.tickets
   */
  export type Project$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Project.contributors
   */
  export type Project$contributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    first_name: string | null
    last_name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    first_name: string | null
    last_name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    first_name: number
    last_name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    first_name?: true
    last_name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    first_name?: true
    last_name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    first_name?: true
    last_name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    first_name: string | null
    last_name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    reviewed_events?: boolean | User$reviewed_eventsArgs<ExtArgs>
    authoredRevisions?: boolean | User$authoredRevisionsArgs<ExtArgs>
    reviewedRevisions?: boolean | User$reviewedRevisionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "first_name" | "last_name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    reviewed_events?: boolean | User$reviewed_eventsArgs<ExtArgs>
    authoredRevisions?: boolean | User$authoredRevisionsArgs<ExtArgs>
    reviewedRevisions?: boolean | User$reviewedRevisionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      reviewed_events: Prisma.$EventPayload<ExtArgs>[]
      authoredRevisions: Prisma.$RevisionPayload<ExtArgs>[]
      reviewedRevisions: Prisma.$RevisionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      first_name: string | null
      last_name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewed_events<T extends User$reviewed_eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewed_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authoredRevisions<T extends User$authoredRevisionsArgs<ExtArgs> = {}>(args?: Subset<T, User$authoredRevisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewedRevisions<T extends User$reviewedRevisionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewedRevisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.reviewed_events
   */
  export type User$reviewed_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.authoredRevisions
   */
  export type User$authoredRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    where?: RevisionWhereInput
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    cursor?: RevisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * User.reviewedRevisions
   */
  export type User$reviewedRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    where?: RevisionWhereInput
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    cursor?: RevisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    code: string | null
    project_id: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    code: string | null
    project_id: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    code: number
    project_id: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    code?: true
    project_id?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    code?: true
    project_id?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    code?: true
    project_id?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    code: string
    project_id: number
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    project_id?: boolean
    events?: boolean | Ticket$eventsArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type TicketSelectScalar = {
    id?: boolean
    code?: boolean
    project_id?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "project_id", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Ticket$eventsArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      project_id: number
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Ticket$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly code: FieldRef<"Ticket", 'String'>
    readonly project_id: FieldRef<"Ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.events
   */
  export type Ticket$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
    author_id: number | null
    reviewer_id: number | null
    ticket_id: number | null
    pr_number: number | null
    additions: number | null
    deletions: number | null
    changed_files: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    project_id: number | null
    author_id: number | null
    reviewer_id: number | null
    ticket_id: number | null
    pr_number: number | null
    additions: number | null
    deletions: number | null
    changed_files: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    author_id: number | null
    reviewer_id: number | null
    ticket_id: number | null
    source: $Enums.SourceType | null
    branch: string | null
    pr_number: number | null
    additions: number | null
    deletions: number | null
    changed_files: number | null
    event_type: $Enums.EventType | null
    date_created: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    author_id: number | null
    reviewer_id: number | null
    ticket_id: number | null
    source: $Enums.SourceType | null
    branch: string | null
    pr_number: number | null
    additions: number | null
    deletions: number | null
    changed_files: number | null
    event_type: $Enums.EventType | null
    date_created: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    project_id: number
    author_id: number
    reviewer_id: number
    ticket_id: number
    source: number
    branch: number
    pr_number: number
    additions: number
    deletions: number
    changed_files: number
    event_type: number
    date_created: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    project_id?: true
    author_id?: true
    reviewer_id?: true
    ticket_id?: true
    pr_number?: true
    additions?: true
    deletions?: true
    changed_files?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    project_id?: true
    author_id?: true
    reviewer_id?: true
    ticket_id?: true
    pr_number?: true
    additions?: true
    deletions?: true
    changed_files?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    project_id?: true
    author_id?: true
    reviewer_id?: true
    ticket_id?: true
    source?: true
    branch?: true
    pr_number?: true
    additions?: true
    deletions?: true
    changed_files?: true
    event_type?: true
    date_created?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    project_id?: true
    author_id?: true
    reviewer_id?: true
    ticket_id?: true
    source?: true
    branch?: true
    pr_number?: true
    additions?: true
    deletions?: true
    changed_files?: true
    event_type?: true
    date_created?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    project_id?: true
    author_id?: true
    reviewer_id?: true
    ticket_id?: true
    source?: true
    branch?: true
    pr_number?: true
    additions?: true
    deletions?: true
    changed_files?: true
    event_type?: true
    date_created?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    project_id: number | null
    author_id: number | null
    reviewer_id: number | null
    ticket_id: number | null
    source: $Enums.SourceType
    branch: string | null
    pr_number: number | null
    additions: number | null
    deletions: number | null
    changed_files: number | null
    event_type: $Enums.EventType
    date_created: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    author_id?: boolean
    reviewer_id?: boolean
    ticket_id?: boolean
    source?: boolean
    branch?: boolean
    pr_number?: boolean
    additions?: boolean
    deletions?: boolean
    changed_files?: boolean
    event_type?: boolean
    date_created?: boolean
    project?: boolean | Event$projectArgs<ExtArgs>
    author?: boolean | Event$authorArgs<ExtArgs>
    reviewer?: boolean | Event$reviewerArgs<ExtArgs>
    ticket?: boolean | Event$ticketArgs<ExtArgs>
    payload?: boolean | Event$payloadArgs<ExtArgs>
    revision?: boolean | Event$revisionArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    project_id?: boolean
    author_id?: boolean
    reviewer_id?: boolean
    ticket_id?: boolean
    source?: boolean
    branch?: boolean
    pr_number?: boolean
    additions?: boolean
    deletions?: boolean
    changed_files?: boolean
    event_type?: boolean
    date_created?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "author_id" | "reviewer_id" | "ticket_id" | "source" | "branch" | "pr_number" | "additions" | "deletions" | "changed_files" | "event_type" | "date_created", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Event$projectArgs<ExtArgs>
    author?: boolean | Event$authorArgs<ExtArgs>
    reviewer?: boolean | Event$reviewerArgs<ExtArgs>
    ticket?: boolean | Event$ticketArgs<ExtArgs>
    payload?: boolean | Event$payloadArgs<ExtArgs>
    revision?: boolean | Event$revisionArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
      author: Prisma.$UserPayload<ExtArgs> | null
      reviewer: Prisma.$UserPayload<ExtArgs> | null
      ticket: Prisma.$TicketPayload<ExtArgs> | null
      payload: Prisma.$PayloadPayload<ExtArgs> | null
      revision: Prisma.$RevisionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      author_id: number | null
      reviewer_id: number | null
      ticket_id: number | null
      source: $Enums.SourceType
      branch: string | null
      pr_number: number | null
      additions: number | null
      deletions: number | null
      changed_files: number | null
      event_type: $Enums.EventType
      date_created: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends Event$projectArgs<ExtArgs> = {}>(args?: Subset<T, Event$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    author<T extends Event$authorArgs<ExtArgs> = {}>(args?: Subset<T, Event$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends Event$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, Event$reviewerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ticket<T extends Event$ticketArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payload<T extends Event$payloadArgs<ExtArgs> = {}>(args?: Subset<T, Event$payloadArgs<ExtArgs>>): Prisma__PayloadClient<$Result.GetResult<Prisma.$PayloadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    revision<T extends Event$revisionArgs<ExtArgs> = {}>(args?: Subset<T, Event$revisionArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly project_id: FieldRef<"Event", 'Int'>
    readonly author_id: FieldRef<"Event", 'Int'>
    readonly reviewer_id: FieldRef<"Event", 'Int'>
    readonly ticket_id: FieldRef<"Event", 'Int'>
    readonly source: FieldRef<"Event", 'SourceType'>
    readonly branch: FieldRef<"Event", 'String'>
    readonly pr_number: FieldRef<"Event", 'Int'>
    readonly additions: FieldRef<"Event", 'Int'>
    readonly deletions: FieldRef<"Event", 'Int'>
    readonly changed_files: FieldRef<"Event", 'Int'>
    readonly event_type: FieldRef<"Event", 'EventType'>
    readonly date_created: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.project
   */
  export type Event$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Event.author
   */
  export type Event$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Event.reviewer
   */
  export type Event$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Event.ticket
   */
  export type Event$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }

  /**
   * Event.payload
   */
  export type Event$payloadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payload
     */
    select?: PayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payload
     */
    omit?: PayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadInclude<ExtArgs> | null
    where?: PayloadWhereInput
  }

  /**
   * Event.revision
   */
  export type Event$revisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    where?: RevisionWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Payload
   */

  export type AggregatePayload = {
    _count: PayloadCountAggregateOutputType | null
    _avg: PayloadAvgAggregateOutputType | null
    _sum: PayloadSumAggregateOutputType | null
    _min: PayloadMinAggregateOutputType | null
    _max: PayloadMaxAggregateOutputType | null
  }

  export type PayloadAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type PayloadSumAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type PayloadMinAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type PayloadMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type PayloadCountAggregateOutputType = {
    id: number
    raw_payload: number
    event_id: number
    _all: number
  }


  export type PayloadAvgAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type PayloadSumAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type PayloadMinAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type PayloadMaxAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type PayloadCountAggregateInputType = {
    id?: true
    raw_payload?: true
    event_id?: true
    _all?: true
  }

  export type PayloadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payload to aggregate.
     */
    where?: PayloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payloads to fetch.
     */
    orderBy?: PayloadOrderByWithRelationInput | PayloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payloads
    **/
    _count?: true | PayloadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayloadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayloadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayloadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayloadMaxAggregateInputType
  }

  export type GetPayloadAggregateType<T extends PayloadAggregateArgs> = {
        [P in keyof T & keyof AggregatePayload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayload[P]>
      : GetScalarType<T[P], AggregatePayload[P]>
  }




  export type PayloadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayloadWhereInput
    orderBy?: PayloadOrderByWithAggregationInput | PayloadOrderByWithAggregationInput[]
    by: PayloadScalarFieldEnum[] | PayloadScalarFieldEnum
    having?: PayloadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayloadCountAggregateInputType | true
    _avg?: PayloadAvgAggregateInputType
    _sum?: PayloadSumAggregateInputType
    _min?: PayloadMinAggregateInputType
    _max?: PayloadMaxAggregateInputType
  }

  export type PayloadGroupByOutputType = {
    id: number
    raw_payload: JsonValue
    event_id: number
    _count: PayloadCountAggregateOutputType | null
    _avg: PayloadAvgAggregateOutputType | null
    _sum: PayloadSumAggregateOutputType | null
    _min: PayloadMinAggregateOutputType | null
    _max: PayloadMaxAggregateOutputType | null
  }

  type GetPayloadGroupByPayload<T extends PayloadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayloadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayloadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayloadGroupByOutputType[P]>
            : GetScalarType<T[P], PayloadGroupByOutputType[P]>
        }
      >
    >


  export type PayloadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raw_payload?: boolean
    event_id?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payload"]>



  export type PayloadSelectScalar = {
    id?: boolean
    raw_payload?: boolean
    event_id?: boolean
  }

  export type PayloadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raw_payload" | "event_id", ExtArgs["result"]["payload"]>
  export type PayloadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $PayloadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payload"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      raw_payload: Prisma.JsonValue
      event_id: number
    }, ExtArgs["result"]["payload"]>
    composites: {}
  }

  type PayloadGetPayload<S extends boolean | null | undefined | PayloadDefaultArgs> = $Result.GetResult<Prisma.$PayloadPayload, S>

  type PayloadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayloadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayloadCountAggregateInputType | true
    }

  export interface PayloadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payload'], meta: { name: 'Payload' } }
    /**
     * Find zero or one Payload that matches the filter.
     * @param {PayloadFindUniqueArgs} args - Arguments to find a Payload
     * @example
     * // Get one Payload
     * const payload = await prisma.payload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayloadFindUniqueArgs>(args: SelectSubset<T, PayloadFindUniqueArgs<ExtArgs>>): Prisma__PayloadClient<$Result.GetResult<Prisma.$PayloadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayloadFindUniqueOrThrowArgs} args - Arguments to find a Payload
     * @example
     * // Get one Payload
     * const payload = await prisma.payload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayloadFindUniqueOrThrowArgs>(args: SelectSubset<T, PayloadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayloadClient<$Result.GetResult<Prisma.$PayloadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadFindFirstArgs} args - Arguments to find a Payload
     * @example
     * // Get one Payload
     * const payload = await prisma.payload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayloadFindFirstArgs>(args?: SelectSubset<T, PayloadFindFirstArgs<ExtArgs>>): Prisma__PayloadClient<$Result.GetResult<Prisma.$PayloadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadFindFirstOrThrowArgs} args - Arguments to find a Payload
     * @example
     * // Get one Payload
     * const payload = await prisma.payload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayloadFindFirstOrThrowArgs>(args?: SelectSubset<T, PayloadFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayloadClient<$Result.GetResult<Prisma.$PayloadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payloads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payloads
     * const payloads = await prisma.payload.findMany()
     * 
     * // Get first 10 Payloads
     * const payloads = await prisma.payload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payloadWithIdOnly = await prisma.payload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayloadFindManyArgs>(args?: SelectSubset<T, PayloadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayloadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payload.
     * @param {PayloadCreateArgs} args - Arguments to create a Payload.
     * @example
     * // Create one Payload
     * const Payload = await prisma.payload.create({
     *   data: {
     *     // ... data to create a Payload
     *   }
     * })
     * 
     */
    create<T extends PayloadCreateArgs>(args: SelectSubset<T, PayloadCreateArgs<ExtArgs>>): Prisma__PayloadClient<$Result.GetResult<Prisma.$PayloadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payloads.
     * @param {PayloadCreateManyArgs} args - Arguments to create many Payloads.
     * @example
     * // Create many Payloads
     * const payload = await prisma.payload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayloadCreateManyArgs>(args?: SelectSubset<T, PayloadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payload.
     * @param {PayloadDeleteArgs} args - Arguments to delete one Payload.
     * @example
     * // Delete one Payload
     * const Payload = await prisma.payload.delete({
     *   where: {
     *     // ... filter to delete one Payload
     *   }
     * })
     * 
     */
    delete<T extends PayloadDeleteArgs>(args: SelectSubset<T, PayloadDeleteArgs<ExtArgs>>): Prisma__PayloadClient<$Result.GetResult<Prisma.$PayloadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payload.
     * @param {PayloadUpdateArgs} args - Arguments to update one Payload.
     * @example
     * // Update one Payload
     * const payload = await prisma.payload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayloadUpdateArgs>(args: SelectSubset<T, PayloadUpdateArgs<ExtArgs>>): Prisma__PayloadClient<$Result.GetResult<Prisma.$PayloadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payloads.
     * @param {PayloadDeleteManyArgs} args - Arguments to filter Payloads to delete.
     * @example
     * // Delete a few Payloads
     * const { count } = await prisma.payload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayloadDeleteManyArgs>(args?: SelectSubset<T, PayloadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payloads
     * const payload = await prisma.payload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayloadUpdateManyArgs>(args: SelectSubset<T, PayloadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payload.
     * @param {PayloadUpsertArgs} args - Arguments to update or create a Payload.
     * @example
     * // Update or create a Payload
     * const payload = await prisma.payload.upsert({
     *   create: {
     *     // ... data to create a Payload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payload we want to update
     *   }
     * })
     */
    upsert<T extends PayloadUpsertArgs>(args: SelectSubset<T, PayloadUpsertArgs<ExtArgs>>): Prisma__PayloadClient<$Result.GetResult<Prisma.$PayloadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadCountArgs} args - Arguments to filter Payloads to count.
     * @example
     * // Count the number of Payloads
     * const count = await prisma.payload.count({
     *   where: {
     *     // ... the filter for the Payloads we want to count
     *   }
     * })
    **/
    count<T extends PayloadCountArgs>(
      args?: Subset<T, PayloadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayloadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayloadAggregateArgs>(args: Subset<T, PayloadAggregateArgs>): Prisma.PrismaPromise<GetPayloadAggregateType<T>>

    /**
     * Group by Payload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayloadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayloadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayloadGroupByArgs['orderBy'] }
        : { orderBy?: PayloadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayloadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayloadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payload model
   */
  readonly fields: PayloadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayloadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payload model
   */
  interface PayloadFieldRefs {
    readonly id: FieldRef<"Payload", 'Int'>
    readonly raw_payload: FieldRef<"Payload", 'Json'>
    readonly event_id: FieldRef<"Payload", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payload findUnique
   */
  export type PayloadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payload
     */
    select?: PayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payload
     */
    omit?: PayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadInclude<ExtArgs> | null
    /**
     * Filter, which Payload to fetch.
     */
    where: PayloadWhereUniqueInput
  }

  /**
   * Payload findUniqueOrThrow
   */
  export type PayloadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payload
     */
    select?: PayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payload
     */
    omit?: PayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadInclude<ExtArgs> | null
    /**
     * Filter, which Payload to fetch.
     */
    where: PayloadWhereUniqueInput
  }

  /**
   * Payload findFirst
   */
  export type PayloadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payload
     */
    select?: PayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payload
     */
    omit?: PayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadInclude<ExtArgs> | null
    /**
     * Filter, which Payload to fetch.
     */
    where?: PayloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payloads to fetch.
     */
    orderBy?: PayloadOrderByWithRelationInput | PayloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payloads.
     */
    cursor?: PayloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payloads.
     */
    distinct?: PayloadScalarFieldEnum | PayloadScalarFieldEnum[]
  }

  /**
   * Payload findFirstOrThrow
   */
  export type PayloadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payload
     */
    select?: PayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payload
     */
    omit?: PayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadInclude<ExtArgs> | null
    /**
     * Filter, which Payload to fetch.
     */
    where?: PayloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payloads to fetch.
     */
    orderBy?: PayloadOrderByWithRelationInput | PayloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payloads.
     */
    cursor?: PayloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payloads.
     */
    distinct?: PayloadScalarFieldEnum | PayloadScalarFieldEnum[]
  }

  /**
   * Payload findMany
   */
  export type PayloadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payload
     */
    select?: PayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payload
     */
    omit?: PayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadInclude<ExtArgs> | null
    /**
     * Filter, which Payloads to fetch.
     */
    where?: PayloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payloads to fetch.
     */
    orderBy?: PayloadOrderByWithRelationInput | PayloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payloads.
     */
    cursor?: PayloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payloads.
     */
    skip?: number
    distinct?: PayloadScalarFieldEnum | PayloadScalarFieldEnum[]
  }

  /**
   * Payload create
   */
  export type PayloadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payload
     */
    select?: PayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payload
     */
    omit?: PayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadInclude<ExtArgs> | null
    /**
     * The data needed to create a Payload.
     */
    data: XOR<PayloadCreateInput, PayloadUncheckedCreateInput>
  }

  /**
   * Payload createMany
   */
  export type PayloadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payloads.
     */
    data: PayloadCreateManyInput | PayloadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payload update
   */
  export type PayloadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payload
     */
    select?: PayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payload
     */
    omit?: PayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadInclude<ExtArgs> | null
    /**
     * The data needed to update a Payload.
     */
    data: XOR<PayloadUpdateInput, PayloadUncheckedUpdateInput>
    /**
     * Choose, which Payload to update.
     */
    where: PayloadWhereUniqueInput
  }

  /**
   * Payload updateMany
   */
  export type PayloadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payloads.
     */
    data: XOR<PayloadUpdateManyMutationInput, PayloadUncheckedUpdateManyInput>
    /**
     * Filter which Payloads to update
     */
    where?: PayloadWhereInput
    /**
     * Limit how many Payloads to update.
     */
    limit?: number
  }

  /**
   * Payload upsert
   */
  export type PayloadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payload
     */
    select?: PayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payload
     */
    omit?: PayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadInclude<ExtArgs> | null
    /**
     * The filter to search for the Payload to update in case it exists.
     */
    where: PayloadWhereUniqueInput
    /**
     * In case the Payload found by the `where` argument doesn't exist, create a new Payload with this data.
     */
    create: XOR<PayloadCreateInput, PayloadUncheckedCreateInput>
    /**
     * In case the Payload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayloadUpdateInput, PayloadUncheckedUpdateInput>
  }

  /**
   * Payload delete
   */
  export type PayloadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payload
     */
    select?: PayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payload
     */
    omit?: PayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadInclude<ExtArgs> | null
    /**
     * Filter which Payload to delete.
     */
    where: PayloadWhereUniqueInput
  }

  /**
   * Payload deleteMany
   */
  export type PayloadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payloads to delete
     */
    where?: PayloadWhereInput
    /**
     * Limit how many Payloads to delete.
     */
    limit?: number
  }

  /**
   * Payload without action
   */
  export type PayloadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payload
     */
    select?: PayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payload
     */
    omit?: PayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayloadInclude<ExtArgs> | null
  }


  /**
   * Model Revision
   */

  export type AggregateRevision = {
    _count: RevisionCountAggregateOutputType | null
    _avg: RevisionAvgAggregateOutputType | null
    _sum: RevisionSumAggregateOutputType | null
    _min: RevisionMinAggregateOutputType | null
    _max: RevisionMaxAggregateOutputType | null
  }

  export type RevisionAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    reviewer_id: number | null
    pr_event_id: number | null
  }

  export type RevisionSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    reviewer_id: number | null
    pr_event_id: number | null
  }

  export type RevisionMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    reviewer_id: number | null
    pr_event_id: number | null
  }

  export type RevisionMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    reviewer_id: number | null
    pr_event_id: number | null
  }

  export type RevisionCountAggregateOutputType = {
    id: number
    user_id: number
    reviewer_id: number
    pr_event_id: number
    _all: number
  }


  export type RevisionAvgAggregateInputType = {
    id?: true
    user_id?: true
    reviewer_id?: true
    pr_event_id?: true
  }

  export type RevisionSumAggregateInputType = {
    id?: true
    user_id?: true
    reviewer_id?: true
    pr_event_id?: true
  }

  export type RevisionMinAggregateInputType = {
    id?: true
    user_id?: true
    reviewer_id?: true
    pr_event_id?: true
  }

  export type RevisionMaxAggregateInputType = {
    id?: true
    user_id?: true
    reviewer_id?: true
    pr_event_id?: true
  }

  export type RevisionCountAggregateInputType = {
    id?: true
    user_id?: true
    reviewer_id?: true
    pr_event_id?: true
    _all?: true
  }

  export type RevisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Revision to aggregate.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Revisions
    **/
    _count?: true | RevisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RevisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RevisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevisionMaxAggregateInputType
  }

  export type GetRevisionAggregateType<T extends RevisionAggregateArgs> = {
        [P in keyof T & keyof AggregateRevision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevision[P]>
      : GetScalarType<T[P], AggregateRevision[P]>
  }




  export type RevisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionWhereInput
    orderBy?: RevisionOrderByWithAggregationInput | RevisionOrderByWithAggregationInput[]
    by: RevisionScalarFieldEnum[] | RevisionScalarFieldEnum
    having?: RevisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevisionCountAggregateInputType | true
    _avg?: RevisionAvgAggregateInputType
    _sum?: RevisionSumAggregateInputType
    _min?: RevisionMinAggregateInputType
    _max?: RevisionMaxAggregateInputType
  }

  export type RevisionGroupByOutputType = {
    id: number
    user_id: number
    reviewer_id: number | null
    pr_event_id: number
    _count: RevisionCountAggregateOutputType | null
    _avg: RevisionAvgAggregateOutputType | null
    _sum: RevisionSumAggregateOutputType | null
    _min: RevisionMinAggregateOutputType | null
    _max: RevisionMaxAggregateOutputType | null
  }

  type GetRevisionGroupByPayload<T extends RevisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevisionGroupByOutputType[P]>
            : GetScalarType<T[P], RevisionGroupByOutputType[P]>
        }
      >
    >


  export type RevisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    reviewer_id?: boolean
    pr_event_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | Revision$reviewerArgs<ExtArgs>
    pr_event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revision"]>



  export type RevisionSelectScalar = {
    id?: boolean
    user_id?: boolean
    reviewer_id?: boolean
    pr_event_id?: boolean
  }

  export type RevisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "reviewer_id" | "pr_event_id", ExtArgs["result"]["revision"]>
  export type RevisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | Revision$reviewerArgs<ExtArgs>
    pr_event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $RevisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Revision"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs> | null
      pr_event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      reviewer_id: number | null
      pr_event_id: number
    }, ExtArgs["result"]["revision"]>
    composites: {}
  }

  type RevisionGetPayload<S extends boolean | null | undefined | RevisionDefaultArgs> = $Result.GetResult<Prisma.$RevisionPayload, S>

  type RevisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevisionCountAggregateInputType | true
    }

  export interface RevisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Revision'], meta: { name: 'Revision' } }
    /**
     * Find zero or one Revision that matches the filter.
     * @param {RevisionFindUniqueArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevisionFindUniqueArgs>(args: SelectSubset<T, RevisionFindUniqueArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Revision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevisionFindUniqueOrThrowArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevisionFindUniqueOrThrowArgs>(args: SelectSubset<T, RevisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Revision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionFindFirstArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevisionFindFirstArgs>(args?: SelectSubset<T, RevisionFindFirstArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Revision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionFindFirstOrThrowArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevisionFindFirstOrThrowArgs>(args?: SelectSubset<T, RevisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Revisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Revisions
     * const revisions = await prisma.revision.findMany()
     * 
     * // Get first 10 Revisions
     * const revisions = await prisma.revision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revisionWithIdOnly = await prisma.revision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevisionFindManyArgs>(args?: SelectSubset<T, RevisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Revision.
     * @param {RevisionCreateArgs} args - Arguments to create a Revision.
     * @example
     * // Create one Revision
     * const Revision = await prisma.revision.create({
     *   data: {
     *     // ... data to create a Revision
     *   }
     * })
     * 
     */
    create<T extends RevisionCreateArgs>(args: SelectSubset<T, RevisionCreateArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Revisions.
     * @param {RevisionCreateManyArgs} args - Arguments to create many Revisions.
     * @example
     * // Create many Revisions
     * const revision = await prisma.revision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevisionCreateManyArgs>(args?: SelectSubset<T, RevisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Revision.
     * @param {RevisionDeleteArgs} args - Arguments to delete one Revision.
     * @example
     * // Delete one Revision
     * const Revision = await prisma.revision.delete({
     *   where: {
     *     // ... filter to delete one Revision
     *   }
     * })
     * 
     */
    delete<T extends RevisionDeleteArgs>(args: SelectSubset<T, RevisionDeleteArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Revision.
     * @param {RevisionUpdateArgs} args - Arguments to update one Revision.
     * @example
     * // Update one Revision
     * const revision = await prisma.revision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevisionUpdateArgs>(args: SelectSubset<T, RevisionUpdateArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Revisions.
     * @param {RevisionDeleteManyArgs} args - Arguments to filter Revisions to delete.
     * @example
     * // Delete a few Revisions
     * const { count } = await prisma.revision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevisionDeleteManyArgs>(args?: SelectSubset<T, RevisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Revisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Revisions
     * const revision = await prisma.revision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevisionUpdateManyArgs>(args: SelectSubset<T, RevisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Revision.
     * @param {RevisionUpsertArgs} args - Arguments to update or create a Revision.
     * @example
     * // Update or create a Revision
     * const revision = await prisma.revision.upsert({
     *   create: {
     *     // ... data to create a Revision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Revision we want to update
     *   }
     * })
     */
    upsert<T extends RevisionUpsertArgs>(args: SelectSubset<T, RevisionUpsertArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Revisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionCountArgs} args - Arguments to filter Revisions to count.
     * @example
     * // Count the number of Revisions
     * const count = await prisma.revision.count({
     *   where: {
     *     // ... the filter for the Revisions we want to count
     *   }
     * })
    **/
    count<T extends RevisionCountArgs>(
      args?: Subset<T, RevisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Revision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RevisionAggregateArgs>(args: Subset<T, RevisionAggregateArgs>): Prisma.PrismaPromise<GetRevisionAggregateType<T>>

    /**
     * Group by Revision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RevisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevisionGroupByArgs['orderBy'] }
        : { orderBy?: RevisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Revision model
   */
  readonly fields: RevisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Revision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends Revision$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, Revision$reviewerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pr_event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Revision model
   */
  interface RevisionFieldRefs {
    readonly id: FieldRef<"Revision", 'Int'>
    readonly user_id: FieldRef<"Revision", 'Int'>
    readonly reviewer_id: FieldRef<"Revision", 'Int'>
    readonly pr_event_id: FieldRef<"Revision", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Revision findUnique
   */
  export type RevisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision findUniqueOrThrow
   */
  export type RevisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision findFirst
   */
  export type RevisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Revisions.
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Revisions.
     */
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * Revision findFirstOrThrow
   */
  export type RevisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Revisions.
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Revisions.
     */
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * Revision findMany
   */
  export type RevisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revisions to fetch.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Revisions.
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * Revision create
   */
  export type RevisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Revision.
     */
    data: XOR<RevisionCreateInput, RevisionUncheckedCreateInput>
  }

  /**
   * Revision createMany
   */
  export type RevisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Revisions.
     */
    data: RevisionCreateManyInput | RevisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Revision update
   */
  export type RevisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Revision.
     */
    data: XOR<RevisionUpdateInput, RevisionUncheckedUpdateInput>
    /**
     * Choose, which Revision to update.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision updateMany
   */
  export type RevisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Revisions.
     */
    data: XOR<RevisionUpdateManyMutationInput, RevisionUncheckedUpdateManyInput>
    /**
     * Filter which Revisions to update
     */
    where?: RevisionWhereInput
    /**
     * Limit how many Revisions to update.
     */
    limit?: number
  }

  /**
   * Revision upsert
   */
  export type RevisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Revision to update in case it exists.
     */
    where: RevisionWhereUniqueInput
    /**
     * In case the Revision found by the `where` argument doesn't exist, create a new Revision with this data.
     */
    create: XOR<RevisionCreateInput, RevisionUncheckedCreateInput>
    /**
     * In case the Revision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevisionUpdateInput, RevisionUncheckedUpdateInput>
  }

  /**
   * Revision delete
   */
  export type RevisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter which Revision to delete.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision deleteMany
   */
  export type RevisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Revisions to delete
     */
    where?: RevisionWhereInput
    /**
     * Limit how many Revisions to delete.
     */
    limit?: number
  }

  /**
   * Revision.reviewer
   */
  export type Revision$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Revision without action
   */
  export type RevisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
  }


  /**
   * Model JiraEvent
   */

  export type AggregateJiraEvent = {
    _count: JiraEventCountAggregateOutputType | null
    _avg: JiraEventAvgAggregateOutputType | null
    _sum: JiraEventSumAggregateOutputType | null
    _min: JiraEventMinAggregateOutputType | null
    _max: JiraEventMaxAggregateOutputType | null
  }

  export type JiraEventAvgAggregateOutputType = {
    id: number | null
    issue_id: number | null
    project_id: number | null
    user_id: number | null
  }

  export type JiraEventSumAggregateOutputType = {
    id: number | null
    issue_id: number | null
    project_id: number | null
    user_id: number | null
  }

  export type JiraEventMinAggregateOutputType = {
    id: number | null
    webhook_event: string | null
    issue_event_type: string | null
    issue_id: number | null
    project_id: number | null
    user_id: number | null
    date_created: Date | null
  }

  export type JiraEventMaxAggregateOutputType = {
    id: number | null
    webhook_event: string | null
    issue_event_type: string | null
    issue_id: number | null
    project_id: number | null
    user_id: number | null
    date_created: Date | null
  }

  export type JiraEventCountAggregateOutputType = {
    id: number
    webhook_event: number
    issue_event_type: number
    issue_id: number
    project_id: number
    user_id: number
    date_created: number
    _all: number
  }


  export type JiraEventAvgAggregateInputType = {
    id?: true
    issue_id?: true
    project_id?: true
    user_id?: true
  }

  export type JiraEventSumAggregateInputType = {
    id?: true
    issue_id?: true
    project_id?: true
    user_id?: true
  }

  export type JiraEventMinAggregateInputType = {
    id?: true
    webhook_event?: true
    issue_event_type?: true
    issue_id?: true
    project_id?: true
    user_id?: true
    date_created?: true
  }

  export type JiraEventMaxAggregateInputType = {
    id?: true
    webhook_event?: true
    issue_event_type?: true
    issue_id?: true
    project_id?: true
    user_id?: true
    date_created?: true
  }

  export type JiraEventCountAggregateInputType = {
    id?: true
    webhook_event?: true
    issue_event_type?: true
    issue_id?: true
    project_id?: true
    user_id?: true
    date_created?: true
    _all?: true
  }

  export type JiraEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JiraEvent to aggregate.
     */
    where?: JiraEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraEvents to fetch.
     */
    orderBy?: JiraEventOrderByWithRelationInput | JiraEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JiraEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JiraEvents
    **/
    _count?: true | JiraEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JiraEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JiraEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JiraEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JiraEventMaxAggregateInputType
  }

  export type GetJiraEventAggregateType<T extends JiraEventAggregateArgs> = {
        [P in keyof T & keyof AggregateJiraEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJiraEvent[P]>
      : GetScalarType<T[P], AggregateJiraEvent[P]>
  }




  export type JiraEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JiraEventWhereInput
    orderBy?: JiraEventOrderByWithAggregationInput | JiraEventOrderByWithAggregationInput[]
    by: JiraEventScalarFieldEnum[] | JiraEventScalarFieldEnum
    having?: JiraEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JiraEventCountAggregateInputType | true
    _avg?: JiraEventAvgAggregateInputType
    _sum?: JiraEventSumAggregateInputType
    _min?: JiraEventMinAggregateInputType
    _max?: JiraEventMaxAggregateInputType
  }

  export type JiraEventGroupByOutputType = {
    id: number
    webhook_event: string
    issue_event_type: string
    issue_id: number | null
    project_id: number | null
    user_id: number | null
    date_created: Date
    _count: JiraEventCountAggregateOutputType | null
    _avg: JiraEventAvgAggregateOutputType | null
    _sum: JiraEventSumAggregateOutputType | null
    _min: JiraEventMinAggregateOutputType | null
    _max: JiraEventMaxAggregateOutputType | null
  }

  type GetJiraEventGroupByPayload<T extends JiraEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JiraEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JiraEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JiraEventGroupByOutputType[P]>
            : GetScalarType<T[P], JiraEventGroupByOutputType[P]>
        }
      >
    >


  export type JiraEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhook_event?: boolean
    issue_event_type?: boolean
    issue_id?: boolean
    project_id?: boolean
    user_id?: boolean
    date_created?: boolean
    issue?: boolean | JiraEvent$issueArgs<ExtArgs>
    project?: boolean | JiraEvent$projectArgs<ExtArgs>
    user?: boolean | JiraEvent$userArgs<ExtArgs>
    payload?: boolean | JiraEvent$payloadArgs<ExtArgs>
  }, ExtArgs["result"]["jiraEvent"]>



  export type JiraEventSelectScalar = {
    id?: boolean
    webhook_event?: boolean
    issue_event_type?: boolean
    issue_id?: boolean
    project_id?: boolean
    user_id?: boolean
    date_created?: boolean
  }

  export type JiraEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "webhook_event" | "issue_event_type" | "issue_id" | "project_id" | "user_id" | "date_created", ExtArgs["result"]["jiraEvent"]>
  export type JiraEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | JiraEvent$issueArgs<ExtArgs>
    project?: boolean | JiraEvent$projectArgs<ExtArgs>
    user?: boolean | JiraEvent$userArgs<ExtArgs>
    payload?: boolean | JiraEvent$payloadArgs<ExtArgs>
  }

  export type $JiraEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JiraEvent"
    objects: {
      issue: Prisma.$JiraIssuePayload<ExtArgs> | null
      project: Prisma.$JiraProjectPayload<ExtArgs> | null
      user: Prisma.$JiraUserPayload<ExtArgs> | null
      payload: Prisma.$JiraPayloadPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      webhook_event: string
      issue_event_type: string
      issue_id: number | null
      project_id: number | null
      user_id: number | null
      date_created: Date
    }, ExtArgs["result"]["jiraEvent"]>
    composites: {}
  }

  type JiraEventGetPayload<S extends boolean | null | undefined | JiraEventDefaultArgs> = $Result.GetResult<Prisma.$JiraEventPayload, S>

  type JiraEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JiraEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JiraEventCountAggregateInputType | true
    }

  export interface JiraEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JiraEvent'], meta: { name: 'JiraEvent' } }
    /**
     * Find zero or one JiraEvent that matches the filter.
     * @param {JiraEventFindUniqueArgs} args - Arguments to find a JiraEvent
     * @example
     * // Get one JiraEvent
     * const jiraEvent = await prisma.jiraEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JiraEventFindUniqueArgs>(args: SelectSubset<T, JiraEventFindUniqueArgs<ExtArgs>>): Prisma__JiraEventClient<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JiraEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JiraEventFindUniqueOrThrowArgs} args - Arguments to find a JiraEvent
     * @example
     * // Get one JiraEvent
     * const jiraEvent = await prisma.jiraEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JiraEventFindUniqueOrThrowArgs>(args: SelectSubset<T, JiraEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JiraEventClient<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JiraEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraEventFindFirstArgs} args - Arguments to find a JiraEvent
     * @example
     * // Get one JiraEvent
     * const jiraEvent = await prisma.jiraEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JiraEventFindFirstArgs>(args?: SelectSubset<T, JiraEventFindFirstArgs<ExtArgs>>): Prisma__JiraEventClient<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JiraEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraEventFindFirstOrThrowArgs} args - Arguments to find a JiraEvent
     * @example
     * // Get one JiraEvent
     * const jiraEvent = await prisma.jiraEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JiraEventFindFirstOrThrowArgs>(args?: SelectSubset<T, JiraEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__JiraEventClient<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JiraEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JiraEvents
     * const jiraEvents = await prisma.jiraEvent.findMany()
     * 
     * // Get first 10 JiraEvents
     * const jiraEvents = await prisma.jiraEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jiraEventWithIdOnly = await prisma.jiraEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JiraEventFindManyArgs>(args?: SelectSubset<T, JiraEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JiraEvent.
     * @param {JiraEventCreateArgs} args - Arguments to create a JiraEvent.
     * @example
     * // Create one JiraEvent
     * const JiraEvent = await prisma.jiraEvent.create({
     *   data: {
     *     // ... data to create a JiraEvent
     *   }
     * })
     * 
     */
    create<T extends JiraEventCreateArgs>(args: SelectSubset<T, JiraEventCreateArgs<ExtArgs>>): Prisma__JiraEventClient<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JiraEvents.
     * @param {JiraEventCreateManyArgs} args - Arguments to create many JiraEvents.
     * @example
     * // Create many JiraEvents
     * const jiraEvent = await prisma.jiraEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JiraEventCreateManyArgs>(args?: SelectSubset<T, JiraEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JiraEvent.
     * @param {JiraEventDeleteArgs} args - Arguments to delete one JiraEvent.
     * @example
     * // Delete one JiraEvent
     * const JiraEvent = await prisma.jiraEvent.delete({
     *   where: {
     *     // ... filter to delete one JiraEvent
     *   }
     * })
     * 
     */
    delete<T extends JiraEventDeleteArgs>(args: SelectSubset<T, JiraEventDeleteArgs<ExtArgs>>): Prisma__JiraEventClient<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JiraEvent.
     * @param {JiraEventUpdateArgs} args - Arguments to update one JiraEvent.
     * @example
     * // Update one JiraEvent
     * const jiraEvent = await prisma.jiraEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JiraEventUpdateArgs>(args: SelectSubset<T, JiraEventUpdateArgs<ExtArgs>>): Prisma__JiraEventClient<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JiraEvents.
     * @param {JiraEventDeleteManyArgs} args - Arguments to filter JiraEvents to delete.
     * @example
     * // Delete a few JiraEvents
     * const { count } = await prisma.jiraEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JiraEventDeleteManyArgs>(args?: SelectSubset<T, JiraEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JiraEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JiraEvents
     * const jiraEvent = await prisma.jiraEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JiraEventUpdateManyArgs>(args: SelectSubset<T, JiraEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JiraEvent.
     * @param {JiraEventUpsertArgs} args - Arguments to update or create a JiraEvent.
     * @example
     * // Update or create a JiraEvent
     * const jiraEvent = await prisma.jiraEvent.upsert({
     *   create: {
     *     // ... data to create a JiraEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JiraEvent we want to update
     *   }
     * })
     */
    upsert<T extends JiraEventUpsertArgs>(args: SelectSubset<T, JiraEventUpsertArgs<ExtArgs>>): Prisma__JiraEventClient<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JiraEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraEventCountArgs} args - Arguments to filter JiraEvents to count.
     * @example
     * // Count the number of JiraEvents
     * const count = await prisma.jiraEvent.count({
     *   where: {
     *     // ... the filter for the JiraEvents we want to count
     *   }
     * })
    **/
    count<T extends JiraEventCountArgs>(
      args?: Subset<T, JiraEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JiraEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JiraEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JiraEventAggregateArgs>(args: Subset<T, JiraEventAggregateArgs>): Prisma.PrismaPromise<GetJiraEventAggregateType<T>>

    /**
     * Group by JiraEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JiraEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JiraEventGroupByArgs['orderBy'] }
        : { orderBy?: JiraEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JiraEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJiraEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JiraEvent model
   */
  readonly fields: JiraEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JiraEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JiraEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issue<T extends JiraEvent$issueArgs<ExtArgs> = {}>(args?: Subset<T, JiraEvent$issueArgs<ExtArgs>>): Prisma__JiraIssueClient<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends JiraEvent$projectArgs<ExtArgs> = {}>(args?: Subset<T, JiraEvent$projectArgs<ExtArgs>>): Prisma__JiraProjectClient<$Result.GetResult<Prisma.$JiraProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends JiraEvent$userArgs<ExtArgs> = {}>(args?: Subset<T, JiraEvent$userArgs<ExtArgs>>): Prisma__JiraUserClient<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payload<T extends JiraEvent$payloadArgs<ExtArgs> = {}>(args?: Subset<T, JiraEvent$payloadArgs<ExtArgs>>): Prisma__JiraPayloadClient<$Result.GetResult<Prisma.$JiraPayloadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JiraEvent model
   */
  interface JiraEventFieldRefs {
    readonly id: FieldRef<"JiraEvent", 'Int'>
    readonly webhook_event: FieldRef<"JiraEvent", 'String'>
    readonly issue_event_type: FieldRef<"JiraEvent", 'String'>
    readonly issue_id: FieldRef<"JiraEvent", 'Int'>
    readonly project_id: FieldRef<"JiraEvent", 'Int'>
    readonly user_id: FieldRef<"JiraEvent", 'Int'>
    readonly date_created: FieldRef<"JiraEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JiraEvent findUnique
   */
  export type JiraEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    /**
     * Filter, which JiraEvent to fetch.
     */
    where: JiraEventWhereUniqueInput
  }

  /**
   * JiraEvent findUniqueOrThrow
   */
  export type JiraEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    /**
     * Filter, which JiraEvent to fetch.
     */
    where: JiraEventWhereUniqueInput
  }

  /**
   * JiraEvent findFirst
   */
  export type JiraEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    /**
     * Filter, which JiraEvent to fetch.
     */
    where?: JiraEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraEvents to fetch.
     */
    orderBy?: JiraEventOrderByWithRelationInput | JiraEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JiraEvents.
     */
    cursor?: JiraEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JiraEvents.
     */
    distinct?: JiraEventScalarFieldEnum | JiraEventScalarFieldEnum[]
  }

  /**
   * JiraEvent findFirstOrThrow
   */
  export type JiraEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    /**
     * Filter, which JiraEvent to fetch.
     */
    where?: JiraEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraEvents to fetch.
     */
    orderBy?: JiraEventOrderByWithRelationInput | JiraEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JiraEvents.
     */
    cursor?: JiraEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JiraEvents.
     */
    distinct?: JiraEventScalarFieldEnum | JiraEventScalarFieldEnum[]
  }

  /**
   * JiraEvent findMany
   */
  export type JiraEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    /**
     * Filter, which JiraEvents to fetch.
     */
    where?: JiraEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraEvents to fetch.
     */
    orderBy?: JiraEventOrderByWithRelationInput | JiraEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JiraEvents.
     */
    cursor?: JiraEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraEvents.
     */
    skip?: number
    distinct?: JiraEventScalarFieldEnum | JiraEventScalarFieldEnum[]
  }

  /**
   * JiraEvent create
   */
  export type JiraEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    /**
     * The data needed to create a JiraEvent.
     */
    data: XOR<JiraEventCreateInput, JiraEventUncheckedCreateInput>
  }

  /**
   * JiraEvent createMany
   */
  export type JiraEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JiraEvents.
     */
    data: JiraEventCreateManyInput | JiraEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JiraEvent update
   */
  export type JiraEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    /**
     * The data needed to update a JiraEvent.
     */
    data: XOR<JiraEventUpdateInput, JiraEventUncheckedUpdateInput>
    /**
     * Choose, which JiraEvent to update.
     */
    where: JiraEventWhereUniqueInput
  }

  /**
   * JiraEvent updateMany
   */
  export type JiraEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JiraEvents.
     */
    data: XOR<JiraEventUpdateManyMutationInput, JiraEventUncheckedUpdateManyInput>
    /**
     * Filter which JiraEvents to update
     */
    where?: JiraEventWhereInput
    /**
     * Limit how many JiraEvents to update.
     */
    limit?: number
  }

  /**
   * JiraEvent upsert
   */
  export type JiraEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    /**
     * The filter to search for the JiraEvent to update in case it exists.
     */
    where: JiraEventWhereUniqueInput
    /**
     * In case the JiraEvent found by the `where` argument doesn't exist, create a new JiraEvent with this data.
     */
    create: XOR<JiraEventCreateInput, JiraEventUncheckedCreateInput>
    /**
     * In case the JiraEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JiraEventUpdateInput, JiraEventUncheckedUpdateInput>
  }

  /**
   * JiraEvent delete
   */
  export type JiraEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    /**
     * Filter which JiraEvent to delete.
     */
    where: JiraEventWhereUniqueInput
  }

  /**
   * JiraEvent deleteMany
   */
  export type JiraEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JiraEvents to delete
     */
    where?: JiraEventWhereInput
    /**
     * Limit how many JiraEvents to delete.
     */
    limit?: number
  }

  /**
   * JiraEvent.issue
   */
  export type JiraEvent$issueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    where?: JiraIssueWhereInput
  }

  /**
   * JiraEvent.project
   */
  export type JiraEvent$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
    where?: JiraProjectWhereInput
  }

  /**
   * JiraEvent.user
   */
  export type JiraEvent$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    where?: JiraUserWhereInput
  }

  /**
   * JiraEvent.payload
   */
  export type JiraEvent$payloadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraPayload
     */
    select?: JiraPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraPayload
     */
    omit?: JiraPayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraPayloadInclude<ExtArgs> | null
    where?: JiraPayloadWhereInput
  }

  /**
   * JiraEvent without action
   */
  export type JiraEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
  }


  /**
   * Model JiraProject
   */

  export type AggregateJiraProject = {
    _count: JiraProjectCountAggregateOutputType | null
    _avg: JiraProjectAvgAggregateOutputType | null
    _sum: JiraProjectSumAggregateOutputType | null
    _min: JiraProjectMinAggregateOutputType | null
    _max: JiraProjectMaxAggregateOutputType | null
  }

  export type JiraProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type JiraProjectSumAggregateOutputType = {
    id: number | null
  }

  export type JiraProjectMinAggregateOutputType = {
    id: number | null
    key: string | null
    name: string | null
    created_at: Date | null
  }

  export type JiraProjectMaxAggregateOutputType = {
    id: number | null
    key: string | null
    name: string | null
    created_at: Date | null
  }

  export type JiraProjectCountAggregateOutputType = {
    id: number
    key: number
    name: number
    created_at: number
    _all: number
  }


  export type JiraProjectAvgAggregateInputType = {
    id?: true
  }

  export type JiraProjectSumAggregateInputType = {
    id?: true
  }

  export type JiraProjectMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    created_at?: true
  }

  export type JiraProjectMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    created_at?: true
  }

  export type JiraProjectCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type JiraProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JiraProject to aggregate.
     */
    where?: JiraProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraProjects to fetch.
     */
    orderBy?: JiraProjectOrderByWithRelationInput | JiraProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JiraProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JiraProjects
    **/
    _count?: true | JiraProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JiraProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JiraProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JiraProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JiraProjectMaxAggregateInputType
  }

  export type GetJiraProjectAggregateType<T extends JiraProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateJiraProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJiraProject[P]>
      : GetScalarType<T[P], AggregateJiraProject[P]>
  }




  export type JiraProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JiraProjectWhereInput
    orderBy?: JiraProjectOrderByWithAggregationInput | JiraProjectOrderByWithAggregationInput[]
    by: JiraProjectScalarFieldEnum[] | JiraProjectScalarFieldEnum
    having?: JiraProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JiraProjectCountAggregateInputType | true
    _avg?: JiraProjectAvgAggregateInputType
    _sum?: JiraProjectSumAggregateInputType
    _min?: JiraProjectMinAggregateInputType
    _max?: JiraProjectMaxAggregateInputType
  }

  export type JiraProjectGroupByOutputType = {
    id: number
    key: string
    name: string
    created_at: Date
    _count: JiraProjectCountAggregateOutputType | null
    _avg: JiraProjectAvgAggregateOutputType | null
    _sum: JiraProjectSumAggregateOutputType | null
    _min: JiraProjectMinAggregateOutputType | null
    _max: JiraProjectMaxAggregateOutputType | null
  }

  type GetJiraProjectGroupByPayload<T extends JiraProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JiraProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JiraProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JiraProjectGroupByOutputType[P]>
            : GetScalarType<T[P], JiraProjectGroupByOutputType[P]>
        }
      >
    >


  export type JiraProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    created_at?: boolean
    issues?: boolean | JiraProject$issuesArgs<ExtArgs>
    JiraEvent?: boolean | JiraProject$JiraEventArgs<ExtArgs>
    _count?: boolean | JiraProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jiraProject"]>



  export type JiraProjectSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type JiraProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "name" | "created_at", ExtArgs["result"]["jiraProject"]>
  export type JiraProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | JiraProject$issuesArgs<ExtArgs>
    JiraEvent?: boolean | JiraProject$JiraEventArgs<ExtArgs>
    _count?: boolean | JiraProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JiraProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JiraProject"
    objects: {
      issues: Prisma.$JiraIssuePayload<ExtArgs>[]
      JiraEvent: Prisma.$JiraEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      name: string
      created_at: Date
    }, ExtArgs["result"]["jiraProject"]>
    composites: {}
  }

  type JiraProjectGetPayload<S extends boolean | null | undefined | JiraProjectDefaultArgs> = $Result.GetResult<Prisma.$JiraProjectPayload, S>

  type JiraProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JiraProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JiraProjectCountAggregateInputType | true
    }

  export interface JiraProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JiraProject'], meta: { name: 'JiraProject' } }
    /**
     * Find zero or one JiraProject that matches the filter.
     * @param {JiraProjectFindUniqueArgs} args - Arguments to find a JiraProject
     * @example
     * // Get one JiraProject
     * const jiraProject = await prisma.jiraProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JiraProjectFindUniqueArgs>(args: SelectSubset<T, JiraProjectFindUniqueArgs<ExtArgs>>): Prisma__JiraProjectClient<$Result.GetResult<Prisma.$JiraProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JiraProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JiraProjectFindUniqueOrThrowArgs} args - Arguments to find a JiraProject
     * @example
     * // Get one JiraProject
     * const jiraProject = await prisma.jiraProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JiraProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, JiraProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JiraProjectClient<$Result.GetResult<Prisma.$JiraProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JiraProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraProjectFindFirstArgs} args - Arguments to find a JiraProject
     * @example
     * // Get one JiraProject
     * const jiraProject = await prisma.jiraProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JiraProjectFindFirstArgs>(args?: SelectSubset<T, JiraProjectFindFirstArgs<ExtArgs>>): Prisma__JiraProjectClient<$Result.GetResult<Prisma.$JiraProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JiraProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraProjectFindFirstOrThrowArgs} args - Arguments to find a JiraProject
     * @example
     * // Get one JiraProject
     * const jiraProject = await prisma.jiraProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JiraProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, JiraProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__JiraProjectClient<$Result.GetResult<Prisma.$JiraProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JiraProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JiraProjects
     * const jiraProjects = await prisma.jiraProject.findMany()
     * 
     * // Get first 10 JiraProjects
     * const jiraProjects = await prisma.jiraProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jiraProjectWithIdOnly = await prisma.jiraProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JiraProjectFindManyArgs>(args?: SelectSubset<T, JiraProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JiraProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JiraProject.
     * @param {JiraProjectCreateArgs} args - Arguments to create a JiraProject.
     * @example
     * // Create one JiraProject
     * const JiraProject = await prisma.jiraProject.create({
     *   data: {
     *     // ... data to create a JiraProject
     *   }
     * })
     * 
     */
    create<T extends JiraProjectCreateArgs>(args: SelectSubset<T, JiraProjectCreateArgs<ExtArgs>>): Prisma__JiraProjectClient<$Result.GetResult<Prisma.$JiraProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JiraProjects.
     * @param {JiraProjectCreateManyArgs} args - Arguments to create many JiraProjects.
     * @example
     * // Create many JiraProjects
     * const jiraProject = await prisma.jiraProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JiraProjectCreateManyArgs>(args?: SelectSubset<T, JiraProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JiraProject.
     * @param {JiraProjectDeleteArgs} args - Arguments to delete one JiraProject.
     * @example
     * // Delete one JiraProject
     * const JiraProject = await prisma.jiraProject.delete({
     *   where: {
     *     // ... filter to delete one JiraProject
     *   }
     * })
     * 
     */
    delete<T extends JiraProjectDeleteArgs>(args: SelectSubset<T, JiraProjectDeleteArgs<ExtArgs>>): Prisma__JiraProjectClient<$Result.GetResult<Prisma.$JiraProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JiraProject.
     * @param {JiraProjectUpdateArgs} args - Arguments to update one JiraProject.
     * @example
     * // Update one JiraProject
     * const jiraProject = await prisma.jiraProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JiraProjectUpdateArgs>(args: SelectSubset<T, JiraProjectUpdateArgs<ExtArgs>>): Prisma__JiraProjectClient<$Result.GetResult<Prisma.$JiraProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JiraProjects.
     * @param {JiraProjectDeleteManyArgs} args - Arguments to filter JiraProjects to delete.
     * @example
     * // Delete a few JiraProjects
     * const { count } = await prisma.jiraProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JiraProjectDeleteManyArgs>(args?: SelectSubset<T, JiraProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JiraProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JiraProjects
     * const jiraProject = await prisma.jiraProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JiraProjectUpdateManyArgs>(args: SelectSubset<T, JiraProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JiraProject.
     * @param {JiraProjectUpsertArgs} args - Arguments to update or create a JiraProject.
     * @example
     * // Update or create a JiraProject
     * const jiraProject = await prisma.jiraProject.upsert({
     *   create: {
     *     // ... data to create a JiraProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JiraProject we want to update
     *   }
     * })
     */
    upsert<T extends JiraProjectUpsertArgs>(args: SelectSubset<T, JiraProjectUpsertArgs<ExtArgs>>): Prisma__JiraProjectClient<$Result.GetResult<Prisma.$JiraProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JiraProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraProjectCountArgs} args - Arguments to filter JiraProjects to count.
     * @example
     * // Count the number of JiraProjects
     * const count = await prisma.jiraProject.count({
     *   where: {
     *     // ... the filter for the JiraProjects we want to count
     *   }
     * })
    **/
    count<T extends JiraProjectCountArgs>(
      args?: Subset<T, JiraProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JiraProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JiraProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JiraProjectAggregateArgs>(args: Subset<T, JiraProjectAggregateArgs>): Prisma.PrismaPromise<GetJiraProjectAggregateType<T>>

    /**
     * Group by JiraProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JiraProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JiraProjectGroupByArgs['orderBy'] }
        : { orderBy?: JiraProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JiraProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJiraProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JiraProject model
   */
  readonly fields: JiraProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JiraProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JiraProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issues<T extends JiraProject$issuesArgs<ExtArgs> = {}>(args?: Subset<T, JiraProject$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    JiraEvent<T extends JiraProject$JiraEventArgs<ExtArgs> = {}>(args?: Subset<T, JiraProject$JiraEventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JiraProject model
   */
  interface JiraProjectFieldRefs {
    readonly id: FieldRef<"JiraProject", 'Int'>
    readonly key: FieldRef<"JiraProject", 'String'>
    readonly name: FieldRef<"JiraProject", 'String'>
    readonly created_at: FieldRef<"JiraProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JiraProject findUnique
   */
  export type JiraProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
    /**
     * Filter, which JiraProject to fetch.
     */
    where: JiraProjectWhereUniqueInput
  }

  /**
   * JiraProject findUniqueOrThrow
   */
  export type JiraProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
    /**
     * Filter, which JiraProject to fetch.
     */
    where: JiraProjectWhereUniqueInput
  }

  /**
   * JiraProject findFirst
   */
  export type JiraProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
    /**
     * Filter, which JiraProject to fetch.
     */
    where?: JiraProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraProjects to fetch.
     */
    orderBy?: JiraProjectOrderByWithRelationInput | JiraProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JiraProjects.
     */
    cursor?: JiraProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JiraProjects.
     */
    distinct?: JiraProjectScalarFieldEnum | JiraProjectScalarFieldEnum[]
  }

  /**
   * JiraProject findFirstOrThrow
   */
  export type JiraProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
    /**
     * Filter, which JiraProject to fetch.
     */
    where?: JiraProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraProjects to fetch.
     */
    orderBy?: JiraProjectOrderByWithRelationInput | JiraProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JiraProjects.
     */
    cursor?: JiraProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JiraProjects.
     */
    distinct?: JiraProjectScalarFieldEnum | JiraProjectScalarFieldEnum[]
  }

  /**
   * JiraProject findMany
   */
  export type JiraProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
    /**
     * Filter, which JiraProjects to fetch.
     */
    where?: JiraProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraProjects to fetch.
     */
    orderBy?: JiraProjectOrderByWithRelationInput | JiraProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JiraProjects.
     */
    cursor?: JiraProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraProjects.
     */
    skip?: number
    distinct?: JiraProjectScalarFieldEnum | JiraProjectScalarFieldEnum[]
  }

  /**
   * JiraProject create
   */
  export type JiraProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a JiraProject.
     */
    data: XOR<JiraProjectCreateInput, JiraProjectUncheckedCreateInput>
  }

  /**
   * JiraProject createMany
   */
  export type JiraProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JiraProjects.
     */
    data: JiraProjectCreateManyInput | JiraProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JiraProject update
   */
  export type JiraProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a JiraProject.
     */
    data: XOR<JiraProjectUpdateInput, JiraProjectUncheckedUpdateInput>
    /**
     * Choose, which JiraProject to update.
     */
    where: JiraProjectWhereUniqueInput
  }

  /**
   * JiraProject updateMany
   */
  export type JiraProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JiraProjects.
     */
    data: XOR<JiraProjectUpdateManyMutationInput, JiraProjectUncheckedUpdateManyInput>
    /**
     * Filter which JiraProjects to update
     */
    where?: JiraProjectWhereInput
    /**
     * Limit how many JiraProjects to update.
     */
    limit?: number
  }

  /**
   * JiraProject upsert
   */
  export type JiraProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the JiraProject to update in case it exists.
     */
    where: JiraProjectWhereUniqueInput
    /**
     * In case the JiraProject found by the `where` argument doesn't exist, create a new JiraProject with this data.
     */
    create: XOR<JiraProjectCreateInput, JiraProjectUncheckedCreateInput>
    /**
     * In case the JiraProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JiraProjectUpdateInput, JiraProjectUncheckedUpdateInput>
  }

  /**
   * JiraProject delete
   */
  export type JiraProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
    /**
     * Filter which JiraProject to delete.
     */
    where: JiraProjectWhereUniqueInput
  }

  /**
   * JiraProject deleteMany
   */
  export type JiraProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JiraProjects to delete
     */
    where?: JiraProjectWhereInput
    /**
     * Limit how many JiraProjects to delete.
     */
    limit?: number
  }

  /**
   * JiraProject.issues
   */
  export type JiraProject$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    where?: JiraIssueWhereInput
    orderBy?: JiraIssueOrderByWithRelationInput | JiraIssueOrderByWithRelationInput[]
    cursor?: JiraIssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JiraIssueScalarFieldEnum | JiraIssueScalarFieldEnum[]
  }

  /**
   * JiraProject.JiraEvent
   */
  export type JiraProject$JiraEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    where?: JiraEventWhereInput
    orderBy?: JiraEventOrderByWithRelationInput | JiraEventOrderByWithRelationInput[]
    cursor?: JiraEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JiraEventScalarFieldEnum | JiraEventScalarFieldEnum[]
  }

  /**
   * JiraProject without action
   */
  export type JiraProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
  }


  /**
   * Model JiraUser
   */

  export type AggregateJiraUser = {
    _count: JiraUserCountAggregateOutputType | null
    _avg: JiraUserAvgAggregateOutputType | null
    _sum: JiraUserSumAggregateOutputType | null
    _min: JiraUserMinAggregateOutputType | null
    _max: JiraUserMaxAggregateOutputType | null
  }

  export type JiraUserAvgAggregateOutputType = {
    id: number | null
  }

  export type JiraUserSumAggregateOutputType = {
    id: number | null
  }

  export type JiraUserMinAggregateOutputType = {
    id: number | null
    account_id: string | null
    display_name: string | null
  }

  export type JiraUserMaxAggregateOutputType = {
    id: number | null
    account_id: string | null
    display_name: string | null
  }

  export type JiraUserCountAggregateOutputType = {
    id: number
    account_id: number
    display_name: number
    _all: number
  }


  export type JiraUserAvgAggregateInputType = {
    id?: true
  }

  export type JiraUserSumAggregateInputType = {
    id?: true
  }

  export type JiraUserMinAggregateInputType = {
    id?: true
    account_id?: true
    display_name?: true
  }

  export type JiraUserMaxAggregateInputType = {
    id?: true
    account_id?: true
    display_name?: true
  }

  export type JiraUserCountAggregateInputType = {
    id?: true
    account_id?: true
    display_name?: true
    _all?: true
  }

  export type JiraUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JiraUser to aggregate.
     */
    where?: JiraUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraUsers to fetch.
     */
    orderBy?: JiraUserOrderByWithRelationInput | JiraUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JiraUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JiraUsers
    **/
    _count?: true | JiraUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JiraUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JiraUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JiraUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JiraUserMaxAggregateInputType
  }

  export type GetJiraUserAggregateType<T extends JiraUserAggregateArgs> = {
        [P in keyof T & keyof AggregateJiraUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJiraUser[P]>
      : GetScalarType<T[P], AggregateJiraUser[P]>
  }




  export type JiraUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JiraUserWhereInput
    orderBy?: JiraUserOrderByWithAggregationInput | JiraUserOrderByWithAggregationInput[]
    by: JiraUserScalarFieldEnum[] | JiraUserScalarFieldEnum
    having?: JiraUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JiraUserCountAggregateInputType | true
    _avg?: JiraUserAvgAggregateInputType
    _sum?: JiraUserSumAggregateInputType
    _min?: JiraUserMinAggregateInputType
    _max?: JiraUserMaxAggregateInputType
  }

  export type JiraUserGroupByOutputType = {
    id: number
    account_id: string
    display_name: string | null
    _count: JiraUserCountAggregateOutputType | null
    _avg: JiraUserAvgAggregateOutputType | null
    _sum: JiraUserSumAggregateOutputType | null
    _min: JiraUserMinAggregateOutputType | null
    _max: JiraUserMaxAggregateOutputType | null
  }

  type GetJiraUserGroupByPayload<T extends JiraUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JiraUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JiraUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JiraUserGroupByOutputType[P]>
            : GetScalarType<T[P], JiraUserGroupByOutputType[P]>
        }
      >
    >


  export type JiraUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    display_name?: boolean
    created_issues?: boolean | JiraUser$created_issuesArgs<ExtArgs>
    assigned_issues?: boolean | JiraUser$assigned_issuesArgs<ExtArgs>
    JiraEvent?: boolean | JiraUser$JiraEventArgs<ExtArgs>
    _count?: boolean | JiraUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jiraUser"]>



  export type JiraUserSelectScalar = {
    id?: boolean
    account_id?: boolean
    display_name?: boolean
  }

  export type JiraUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "display_name", ExtArgs["result"]["jiraUser"]>
  export type JiraUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_issues?: boolean | JiraUser$created_issuesArgs<ExtArgs>
    assigned_issues?: boolean | JiraUser$assigned_issuesArgs<ExtArgs>
    JiraEvent?: boolean | JiraUser$JiraEventArgs<ExtArgs>
    _count?: boolean | JiraUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JiraUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JiraUser"
    objects: {
      created_issues: Prisma.$JiraIssuePayload<ExtArgs>[]
      assigned_issues: Prisma.$JiraIssuePayload<ExtArgs>[]
      JiraEvent: Prisma.$JiraEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account_id: string
      display_name: string | null
    }, ExtArgs["result"]["jiraUser"]>
    composites: {}
  }

  type JiraUserGetPayload<S extends boolean | null | undefined | JiraUserDefaultArgs> = $Result.GetResult<Prisma.$JiraUserPayload, S>

  type JiraUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JiraUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JiraUserCountAggregateInputType | true
    }

  export interface JiraUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JiraUser'], meta: { name: 'JiraUser' } }
    /**
     * Find zero or one JiraUser that matches the filter.
     * @param {JiraUserFindUniqueArgs} args - Arguments to find a JiraUser
     * @example
     * // Get one JiraUser
     * const jiraUser = await prisma.jiraUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JiraUserFindUniqueArgs>(args: SelectSubset<T, JiraUserFindUniqueArgs<ExtArgs>>): Prisma__JiraUserClient<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JiraUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JiraUserFindUniqueOrThrowArgs} args - Arguments to find a JiraUser
     * @example
     * // Get one JiraUser
     * const jiraUser = await prisma.jiraUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JiraUserFindUniqueOrThrowArgs>(args: SelectSubset<T, JiraUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JiraUserClient<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JiraUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraUserFindFirstArgs} args - Arguments to find a JiraUser
     * @example
     * // Get one JiraUser
     * const jiraUser = await prisma.jiraUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JiraUserFindFirstArgs>(args?: SelectSubset<T, JiraUserFindFirstArgs<ExtArgs>>): Prisma__JiraUserClient<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JiraUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraUserFindFirstOrThrowArgs} args - Arguments to find a JiraUser
     * @example
     * // Get one JiraUser
     * const jiraUser = await prisma.jiraUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JiraUserFindFirstOrThrowArgs>(args?: SelectSubset<T, JiraUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__JiraUserClient<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JiraUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JiraUsers
     * const jiraUsers = await prisma.jiraUser.findMany()
     * 
     * // Get first 10 JiraUsers
     * const jiraUsers = await prisma.jiraUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jiraUserWithIdOnly = await prisma.jiraUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JiraUserFindManyArgs>(args?: SelectSubset<T, JiraUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JiraUser.
     * @param {JiraUserCreateArgs} args - Arguments to create a JiraUser.
     * @example
     * // Create one JiraUser
     * const JiraUser = await prisma.jiraUser.create({
     *   data: {
     *     // ... data to create a JiraUser
     *   }
     * })
     * 
     */
    create<T extends JiraUserCreateArgs>(args: SelectSubset<T, JiraUserCreateArgs<ExtArgs>>): Prisma__JiraUserClient<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JiraUsers.
     * @param {JiraUserCreateManyArgs} args - Arguments to create many JiraUsers.
     * @example
     * // Create many JiraUsers
     * const jiraUser = await prisma.jiraUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JiraUserCreateManyArgs>(args?: SelectSubset<T, JiraUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JiraUser.
     * @param {JiraUserDeleteArgs} args - Arguments to delete one JiraUser.
     * @example
     * // Delete one JiraUser
     * const JiraUser = await prisma.jiraUser.delete({
     *   where: {
     *     // ... filter to delete one JiraUser
     *   }
     * })
     * 
     */
    delete<T extends JiraUserDeleteArgs>(args: SelectSubset<T, JiraUserDeleteArgs<ExtArgs>>): Prisma__JiraUserClient<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JiraUser.
     * @param {JiraUserUpdateArgs} args - Arguments to update one JiraUser.
     * @example
     * // Update one JiraUser
     * const jiraUser = await prisma.jiraUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JiraUserUpdateArgs>(args: SelectSubset<T, JiraUserUpdateArgs<ExtArgs>>): Prisma__JiraUserClient<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JiraUsers.
     * @param {JiraUserDeleteManyArgs} args - Arguments to filter JiraUsers to delete.
     * @example
     * // Delete a few JiraUsers
     * const { count } = await prisma.jiraUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JiraUserDeleteManyArgs>(args?: SelectSubset<T, JiraUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JiraUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JiraUsers
     * const jiraUser = await prisma.jiraUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JiraUserUpdateManyArgs>(args: SelectSubset<T, JiraUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JiraUser.
     * @param {JiraUserUpsertArgs} args - Arguments to update or create a JiraUser.
     * @example
     * // Update or create a JiraUser
     * const jiraUser = await prisma.jiraUser.upsert({
     *   create: {
     *     // ... data to create a JiraUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JiraUser we want to update
     *   }
     * })
     */
    upsert<T extends JiraUserUpsertArgs>(args: SelectSubset<T, JiraUserUpsertArgs<ExtArgs>>): Prisma__JiraUserClient<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JiraUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraUserCountArgs} args - Arguments to filter JiraUsers to count.
     * @example
     * // Count the number of JiraUsers
     * const count = await prisma.jiraUser.count({
     *   where: {
     *     // ... the filter for the JiraUsers we want to count
     *   }
     * })
    **/
    count<T extends JiraUserCountArgs>(
      args?: Subset<T, JiraUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JiraUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JiraUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JiraUserAggregateArgs>(args: Subset<T, JiraUserAggregateArgs>): Prisma.PrismaPromise<GetJiraUserAggregateType<T>>

    /**
     * Group by JiraUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JiraUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JiraUserGroupByArgs['orderBy'] }
        : { orderBy?: JiraUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JiraUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJiraUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JiraUser model
   */
  readonly fields: JiraUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JiraUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JiraUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_issues<T extends JiraUser$created_issuesArgs<ExtArgs> = {}>(args?: Subset<T, JiraUser$created_issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assigned_issues<T extends JiraUser$assigned_issuesArgs<ExtArgs> = {}>(args?: Subset<T, JiraUser$assigned_issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    JiraEvent<T extends JiraUser$JiraEventArgs<ExtArgs> = {}>(args?: Subset<T, JiraUser$JiraEventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JiraUser model
   */
  interface JiraUserFieldRefs {
    readonly id: FieldRef<"JiraUser", 'Int'>
    readonly account_id: FieldRef<"JiraUser", 'String'>
    readonly display_name: FieldRef<"JiraUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JiraUser findUnique
   */
  export type JiraUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    /**
     * Filter, which JiraUser to fetch.
     */
    where: JiraUserWhereUniqueInput
  }

  /**
   * JiraUser findUniqueOrThrow
   */
  export type JiraUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    /**
     * Filter, which JiraUser to fetch.
     */
    where: JiraUserWhereUniqueInput
  }

  /**
   * JiraUser findFirst
   */
  export type JiraUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    /**
     * Filter, which JiraUser to fetch.
     */
    where?: JiraUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraUsers to fetch.
     */
    orderBy?: JiraUserOrderByWithRelationInput | JiraUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JiraUsers.
     */
    cursor?: JiraUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JiraUsers.
     */
    distinct?: JiraUserScalarFieldEnum | JiraUserScalarFieldEnum[]
  }

  /**
   * JiraUser findFirstOrThrow
   */
  export type JiraUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    /**
     * Filter, which JiraUser to fetch.
     */
    where?: JiraUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraUsers to fetch.
     */
    orderBy?: JiraUserOrderByWithRelationInput | JiraUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JiraUsers.
     */
    cursor?: JiraUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JiraUsers.
     */
    distinct?: JiraUserScalarFieldEnum | JiraUserScalarFieldEnum[]
  }

  /**
   * JiraUser findMany
   */
  export type JiraUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    /**
     * Filter, which JiraUsers to fetch.
     */
    where?: JiraUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraUsers to fetch.
     */
    orderBy?: JiraUserOrderByWithRelationInput | JiraUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JiraUsers.
     */
    cursor?: JiraUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraUsers.
     */
    skip?: number
    distinct?: JiraUserScalarFieldEnum | JiraUserScalarFieldEnum[]
  }

  /**
   * JiraUser create
   */
  export type JiraUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    /**
     * The data needed to create a JiraUser.
     */
    data: XOR<JiraUserCreateInput, JiraUserUncheckedCreateInput>
  }

  /**
   * JiraUser createMany
   */
  export type JiraUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JiraUsers.
     */
    data: JiraUserCreateManyInput | JiraUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JiraUser update
   */
  export type JiraUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    /**
     * The data needed to update a JiraUser.
     */
    data: XOR<JiraUserUpdateInput, JiraUserUncheckedUpdateInput>
    /**
     * Choose, which JiraUser to update.
     */
    where: JiraUserWhereUniqueInput
  }

  /**
   * JiraUser updateMany
   */
  export type JiraUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JiraUsers.
     */
    data: XOR<JiraUserUpdateManyMutationInput, JiraUserUncheckedUpdateManyInput>
    /**
     * Filter which JiraUsers to update
     */
    where?: JiraUserWhereInput
    /**
     * Limit how many JiraUsers to update.
     */
    limit?: number
  }

  /**
   * JiraUser upsert
   */
  export type JiraUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    /**
     * The filter to search for the JiraUser to update in case it exists.
     */
    where: JiraUserWhereUniqueInput
    /**
     * In case the JiraUser found by the `where` argument doesn't exist, create a new JiraUser with this data.
     */
    create: XOR<JiraUserCreateInput, JiraUserUncheckedCreateInput>
    /**
     * In case the JiraUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JiraUserUpdateInput, JiraUserUncheckedUpdateInput>
  }

  /**
   * JiraUser delete
   */
  export type JiraUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    /**
     * Filter which JiraUser to delete.
     */
    where: JiraUserWhereUniqueInput
  }

  /**
   * JiraUser deleteMany
   */
  export type JiraUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JiraUsers to delete
     */
    where?: JiraUserWhereInput
    /**
     * Limit how many JiraUsers to delete.
     */
    limit?: number
  }

  /**
   * JiraUser.created_issues
   */
  export type JiraUser$created_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    where?: JiraIssueWhereInput
    orderBy?: JiraIssueOrderByWithRelationInput | JiraIssueOrderByWithRelationInput[]
    cursor?: JiraIssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JiraIssueScalarFieldEnum | JiraIssueScalarFieldEnum[]
  }

  /**
   * JiraUser.assigned_issues
   */
  export type JiraUser$assigned_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    where?: JiraIssueWhereInput
    orderBy?: JiraIssueOrderByWithRelationInput | JiraIssueOrderByWithRelationInput[]
    cursor?: JiraIssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JiraIssueScalarFieldEnum | JiraIssueScalarFieldEnum[]
  }

  /**
   * JiraUser.JiraEvent
   */
  export type JiraUser$JiraEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    where?: JiraEventWhereInput
    orderBy?: JiraEventOrderByWithRelationInput | JiraEventOrderByWithRelationInput[]
    cursor?: JiraEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JiraEventScalarFieldEnum | JiraEventScalarFieldEnum[]
  }

  /**
   * JiraUser without action
   */
  export type JiraUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
  }


  /**
   * Model JiraIssue
   */

  export type AggregateJiraIssue = {
    _count: JiraIssueCountAggregateOutputType | null
    _avg: JiraIssueAvgAggregateOutputType | null
    _sum: JiraIssueSumAggregateOutputType | null
    _min: JiraIssueMinAggregateOutputType | null
    _max: JiraIssueMaxAggregateOutputType | null
  }

  export type JiraIssueAvgAggregateOutputType = {
    id: number | null
    timespent: number | null
    timeestimate: number | null
    project_id: number | null
    creator_id: number | null
    assignee_id: number | null
  }

  export type JiraIssueSumAggregateOutputType = {
    id: number | null
    timespent: number | null
    timeestimate: number | null
    project_id: number | null
    creator_id: number | null
    assignee_id: number | null
  }

  export type JiraIssueMinAggregateOutputType = {
    id: number | null
    issue_id: string | null
    summary: string | null
    key: string | null
    status_name: string | null
    status_id: string | null
    timespent: number | null
    timeestimate: number | null
    created_at: Date | null
    updated_at: Date | null
    resolution_date: Date | null
    project_id: number | null
    creator_id: number | null
    assignee_id: number | null
    sprint_name: string | null
    sprint_start: Date | null
    sprint_end: Date | null
  }

  export type JiraIssueMaxAggregateOutputType = {
    id: number | null
    issue_id: string | null
    summary: string | null
    key: string | null
    status_name: string | null
    status_id: string | null
    timespent: number | null
    timeestimate: number | null
    created_at: Date | null
    updated_at: Date | null
    resolution_date: Date | null
    project_id: number | null
    creator_id: number | null
    assignee_id: number | null
    sprint_name: string | null
    sprint_start: Date | null
    sprint_end: Date | null
  }

  export type JiraIssueCountAggregateOutputType = {
    id: number
    issue_id: number
    summary: number
    key: number
    status_name: number
    status_id: number
    timespent: number
    timeestimate: number
    created_at: number
    updated_at: number
    resolution_date: number
    project_id: number
    creator_id: number
    assignee_id: number
    sprint_name: number
    sprint_start: number
    sprint_end: number
    raw_fields: number
    _all: number
  }


  export type JiraIssueAvgAggregateInputType = {
    id?: true
    timespent?: true
    timeestimate?: true
    project_id?: true
    creator_id?: true
    assignee_id?: true
  }

  export type JiraIssueSumAggregateInputType = {
    id?: true
    timespent?: true
    timeestimate?: true
    project_id?: true
    creator_id?: true
    assignee_id?: true
  }

  export type JiraIssueMinAggregateInputType = {
    id?: true
    issue_id?: true
    summary?: true
    key?: true
    status_name?: true
    status_id?: true
    timespent?: true
    timeestimate?: true
    created_at?: true
    updated_at?: true
    resolution_date?: true
    project_id?: true
    creator_id?: true
    assignee_id?: true
    sprint_name?: true
    sprint_start?: true
    sprint_end?: true
  }

  export type JiraIssueMaxAggregateInputType = {
    id?: true
    issue_id?: true
    summary?: true
    key?: true
    status_name?: true
    status_id?: true
    timespent?: true
    timeestimate?: true
    created_at?: true
    updated_at?: true
    resolution_date?: true
    project_id?: true
    creator_id?: true
    assignee_id?: true
    sprint_name?: true
    sprint_start?: true
    sprint_end?: true
  }

  export type JiraIssueCountAggregateInputType = {
    id?: true
    issue_id?: true
    summary?: true
    key?: true
    status_name?: true
    status_id?: true
    timespent?: true
    timeestimate?: true
    created_at?: true
    updated_at?: true
    resolution_date?: true
    project_id?: true
    creator_id?: true
    assignee_id?: true
    sprint_name?: true
    sprint_start?: true
    sprint_end?: true
    raw_fields?: true
    _all?: true
  }

  export type JiraIssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JiraIssue to aggregate.
     */
    where?: JiraIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraIssues to fetch.
     */
    orderBy?: JiraIssueOrderByWithRelationInput | JiraIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JiraIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JiraIssues
    **/
    _count?: true | JiraIssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JiraIssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JiraIssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JiraIssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JiraIssueMaxAggregateInputType
  }

  export type GetJiraIssueAggregateType<T extends JiraIssueAggregateArgs> = {
        [P in keyof T & keyof AggregateJiraIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJiraIssue[P]>
      : GetScalarType<T[P], AggregateJiraIssue[P]>
  }




  export type JiraIssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JiraIssueWhereInput
    orderBy?: JiraIssueOrderByWithAggregationInput | JiraIssueOrderByWithAggregationInput[]
    by: JiraIssueScalarFieldEnum[] | JiraIssueScalarFieldEnum
    having?: JiraIssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JiraIssueCountAggregateInputType | true
    _avg?: JiraIssueAvgAggregateInputType
    _sum?: JiraIssueSumAggregateInputType
    _min?: JiraIssueMinAggregateInputType
    _max?: JiraIssueMaxAggregateInputType
  }

  export type JiraIssueGroupByOutputType = {
    id: number
    issue_id: string
    summary: string | null
    key: string
    status_name: string | null
    status_id: string | null
    timespent: number | null
    timeestimate: number | null
    created_at: Date | null
    updated_at: Date | null
    resolution_date: Date | null
    project_id: number | null
    creator_id: number | null
    assignee_id: number | null
    sprint_name: string | null
    sprint_start: Date | null
    sprint_end: Date | null
    raw_fields: JsonValue | null
    _count: JiraIssueCountAggregateOutputType | null
    _avg: JiraIssueAvgAggregateOutputType | null
    _sum: JiraIssueSumAggregateOutputType | null
    _min: JiraIssueMinAggregateOutputType | null
    _max: JiraIssueMaxAggregateOutputType | null
  }

  type GetJiraIssueGroupByPayload<T extends JiraIssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JiraIssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JiraIssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JiraIssueGroupByOutputType[P]>
            : GetScalarType<T[P], JiraIssueGroupByOutputType[P]>
        }
      >
    >


  export type JiraIssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issue_id?: boolean
    summary?: boolean
    key?: boolean
    status_name?: boolean
    status_id?: boolean
    timespent?: boolean
    timeestimate?: boolean
    created_at?: boolean
    updated_at?: boolean
    resolution_date?: boolean
    project_id?: boolean
    creator_id?: boolean
    assignee_id?: boolean
    sprint_name?: boolean
    sprint_start?: boolean
    sprint_end?: boolean
    raw_fields?: boolean
    project?: boolean | JiraIssue$projectArgs<ExtArgs>
    creator?: boolean | JiraIssue$creatorArgs<ExtArgs>
    assignee?: boolean | JiraIssue$assigneeArgs<ExtArgs>
    events?: boolean | JiraIssue$eventsArgs<ExtArgs>
    _count?: boolean | JiraIssueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jiraIssue"]>



  export type JiraIssueSelectScalar = {
    id?: boolean
    issue_id?: boolean
    summary?: boolean
    key?: boolean
    status_name?: boolean
    status_id?: boolean
    timespent?: boolean
    timeestimate?: boolean
    created_at?: boolean
    updated_at?: boolean
    resolution_date?: boolean
    project_id?: boolean
    creator_id?: boolean
    assignee_id?: boolean
    sprint_name?: boolean
    sprint_start?: boolean
    sprint_end?: boolean
    raw_fields?: boolean
  }

  export type JiraIssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "issue_id" | "summary" | "key" | "status_name" | "status_id" | "timespent" | "timeestimate" | "created_at" | "updated_at" | "resolution_date" | "project_id" | "creator_id" | "assignee_id" | "sprint_name" | "sprint_start" | "sprint_end" | "raw_fields", ExtArgs["result"]["jiraIssue"]>
  export type JiraIssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | JiraIssue$projectArgs<ExtArgs>
    creator?: boolean | JiraIssue$creatorArgs<ExtArgs>
    assignee?: boolean | JiraIssue$assigneeArgs<ExtArgs>
    events?: boolean | JiraIssue$eventsArgs<ExtArgs>
    _count?: boolean | JiraIssueCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JiraIssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JiraIssue"
    objects: {
      project: Prisma.$JiraProjectPayload<ExtArgs> | null
      creator: Prisma.$JiraUserPayload<ExtArgs> | null
      assignee: Prisma.$JiraUserPayload<ExtArgs> | null
      events: Prisma.$JiraEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      issue_id: string
      summary: string | null
      key: string
      status_name: string | null
      status_id: string | null
      timespent: number | null
      timeestimate: number | null
      created_at: Date | null
      updated_at: Date | null
      resolution_date: Date | null
      project_id: number | null
      creator_id: number | null
      assignee_id: number | null
      sprint_name: string | null
      sprint_start: Date | null
      sprint_end: Date | null
      raw_fields: Prisma.JsonValue | null
    }, ExtArgs["result"]["jiraIssue"]>
    composites: {}
  }

  type JiraIssueGetPayload<S extends boolean | null | undefined | JiraIssueDefaultArgs> = $Result.GetResult<Prisma.$JiraIssuePayload, S>

  type JiraIssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JiraIssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JiraIssueCountAggregateInputType | true
    }

  export interface JiraIssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JiraIssue'], meta: { name: 'JiraIssue' } }
    /**
     * Find zero or one JiraIssue that matches the filter.
     * @param {JiraIssueFindUniqueArgs} args - Arguments to find a JiraIssue
     * @example
     * // Get one JiraIssue
     * const jiraIssue = await prisma.jiraIssue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JiraIssueFindUniqueArgs>(args: SelectSubset<T, JiraIssueFindUniqueArgs<ExtArgs>>): Prisma__JiraIssueClient<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JiraIssue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JiraIssueFindUniqueOrThrowArgs} args - Arguments to find a JiraIssue
     * @example
     * // Get one JiraIssue
     * const jiraIssue = await prisma.jiraIssue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JiraIssueFindUniqueOrThrowArgs>(args: SelectSubset<T, JiraIssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JiraIssueClient<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JiraIssue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraIssueFindFirstArgs} args - Arguments to find a JiraIssue
     * @example
     * // Get one JiraIssue
     * const jiraIssue = await prisma.jiraIssue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JiraIssueFindFirstArgs>(args?: SelectSubset<T, JiraIssueFindFirstArgs<ExtArgs>>): Prisma__JiraIssueClient<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JiraIssue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraIssueFindFirstOrThrowArgs} args - Arguments to find a JiraIssue
     * @example
     * // Get one JiraIssue
     * const jiraIssue = await prisma.jiraIssue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JiraIssueFindFirstOrThrowArgs>(args?: SelectSubset<T, JiraIssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__JiraIssueClient<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JiraIssues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraIssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JiraIssues
     * const jiraIssues = await prisma.jiraIssue.findMany()
     * 
     * // Get first 10 JiraIssues
     * const jiraIssues = await prisma.jiraIssue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jiraIssueWithIdOnly = await prisma.jiraIssue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JiraIssueFindManyArgs>(args?: SelectSubset<T, JiraIssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JiraIssue.
     * @param {JiraIssueCreateArgs} args - Arguments to create a JiraIssue.
     * @example
     * // Create one JiraIssue
     * const JiraIssue = await prisma.jiraIssue.create({
     *   data: {
     *     // ... data to create a JiraIssue
     *   }
     * })
     * 
     */
    create<T extends JiraIssueCreateArgs>(args: SelectSubset<T, JiraIssueCreateArgs<ExtArgs>>): Prisma__JiraIssueClient<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JiraIssues.
     * @param {JiraIssueCreateManyArgs} args - Arguments to create many JiraIssues.
     * @example
     * // Create many JiraIssues
     * const jiraIssue = await prisma.jiraIssue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JiraIssueCreateManyArgs>(args?: SelectSubset<T, JiraIssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JiraIssue.
     * @param {JiraIssueDeleteArgs} args - Arguments to delete one JiraIssue.
     * @example
     * // Delete one JiraIssue
     * const JiraIssue = await prisma.jiraIssue.delete({
     *   where: {
     *     // ... filter to delete one JiraIssue
     *   }
     * })
     * 
     */
    delete<T extends JiraIssueDeleteArgs>(args: SelectSubset<T, JiraIssueDeleteArgs<ExtArgs>>): Prisma__JiraIssueClient<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JiraIssue.
     * @param {JiraIssueUpdateArgs} args - Arguments to update one JiraIssue.
     * @example
     * // Update one JiraIssue
     * const jiraIssue = await prisma.jiraIssue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JiraIssueUpdateArgs>(args: SelectSubset<T, JiraIssueUpdateArgs<ExtArgs>>): Prisma__JiraIssueClient<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JiraIssues.
     * @param {JiraIssueDeleteManyArgs} args - Arguments to filter JiraIssues to delete.
     * @example
     * // Delete a few JiraIssues
     * const { count } = await prisma.jiraIssue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JiraIssueDeleteManyArgs>(args?: SelectSubset<T, JiraIssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JiraIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraIssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JiraIssues
     * const jiraIssue = await prisma.jiraIssue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JiraIssueUpdateManyArgs>(args: SelectSubset<T, JiraIssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JiraIssue.
     * @param {JiraIssueUpsertArgs} args - Arguments to update or create a JiraIssue.
     * @example
     * // Update or create a JiraIssue
     * const jiraIssue = await prisma.jiraIssue.upsert({
     *   create: {
     *     // ... data to create a JiraIssue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JiraIssue we want to update
     *   }
     * })
     */
    upsert<T extends JiraIssueUpsertArgs>(args: SelectSubset<T, JiraIssueUpsertArgs<ExtArgs>>): Prisma__JiraIssueClient<$Result.GetResult<Prisma.$JiraIssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JiraIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraIssueCountArgs} args - Arguments to filter JiraIssues to count.
     * @example
     * // Count the number of JiraIssues
     * const count = await prisma.jiraIssue.count({
     *   where: {
     *     // ... the filter for the JiraIssues we want to count
     *   }
     * })
    **/
    count<T extends JiraIssueCountArgs>(
      args?: Subset<T, JiraIssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JiraIssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JiraIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraIssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JiraIssueAggregateArgs>(args: Subset<T, JiraIssueAggregateArgs>): Prisma.PrismaPromise<GetJiraIssueAggregateType<T>>

    /**
     * Group by JiraIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraIssueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JiraIssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JiraIssueGroupByArgs['orderBy'] }
        : { orderBy?: JiraIssueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JiraIssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJiraIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JiraIssue model
   */
  readonly fields: JiraIssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JiraIssue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JiraIssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends JiraIssue$projectArgs<ExtArgs> = {}>(args?: Subset<T, JiraIssue$projectArgs<ExtArgs>>): Prisma__JiraProjectClient<$Result.GetResult<Prisma.$JiraProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creator<T extends JiraIssue$creatorArgs<ExtArgs> = {}>(args?: Subset<T, JiraIssue$creatorArgs<ExtArgs>>): Prisma__JiraUserClient<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignee<T extends JiraIssue$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, JiraIssue$assigneeArgs<ExtArgs>>): Prisma__JiraUserClient<$Result.GetResult<Prisma.$JiraUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    events<T extends JiraIssue$eventsArgs<ExtArgs> = {}>(args?: Subset<T, JiraIssue$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JiraIssue model
   */
  interface JiraIssueFieldRefs {
    readonly id: FieldRef<"JiraIssue", 'Int'>
    readonly issue_id: FieldRef<"JiraIssue", 'String'>
    readonly summary: FieldRef<"JiraIssue", 'String'>
    readonly key: FieldRef<"JiraIssue", 'String'>
    readonly status_name: FieldRef<"JiraIssue", 'String'>
    readonly status_id: FieldRef<"JiraIssue", 'String'>
    readonly timespent: FieldRef<"JiraIssue", 'Int'>
    readonly timeestimate: FieldRef<"JiraIssue", 'Int'>
    readonly created_at: FieldRef<"JiraIssue", 'DateTime'>
    readonly updated_at: FieldRef<"JiraIssue", 'DateTime'>
    readonly resolution_date: FieldRef<"JiraIssue", 'DateTime'>
    readonly project_id: FieldRef<"JiraIssue", 'Int'>
    readonly creator_id: FieldRef<"JiraIssue", 'Int'>
    readonly assignee_id: FieldRef<"JiraIssue", 'Int'>
    readonly sprint_name: FieldRef<"JiraIssue", 'String'>
    readonly sprint_start: FieldRef<"JiraIssue", 'DateTime'>
    readonly sprint_end: FieldRef<"JiraIssue", 'DateTime'>
    readonly raw_fields: FieldRef<"JiraIssue", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * JiraIssue findUnique
   */
  export type JiraIssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    /**
     * Filter, which JiraIssue to fetch.
     */
    where: JiraIssueWhereUniqueInput
  }

  /**
   * JiraIssue findUniqueOrThrow
   */
  export type JiraIssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    /**
     * Filter, which JiraIssue to fetch.
     */
    where: JiraIssueWhereUniqueInput
  }

  /**
   * JiraIssue findFirst
   */
  export type JiraIssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    /**
     * Filter, which JiraIssue to fetch.
     */
    where?: JiraIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraIssues to fetch.
     */
    orderBy?: JiraIssueOrderByWithRelationInput | JiraIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JiraIssues.
     */
    cursor?: JiraIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JiraIssues.
     */
    distinct?: JiraIssueScalarFieldEnum | JiraIssueScalarFieldEnum[]
  }

  /**
   * JiraIssue findFirstOrThrow
   */
  export type JiraIssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    /**
     * Filter, which JiraIssue to fetch.
     */
    where?: JiraIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraIssues to fetch.
     */
    orderBy?: JiraIssueOrderByWithRelationInput | JiraIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JiraIssues.
     */
    cursor?: JiraIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JiraIssues.
     */
    distinct?: JiraIssueScalarFieldEnum | JiraIssueScalarFieldEnum[]
  }

  /**
   * JiraIssue findMany
   */
  export type JiraIssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    /**
     * Filter, which JiraIssues to fetch.
     */
    where?: JiraIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraIssues to fetch.
     */
    orderBy?: JiraIssueOrderByWithRelationInput | JiraIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JiraIssues.
     */
    cursor?: JiraIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraIssues.
     */
    skip?: number
    distinct?: JiraIssueScalarFieldEnum | JiraIssueScalarFieldEnum[]
  }

  /**
   * JiraIssue create
   */
  export type JiraIssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    /**
     * The data needed to create a JiraIssue.
     */
    data: XOR<JiraIssueCreateInput, JiraIssueUncheckedCreateInput>
  }

  /**
   * JiraIssue createMany
   */
  export type JiraIssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JiraIssues.
     */
    data: JiraIssueCreateManyInput | JiraIssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JiraIssue update
   */
  export type JiraIssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    /**
     * The data needed to update a JiraIssue.
     */
    data: XOR<JiraIssueUpdateInput, JiraIssueUncheckedUpdateInput>
    /**
     * Choose, which JiraIssue to update.
     */
    where: JiraIssueWhereUniqueInput
  }

  /**
   * JiraIssue updateMany
   */
  export type JiraIssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JiraIssues.
     */
    data: XOR<JiraIssueUpdateManyMutationInput, JiraIssueUncheckedUpdateManyInput>
    /**
     * Filter which JiraIssues to update
     */
    where?: JiraIssueWhereInput
    /**
     * Limit how many JiraIssues to update.
     */
    limit?: number
  }

  /**
   * JiraIssue upsert
   */
  export type JiraIssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    /**
     * The filter to search for the JiraIssue to update in case it exists.
     */
    where: JiraIssueWhereUniqueInput
    /**
     * In case the JiraIssue found by the `where` argument doesn't exist, create a new JiraIssue with this data.
     */
    create: XOR<JiraIssueCreateInput, JiraIssueUncheckedCreateInput>
    /**
     * In case the JiraIssue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JiraIssueUpdateInput, JiraIssueUncheckedUpdateInput>
  }

  /**
   * JiraIssue delete
   */
  export type JiraIssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
    /**
     * Filter which JiraIssue to delete.
     */
    where: JiraIssueWhereUniqueInput
  }

  /**
   * JiraIssue deleteMany
   */
  export type JiraIssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JiraIssues to delete
     */
    where?: JiraIssueWhereInput
    /**
     * Limit how many JiraIssues to delete.
     */
    limit?: number
  }

  /**
   * JiraIssue.project
   */
  export type JiraIssue$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraProject
     */
    select?: JiraProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraProject
     */
    omit?: JiraProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraProjectInclude<ExtArgs> | null
    where?: JiraProjectWhereInput
  }

  /**
   * JiraIssue.creator
   */
  export type JiraIssue$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    where?: JiraUserWhereInput
  }

  /**
   * JiraIssue.assignee
   */
  export type JiraIssue$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraUser
     */
    select?: JiraUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraUser
     */
    omit?: JiraUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraUserInclude<ExtArgs> | null
    where?: JiraUserWhereInput
  }

  /**
   * JiraIssue.events
   */
  export type JiraIssue$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraEvent
     */
    select?: JiraEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraEvent
     */
    omit?: JiraEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraEventInclude<ExtArgs> | null
    where?: JiraEventWhereInput
    orderBy?: JiraEventOrderByWithRelationInput | JiraEventOrderByWithRelationInput[]
    cursor?: JiraEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JiraEventScalarFieldEnum | JiraEventScalarFieldEnum[]
  }

  /**
   * JiraIssue without action
   */
  export type JiraIssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraIssue
     */
    select?: JiraIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraIssue
     */
    omit?: JiraIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraIssueInclude<ExtArgs> | null
  }


  /**
   * Model JiraPayload
   */

  export type AggregateJiraPayload = {
    _count: JiraPayloadCountAggregateOutputType | null
    _avg: JiraPayloadAvgAggregateOutputType | null
    _sum: JiraPayloadSumAggregateOutputType | null
    _min: JiraPayloadMinAggregateOutputType | null
    _max: JiraPayloadMaxAggregateOutputType | null
  }

  export type JiraPayloadAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type JiraPayloadSumAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type JiraPayloadMinAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type JiraPayloadMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type JiraPayloadCountAggregateOutputType = {
    id: number
    raw_payload: number
    event_id: number
    _all: number
  }


  export type JiraPayloadAvgAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type JiraPayloadSumAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type JiraPayloadMinAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type JiraPayloadMaxAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type JiraPayloadCountAggregateInputType = {
    id?: true
    raw_payload?: true
    event_id?: true
    _all?: true
  }

  export type JiraPayloadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JiraPayload to aggregate.
     */
    where?: JiraPayloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraPayloads to fetch.
     */
    orderBy?: JiraPayloadOrderByWithRelationInput | JiraPayloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JiraPayloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraPayloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraPayloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JiraPayloads
    **/
    _count?: true | JiraPayloadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JiraPayloadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JiraPayloadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JiraPayloadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JiraPayloadMaxAggregateInputType
  }

  export type GetJiraPayloadAggregateType<T extends JiraPayloadAggregateArgs> = {
        [P in keyof T & keyof AggregateJiraPayload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJiraPayload[P]>
      : GetScalarType<T[P], AggregateJiraPayload[P]>
  }




  export type JiraPayloadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JiraPayloadWhereInput
    orderBy?: JiraPayloadOrderByWithAggregationInput | JiraPayloadOrderByWithAggregationInput[]
    by: JiraPayloadScalarFieldEnum[] | JiraPayloadScalarFieldEnum
    having?: JiraPayloadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JiraPayloadCountAggregateInputType | true
    _avg?: JiraPayloadAvgAggregateInputType
    _sum?: JiraPayloadSumAggregateInputType
    _min?: JiraPayloadMinAggregateInputType
    _max?: JiraPayloadMaxAggregateInputType
  }

  export type JiraPayloadGroupByOutputType = {
    id: number
    raw_payload: JsonValue
    event_id: number
    _count: JiraPayloadCountAggregateOutputType | null
    _avg: JiraPayloadAvgAggregateOutputType | null
    _sum: JiraPayloadSumAggregateOutputType | null
    _min: JiraPayloadMinAggregateOutputType | null
    _max: JiraPayloadMaxAggregateOutputType | null
  }

  type GetJiraPayloadGroupByPayload<T extends JiraPayloadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JiraPayloadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JiraPayloadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JiraPayloadGroupByOutputType[P]>
            : GetScalarType<T[P], JiraPayloadGroupByOutputType[P]>
        }
      >
    >


  export type JiraPayloadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raw_payload?: boolean
    event_id?: boolean
    event?: boolean | JiraEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jiraPayload"]>



  export type JiraPayloadSelectScalar = {
    id?: boolean
    raw_payload?: boolean
    event_id?: boolean
  }

  export type JiraPayloadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raw_payload" | "event_id", ExtArgs["result"]["jiraPayload"]>
  export type JiraPayloadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | JiraEventDefaultArgs<ExtArgs>
  }

  export type $JiraPayloadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JiraPayload"
    objects: {
      event: Prisma.$JiraEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      raw_payload: Prisma.JsonValue
      event_id: number
    }, ExtArgs["result"]["jiraPayload"]>
    composites: {}
  }

  type JiraPayloadGetPayload<S extends boolean | null | undefined | JiraPayloadDefaultArgs> = $Result.GetResult<Prisma.$JiraPayloadPayload, S>

  type JiraPayloadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JiraPayloadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JiraPayloadCountAggregateInputType | true
    }

  export interface JiraPayloadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JiraPayload'], meta: { name: 'JiraPayload' } }
    /**
     * Find zero or one JiraPayload that matches the filter.
     * @param {JiraPayloadFindUniqueArgs} args - Arguments to find a JiraPayload
     * @example
     * // Get one JiraPayload
     * const jiraPayload = await prisma.jiraPayload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JiraPayloadFindUniqueArgs>(args: SelectSubset<T, JiraPayloadFindUniqueArgs<ExtArgs>>): Prisma__JiraPayloadClient<$Result.GetResult<Prisma.$JiraPayloadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JiraPayload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JiraPayloadFindUniqueOrThrowArgs} args - Arguments to find a JiraPayload
     * @example
     * // Get one JiraPayload
     * const jiraPayload = await prisma.jiraPayload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JiraPayloadFindUniqueOrThrowArgs>(args: SelectSubset<T, JiraPayloadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JiraPayloadClient<$Result.GetResult<Prisma.$JiraPayloadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JiraPayload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraPayloadFindFirstArgs} args - Arguments to find a JiraPayload
     * @example
     * // Get one JiraPayload
     * const jiraPayload = await prisma.jiraPayload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JiraPayloadFindFirstArgs>(args?: SelectSubset<T, JiraPayloadFindFirstArgs<ExtArgs>>): Prisma__JiraPayloadClient<$Result.GetResult<Prisma.$JiraPayloadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JiraPayload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraPayloadFindFirstOrThrowArgs} args - Arguments to find a JiraPayload
     * @example
     * // Get one JiraPayload
     * const jiraPayload = await prisma.jiraPayload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JiraPayloadFindFirstOrThrowArgs>(args?: SelectSubset<T, JiraPayloadFindFirstOrThrowArgs<ExtArgs>>): Prisma__JiraPayloadClient<$Result.GetResult<Prisma.$JiraPayloadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JiraPayloads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraPayloadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JiraPayloads
     * const jiraPayloads = await prisma.jiraPayload.findMany()
     * 
     * // Get first 10 JiraPayloads
     * const jiraPayloads = await prisma.jiraPayload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jiraPayloadWithIdOnly = await prisma.jiraPayload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JiraPayloadFindManyArgs>(args?: SelectSubset<T, JiraPayloadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JiraPayloadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JiraPayload.
     * @param {JiraPayloadCreateArgs} args - Arguments to create a JiraPayload.
     * @example
     * // Create one JiraPayload
     * const JiraPayload = await prisma.jiraPayload.create({
     *   data: {
     *     // ... data to create a JiraPayload
     *   }
     * })
     * 
     */
    create<T extends JiraPayloadCreateArgs>(args: SelectSubset<T, JiraPayloadCreateArgs<ExtArgs>>): Prisma__JiraPayloadClient<$Result.GetResult<Prisma.$JiraPayloadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JiraPayloads.
     * @param {JiraPayloadCreateManyArgs} args - Arguments to create many JiraPayloads.
     * @example
     * // Create many JiraPayloads
     * const jiraPayload = await prisma.jiraPayload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JiraPayloadCreateManyArgs>(args?: SelectSubset<T, JiraPayloadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JiraPayload.
     * @param {JiraPayloadDeleteArgs} args - Arguments to delete one JiraPayload.
     * @example
     * // Delete one JiraPayload
     * const JiraPayload = await prisma.jiraPayload.delete({
     *   where: {
     *     // ... filter to delete one JiraPayload
     *   }
     * })
     * 
     */
    delete<T extends JiraPayloadDeleteArgs>(args: SelectSubset<T, JiraPayloadDeleteArgs<ExtArgs>>): Prisma__JiraPayloadClient<$Result.GetResult<Prisma.$JiraPayloadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JiraPayload.
     * @param {JiraPayloadUpdateArgs} args - Arguments to update one JiraPayload.
     * @example
     * // Update one JiraPayload
     * const jiraPayload = await prisma.jiraPayload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JiraPayloadUpdateArgs>(args: SelectSubset<T, JiraPayloadUpdateArgs<ExtArgs>>): Prisma__JiraPayloadClient<$Result.GetResult<Prisma.$JiraPayloadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JiraPayloads.
     * @param {JiraPayloadDeleteManyArgs} args - Arguments to filter JiraPayloads to delete.
     * @example
     * // Delete a few JiraPayloads
     * const { count } = await prisma.jiraPayload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JiraPayloadDeleteManyArgs>(args?: SelectSubset<T, JiraPayloadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JiraPayloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraPayloadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JiraPayloads
     * const jiraPayload = await prisma.jiraPayload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JiraPayloadUpdateManyArgs>(args: SelectSubset<T, JiraPayloadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JiraPayload.
     * @param {JiraPayloadUpsertArgs} args - Arguments to update or create a JiraPayload.
     * @example
     * // Update or create a JiraPayload
     * const jiraPayload = await prisma.jiraPayload.upsert({
     *   create: {
     *     // ... data to create a JiraPayload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JiraPayload we want to update
     *   }
     * })
     */
    upsert<T extends JiraPayloadUpsertArgs>(args: SelectSubset<T, JiraPayloadUpsertArgs<ExtArgs>>): Prisma__JiraPayloadClient<$Result.GetResult<Prisma.$JiraPayloadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JiraPayloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraPayloadCountArgs} args - Arguments to filter JiraPayloads to count.
     * @example
     * // Count the number of JiraPayloads
     * const count = await prisma.jiraPayload.count({
     *   where: {
     *     // ... the filter for the JiraPayloads we want to count
     *   }
     * })
    **/
    count<T extends JiraPayloadCountArgs>(
      args?: Subset<T, JiraPayloadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JiraPayloadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JiraPayload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraPayloadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JiraPayloadAggregateArgs>(args: Subset<T, JiraPayloadAggregateArgs>): Prisma.PrismaPromise<GetJiraPayloadAggregateType<T>>

    /**
     * Group by JiraPayload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JiraPayloadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JiraPayloadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JiraPayloadGroupByArgs['orderBy'] }
        : { orderBy?: JiraPayloadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JiraPayloadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJiraPayloadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JiraPayload model
   */
  readonly fields: JiraPayloadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JiraPayload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JiraPayloadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends JiraEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JiraEventDefaultArgs<ExtArgs>>): Prisma__JiraEventClient<$Result.GetResult<Prisma.$JiraEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JiraPayload model
   */
  interface JiraPayloadFieldRefs {
    readonly id: FieldRef<"JiraPayload", 'Int'>
    readonly raw_payload: FieldRef<"JiraPayload", 'Json'>
    readonly event_id: FieldRef<"JiraPayload", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JiraPayload findUnique
   */
  export type JiraPayloadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraPayload
     */
    select?: JiraPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraPayload
     */
    omit?: JiraPayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraPayloadInclude<ExtArgs> | null
    /**
     * Filter, which JiraPayload to fetch.
     */
    where: JiraPayloadWhereUniqueInput
  }

  /**
   * JiraPayload findUniqueOrThrow
   */
  export type JiraPayloadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraPayload
     */
    select?: JiraPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraPayload
     */
    omit?: JiraPayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraPayloadInclude<ExtArgs> | null
    /**
     * Filter, which JiraPayload to fetch.
     */
    where: JiraPayloadWhereUniqueInput
  }

  /**
   * JiraPayload findFirst
   */
  export type JiraPayloadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraPayload
     */
    select?: JiraPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraPayload
     */
    omit?: JiraPayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraPayloadInclude<ExtArgs> | null
    /**
     * Filter, which JiraPayload to fetch.
     */
    where?: JiraPayloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraPayloads to fetch.
     */
    orderBy?: JiraPayloadOrderByWithRelationInput | JiraPayloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JiraPayloads.
     */
    cursor?: JiraPayloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraPayloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraPayloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JiraPayloads.
     */
    distinct?: JiraPayloadScalarFieldEnum | JiraPayloadScalarFieldEnum[]
  }

  /**
   * JiraPayload findFirstOrThrow
   */
  export type JiraPayloadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraPayload
     */
    select?: JiraPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraPayload
     */
    omit?: JiraPayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraPayloadInclude<ExtArgs> | null
    /**
     * Filter, which JiraPayload to fetch.
     */
    where?: JiraPayloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraPayloads to fetch.
     */
    orderBy?: JiraPayloadOrderByWithRelationInput | JiraPayloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JiraPayloads.
     */
    cursor?: JiraPayloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraPayloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraPayloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JiraPayloads.
     */
    distinct?: JiraPayloadScalarFieldEnum | JiraPayloadScalarFieldEnum[]
  }

  /**
   * JiraPayload findMany
   */
  export type JiraPayloadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraPayload
     */
    select?: JiraPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraPayload
     */
    omit?: JiraPayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraPayloadInclude<ExtArgs> | null
    /**
     * Filter, which JiraPayloads to fetch.
     */
    where?: JiraPayloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JiraPayloads to fetch.
     */
    orderBy?: JiraPayloadOrderByWithRelationInput | JiraPayloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JiraPayloads.
     */
    cursor?: JiraPayloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JiraPayloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JiraPayloads.
     */
    skip?: number
    distinct?: JiraPayloadScalarFieldEnum | JiraPayloadScalarFieldEnum[]
  }

  /**
   * JiraPayload create
   */
  export type JiraPayloadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraPayload
     */
    select?: JiraPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraPayload
     */
    omit?: JiraPayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraPayloadInclude<ExtArgs> | null
    /**
     * The data needed to create a JiraPayload.
     */
    data: XOR<JiraPayloadCreateInput, JiraPayloadUncheckedCreateInput>
  }

  /**
   * JiraPayload createMany
   */
  export type JiraPayloadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JiraPayloads.
     */
    data: JiraPayloadCreateManyInput | JiraPayloadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JiraPayload update
   */
  export type JiraPayloadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraPayload
     */
    select?: JiraPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraPayload
     */
    omit?: JiraPayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraPayloadInclude<ExtArgs> | null
    /**
     * The data needed to update a JiraPayload.
     */
    data: XOR<JiraPayloadUpdateInput, JiraPayloadUncheckedUpdateInput>
    /**
     * Choose, which JiraPayload to update.
     */
    where: JiraPayloadWhereUniqueInput
  }

  /**
   * JiraPayload updateMany
   */
  export type JiraPayloadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JiraPayloads.
     */
    data: XOR<JiraPayloadUpdateManyMutationInput, JiraPayloadUncheckedUpdateManyInput>
    /**
     * Filter which JiraPayloads to update
     */
    where?: JiraPayloadWhereInput
    /**
     * Limit how many JiraPayloads to update.
     */
    limit?: number
  }

  /**
   * JiraPayload upsert
   */
  export type JiraPayloadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraPayload
     */
    select?: JiraPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraPayload
     */
    omit?: JiraPayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraPayloadInclude<ExtArgs> | null
    /**
     * The filter to search for the JiraPayload to update in case it exists.
     */
    where: JiraPayloadWhereUniqueInput
    /**
     * In case the JiraPayload found by the `where` argument doesn't exist, create a new JiraPayload with this data.
     */
    create: XOR<JiraPayloadCreateInput, JiraPayloadUncheckedCreateInput>
    /**
     * In case the JiraPayload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JiraPayloadUpdateInput, JiraPayloadUncheckedUpdateInput>
  }

  /**
   * JiraPayload delete
   */
  export type JiraPayloadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraPayload
     */
    select?: JiraPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraPayload
     */
    omit?: JiraPayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraPayloadInclude<ExtArgs> | null
    /**
     * Filter which JiraPayload to delete.
     */
    where: JiraPayloadWhereUniqueInput
  }

  /**
   * JiraPayload deleteMany
   */
  export type JiraPayloadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JiraPayloads to delete
     */
    where?: JiraPayloadWhereInput
    /**
     * Limit how many JiraPayloads to delete.
     */
    limit?: number
  }

  /**
   * JiraPayload without action
   */
  export type JiraPayloadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JiraPayload
     */
    select?: JiraPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JiraPayload
     */
    omit?: JiraPayloadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JiraPayloadInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    repository: 'repository'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    code: 'code',
    project_id: 'project_id'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    author_id: 'author_id',
    reviewer_id: 'reviewer_id',
    ticket_id: 'ticket_id',
    source: 'source',
    branch: 'branch',
    pr_number: 'pr_number',
    additions: 'additions',
    deletions: 'deletions',
    changed_files: 'changed_files',
    event_type: 'event_type',
    date_created: 'date_created'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const PayloadScalarFieldEnum: {
    id: 'id',
    raw_payload: 'raw_payload',
    event_id: 'event_id'
  };

  export type PayloadScalarFieldEnum = (typeof PayloadScalarFieldEnum)[keyof typeof PayloadScalarFieldEnum]


  export const RevisionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    reviewer_id: 'reviewer_id',
    pr_event_id: 'pr_event_id'
  };

  export type RevisionScalarFieldEnum = (typeof RevisionScalarFieldEnum)[keyof typeof RevisionScalarFieldEnum]


  export const JiraEventScalarFieldEnum: {
    id: 'id',
    webhook_event: 'webhook_event',
    issue_event_type: 'issue_event_type',
    issue_id: 'issue_id',
    project_id: 'project_id',
    user_id: 'user_id',
    date_created: 'date_created'
  };

  export type JiraEventScalarFieldEnum = (typeof JiraEventScalarFieldEnum)[keyof typeof JiraEventScalarFieldEnum]


  export const JiraProjectScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    created_at: 'created_at'
  };

  export type JiraProjectScalarFieldEnum = (typeof JiraProjectScalarFieldEnum)[keyof typeof JiraProjectScalarFieldEnum]


  export const JiraUserScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    display_name: 'display_name'
  };

  export type JiraUserScalarFieldEnum = (typeof JiraUserScalarFieldEnum)[keyof typeof JiraUserScalarFieldEnum]


  export const JiraIssueScalarFieldEnum: {
    id: 'id',
    issue_id: 'issue_id',
    summary: 'summary',
    key: 'key',
    status_name: 'status_name',
    status_id: 'status_id',
    timespent: 'timespent',
    timeestimate: 'timeestimate',
    created_at: 'created_at',
    updated_at: 'updated_at',
    resolution_date: 'resolution_date',
    project_id: 'project_id',
    creator_id: 'creator_id',
    assignee_id: 'assignee_id',
    sprint_name: 'sprint_name',
    sprint_start: 'sprint_start',
    sprint_end: 'sprint_end',
    raw_fields: 'raw_fields'
  };

  export type JiraIssueScalarFieldEnum = (typeof JiraIssueScalarFieldEnum)[keyof typeof JiraIssueScalarFieldEnum]


  export const JiraPayloadScalarFieldEnum: {
    id: 'id',
    raw_payload: 'raw_payload',
    event_id: 'event_id'
  };

  export type JiraPayloadScalarFieldEnum = (typeof JiraPayloadScalarFieldEnum)[keyof typeof JiraPayloadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const ProjectOrderByRelevanceFieldEnum: {
    name: 'name',
    repository: 'repository'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TicketOrderByRelevanceFieldEnum: {
    code: 'code'
  };

  export type TicketOrderByRelevanceFieldEnum = (typeof TicketOrderByRelevanceFieldEnum)[keyof typeof TicketOrderByRelevanceFieldEnum]


  export const EventOrderByRelevanceFieldEnum: {
    branch: 'branch'
  };

  export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JiraEventOrderByRelevanceFieldEnum: {
    webhook_event: 'webhook_event',
    issue_event_type: 'issue_event_type'
  };

  export type JiraEventOrderByRelevanceFieldEnum = (typeof JiraEventOrderByRelevanceFieldEnum)[keyof typeof JiraEventOrderByRelevanceFieldEnum]


  export const JiraProjectOrderByRelevanceFieldEnum: {
    key: 'key',
    name: 'name'
  };

  export type JiraProjectOrderByRelevanceFieldEnum = (typeof JiraProjectOrderByRelevanceFieldEnum)[keyof typeof JiraProjectOrderByRelevanceFieldEnum]


  export const JiraUserOrderByRelevanceFieldEnum: {
    account_id: 'account_id',
    display_name: 'display_name'
  };

  export type JiraUserOrderByRelevanceFieldEnum = (typeof JiraUserOrderByRelevanceFieldEnum)[keyof typeof JiraUserOrderByRelevanceFieldEnum]


  export const JiraIssueOrderByRelevanceFieldEnum: {
    issue_id: 'issue_id',
    summary: 'summary',
    key: 'key',
    status_name: 'status_name',
    status_id: 'status_id',
    sprint_name: 'sprint_name'
  };

  export type JiraIssueOrderByRelevanceFieldEnum = (typeof JiraIssueOrderByRelevanceFieldEnum)[keyof typeof JiraIssueOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'SourceType'
   */
  export type EnumSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceType'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    repository?: StringFilter<"Project"> | string
    events?: EventListRelationFilter
    tickets?: TicketListRelationFilter
    contributors?: UserListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
    events?: EventOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    contributors?: UserOrderByRelationAggregateInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    repository?: StringFilter<"Project"> | string
    events?: EventListRelationFilter
    tickets?: TicketListRelationFilter
    contributors?: UserListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    repository?: StringWithAggregatesFilter<"Project"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    projects?: ProjectListRelationFilter
    events?: EventListRelationFilter
    reviewed_events?: EventListRelationFilter
    authoredRevisions?: RevisionListRelationFilter
    reviewedRevisions?: RevisionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    reviewed_events?: EventOrderByRelationAggregateInput
    authoredRevisions?: RevisionOrderByRelationAggregateInput
    reviewedRevisions?: RevisionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    projects?: ProjectListRelationFilter
    events?: EventListRelationFilter
    reviewed_events?: EventListRelationFilter
    authoredRevisions?: RevisionListRelationFilter
    reviewedRevisions?: RevisionListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    code?: StringFilter<"Ticket"> | string
    project_id?: IntFilter<"Ticket"> | number
    events?: EventListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    project_id?: SortOrder
    events?: EventOrderByRelationAggregateInput
    project?: ProjectOrderByWithRelationInput
    _relevance?: TicketOrderByRelevanceInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    project_id?: IntFilter<"Ticket"> | number
    events?: EventListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "code">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    project_id?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    code?: StringWithAggregatesFilter<"Ticket"> | string
    project_id?: IntWithAggregatesFilter<"Ticket"> | number
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    project_id?: IntNullableFilter<"Event"> | number | null
    author_id?: IntNullableFilter<"Event"> | number | null
    reviewer_id?: IntNullableFilter<"Event"> | number | null
    ticket_id?: IntNullableFilter<"Event"> | number | null
    source?: EnumSourceTypeFilter<"Event"> | $Enums.SourceType
    branch?: StringNullableFilter<"Event"> | string | null
    pr_number?: IntNullableFilter<"Event"> | number | null
    additions?: IntNullableFilter<"Event"> | number | null
    deletions?: IntNullableFilter<"Event"> | number | null
    changed_files?: IntNullableFilter<"Event"> | number | null
    event_type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    date_created?: DateTimeFilter<"Event"> | Date | string
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
    payload?: XOR<PayloadNullableScalarRelationFilter, PayloadWhereInput> | null
    revision?: XOR<RevisionNullableScalarRelationFilter, RevisionWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    author_id?: SortOrderInput | SortOrder
    reviewer_id?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    source?: SortOrder
    branch?: SortOrderInput | SortOrder
    pr_number?: SortOrderInput | SortOrder
    additions?: SortOrderInput | SortOrder
    deletions?: SortOrderInput | SortOrder
    changed_files?: SortOrderInput | SortOrder
    event_type?: SortOrder
    date_created?: SortOrder
    project?: ProjectOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
    payload?: PayloadOrderByWithRelationInput
    revision?: RevisionOrderByWithRelationInput
    _relevance?: EventOrderByRelevanceInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    project_id?: IntNullableFilter<"Event"> | number | null
    author_id?: IntNullableFilter<"Event"> | number | null
    reviewer_id?: IntNullableFilter<"Event"> | number | null
    ticket_id?: IntNullableFilter<"Event"> | number | null
    source?: EnumSourceTypeFilter<"Event"> | $Enums.SourceType
    branch?: StringNullableFilter<"Event"> | string | null
    pr_number?: IntNullableFilter<"Event"> | number | null
    additions?: IntNullableFilter<"Event"> | number | null
    deletions?: IntNullableFilter<"Event"> | number | null
    changed_files?: IntNullableFilter<"Event"> | number | null
    event_type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    date_created?: DateTimeFilter<"Event"> | Date | string
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
    payload?: XOR<PayloadNullableScalarRelationFilter, PayloadWhereInput> | null
    revision?: XOR<RevisionNullableScalarRelationFilter, RevisionWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    author_id?: SortOrderInput | SortOrder
    reviewer_id?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    source?: SortOrder
    branch?: SortOrderInput | SortOrder
    pr_number?: SortOrderInput | SortOrder
    additions?: SortOrderInput | SortOrder
    deletions?: SortOrderInput | SortOrder
    changed_files?: SortOrderInput | SortOrder
    event_type?: SortOrder
    date_created?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    project_id?: IntNullableWithAggregatesFilter<"Event"> | number | null
    author_id?: IntNullableWithAggregatesFilter<"Event"> | number | null
    reviewer_id?: IntNullableWithAggregatesFilter<"Event"> | number | null
    ticket_id?: IntNullableWithAggregatesFilter<"Event"> | number | null
    source?: EnumSourceTypeWithAggregatesFilter<"Event"> | $Enums.SourceType
    branch?: StringNullableWithAggregatesFilter<"Event"> | string | null
    pr_number?: IntNullableWithAggregatesFilter<"Event"> | number | null
    additions?: IntNullableWithAggregatesFilter<"Event"> | number | null
    deletions?: IntNullableWithAggregatesFilter<"Event"> | number | null
    changed_files?: IntNullableWithAggregatesFilter<"Event"> | number | null
    event_type?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType
    date_created?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type PayloadWhereInput = {
    AND?: PayloadWhereInput | PayloadWhereInput[]
    OR?: PayloadWhereInput[]
    NOT?: PayloadWhereInput | PayloadWhereInput[]
    id?: IntFilter<"Payload"> | number
    raw_payload?: JsonFilter<"Payload">
    event_id?: IntFilter<"Payload"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type PayloadOrderByWithRelationInput = {
    id?: SortOrder
    raw_payload?: SortOrder
    event_id?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type PayloadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    event_id?: number
    AND?: PayloadWhereInput | PayloadWhereInput[]
    OR?: PayloadWhereInput[]
    NOT?: PayloadWhereInput | PayloadWhereInput[]
    raw_payload?: JsonFilter<"Payload">
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "event_id">

  export type PayloadOrderByWithAggregationInput = {
    id?: SortOrder
    raw_payload?: SortOrder
    event_id?: SortOrder
    _count?: PayloadCountOrderByAggregateInput
    _avg?: PayloadAvgOrderByAggregateInput
    _max?: PayloadMaxOrderByAggregateInput
    _min?: PayloadMinOrderByAggregateInput
    _sum?: PayloadSumOrderByAggregateInput
  }

  export type PayloadScalarWhereWithAggregatesInput = {
    AND?: PayloadScalarWhereWithAggregatesInput | PayloadScalarWhereWithAggregatesInput[]
    OR?: PayloadScalarWhereWithAggregatesInput[]
    NOT?: PayloadScalarWhereWithAggregatesInput | PayloadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payload"> | number
    raw_payload?: JsonWithAggregatesFilter<"Payload">
    event_id?: IntWithAggregatesFilter<"Payload"> | number
  }

  export type RevisionWhereInput = {
    AND?: RevisionWhereInput | RevisionWhereInput[]
    OR?: RevisionWhereInput[]
    NOT?: RevisionWhereInput | RevisionWhereInput[]
    id?: IntFilter<"Revision"> | number
    user_id?: IntFilter<"Revision"> | number
    reviewer_id?: IntNullableFilter<"Revision"> | number | null
    pr_event_id?: IntFilter<"Revision"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    pr_event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type RevisionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrderInput | SortOrder
    pr_event_id?: SortOrder
    user?: UserOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    pr_event?: EventOrderByWithRelationInput
  }

  export type RevisionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pr_event_id?: number
    AND?: RevisionWhereInput | RevisionWhereInput[]
    OR?: RevisionWhereInput[]
    NOT?: RevisionWhereInput | RevisionWhereInput[]
    user_id?: IntFilter<"Revision"> | number
    reviewer_id?: IntNullableFilter<"Revision"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    pr_event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "pr_event_id">

  export type RevisionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrderInput | SortOrder
    pr_event_id?: SortOrder
    _count?: RevisionCountOrderByAggregateInput
    _avg?: RevisionAvgOrderByAggregateInput
    _max?: RevisionMaxOrderByAggregateInput
    _min?: RevisionMinOrderByAggregateInput
    _sum?: RevisionSumOrderByAggregateInput
  }

  export type RevisionScalarWhereWithAggregatesInput = {
    AND?: RevisionScalarWhereWithAggregatesInput | RevisionScalarWhereWithAggregatesInput[]
    OR?: RevisionScalarWhereWithAggregatesInput[]
    NOT?: RevisionScalarWhereWithAggregatesInput | RevisionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Revision"> | number
    user_id?: IntWithAggregatesFilter<"Revision"> | number
    reviewer_id?: IntNullableWithAggregatesFilter<"Revision"> | number | null
    pr_event_id?: IntWithAggregatesFilter<"Revision"> | number
  }

  export type JiraEventWhereInput = {
    AND?: JiraEventWhereInput | JiraEventWhereInput[]
    OR?: JiraEventWhereInput[]
    NOT?: JiraEventWhereInput | JiraEventWhereInput[]
    id?: IntFilter<"JiraEvent"> | number
    webhook_event?: StringFilter<"JiraEvent"> | string
    issue_event_type?: StringFilter<"JiraEvent"> | string
    issue_id?: IntNullableFilter<"JiraEvent"> | number | null
    project_id?: IntNullableFilter<"JiraEvent"> | number | null
    user_id?: IntNullableFilter<"JiraEvent"> | number | null
    date_created?: DateTimeFilter<"JiraEvent"> | Date | string
    issue?: XOR<JiraIssueNullableScalarRelationFilter, JiraIssueWhereInput> | null
    project?: XOR<JiraProjectNullableScalarRelationFilter, JiraProjectWhereInput> | null
    user?: XOR<JiraUserNullableScalarRelationFilter, JiraUserWhereInput> | null
    payload?: XOR<JiraPayloadNullableScalarRelationFilter, JiraPayloadWhereInput> | null
  }

  export type JiraEventOrderByWithRelationInput = {
    id?: SortOrder
    webhook_event?: SortOrder
    issue_event_type?: SortOrder
    issue_id?: SortOrderInput | SortOrder
    project_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    date_created?: SortOrder
    issue?: JiraIssueOrderByWithRelationInput
    project?: JiraProjectOrderByWithRelationInput
    user?: JiraUserOrderByWithRelationInput
    payload?: JiraPayloadOrderByWithRelationInput
    _relevance?: JiraEventOrderByRelevanceInput
  }

  export type JiraEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JiraEventWhereInput | JiraEventWhereInput[]
    OR?: JiraEventWhereInput[]
    NOT?: JiraEventWhereInput | JiraEventWhereInput[]
    webhook_event?: StringFilter<"JiraEvent"> | string
    issue_event_type?: StringFilter<"JiraEvent"> | string
    issue_id?: IntNullableFilter<"JiraEvent"> | number | null
    project_id?: IntNullableFilter<"JiraEvent"> | number | null
    user_id?: IntNullableFilter<"JiraEvent"> | number | null
    date_created?: DateTimeFilter<"JiraEvent"> | Date | string
    issue?: XOR<JiraIssueNullableScalarRelationFilter, JiraIssueWhereInput> | null
    project?: XOR<JiraProjectNullableScalarRelationFilter, JiraProjectWhereInput> | null
    user?: XOR<JiraUserNullableScalarRelationFilter, JiraUserWhereInput> | null
    payload?: XOR<JiraPayloadNullableScalarRelationFilter, JiraPayloadWhereInput> | null
  }, "id">

  export type JiraEventOrderByWithAggregationInput = {
    id?: SortOrder
    webhook_event?: SortOrder
    issue_event_type?: SortOrder
    issue_id?: SortOrderInput | SortOrder
    project_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    date_created?: SortOrder
    _count?: JiraEventCountOrderByAggregateInput
    _avg?: JiraEventAvgOrderByAggregateInput
    _max?: JiraEventMaxOrderByAggregateInput
    _min?: JiraEventMinOrderByAggregateInput
    _sum?: JiraEventSumOrderByAggregateInput
  }

  export type JiraEventScalarWhereWithAggregatesInput = {
    AND?: JiraEventScalarWhereWithAggregatesInput | JiraEventScalarWhereWithAggregatesInput[]
    OR?: JiraEventScalarWhereWithAggregatesInput[]
    NOT?: JiraEventScalarWhereWithAggregatesInput | JiraEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JiraEvent"> | number
    webhook_event?: StringWithAggregatesFilter<"JiraEvent"> | string
    issue_event_type?: StringWithAggregatesFilter<"JiraEvent"> | string
    issue_id?: IntNullableWithAggregatesFilter<"JiraEvent"> | number | null
    project_id?: IntNullableWithAggregatesFilter<"JiraEvent"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"JiraEvent"> | number | null
    date_created?: DateTimeWithAggregatesFilter<"JiraEvent"> | Date | string
  }

  export type JiraProjectWhereInput = {
    AND?: JiraProjectWhereInput | JiraProjectWhereInput[]
    OR?: JiraProjectWhereInput[]
    NOT?: JiraProjectWhereInput | JiraProjectWhereInput[]
    id?: IntFilter<"JiraProject"> | number
    key?: StringFilter<"JiraProject"> | string
    name?: StringFilter<"JiraProject"> | string
    created_at?: DateTimeFilter<"JiraProject"> | Date | string
    issues?: JiraIssueListRelationFilter
    JiraEvent?: JiraEventListRelationFilter
  }

  export type JiraProjectOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    issues?: JiraIssueOrderByRelationAggregateInput
    JiraEvent?: JiraEventOrderByRelationAggregateInput
    _relevance?: JiraProjectOrderByRelevanceInput
  }

  export type JiraProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: JiraProjectWhereInput | JiraProjectWhereInput[]
    OR?: JiraProjectWhereInput[]
    NOT?: JiraProjectWhereInput | JiraProjectWhereInput[]
    name?: StringFilter<"JiraProject"> | string
    created_at?: DateTimeFilter<"JiraProject"> | Date | string
    issues?: JiraIssueListRelationFilter
    JiraEvent?: JiraEventListRelationFilter
  }, "id" | "key">

  export type JiraProjectOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: JiraProjectCountOrderByAggregateInput
    _avg?: JiraProjectAvgOrderByAggregateInput
    _max?: JiraProjectMaxOrderByAggregateInput
    _min?: JiraProjectMinOrderByAggregateInput
    _sum?: JiraProjectSumOrderByAggregateInput
  }

  export type JiraProjectScalarWhereWithAggregatesInput = {
    AND?: JiraProjectScalarWhereWithAggregatesInput | JiraProjectScalarWhereWithAggregatesInput[]
    OR?: JiraProjectScalarWhereWithAggregatesInput[]
    NOT?: JiraProjectScalarWhereWithAggregatesInput | JiraProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JiraProject"> | number
    key?: StringWithAggregatesFilter<"JiraProject"> | string
    name?: StringWithAggregatesFilter<"JiraProject"> | string
    created_at?: DateTimeWithAggregatesFilter<"JiraProject"> | Date | string
  }

  export type JiraUserWhereInput = {
    AND?: JiraUserWhereInput | JiraUserWhereInput[]
    OR?: JiraUserWhereInput[]
    NOT?: JiraUserWhereInput | JiraUserWhereInput[]
    id?: IntFilter<"JiraUser"> | number
    account_id?: StringFilter<"JiraUser"> | string
    display_name?: StringNullableFilter<"JiraUser"> | string | null
    created_issues?: JiraIssueListRelationFilter
    assigned_issues?: JiraIssueListRelationFilter
    JiraEvent?: JiraEventListRelationFilter
  }

  export type JiraUserOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    display_name?: SortOrderInput | SortOrder
    created_issues?: JiraIssueOrderByRelationAggregateInput
    assigned_issues?: JiraIssueOrderByRelationAggregateInput
    JiraEvent?: JiraEventOrderByRelationAggregateInput
    _relevance?: JiraUserOrderByRelevanceInput
  }

  export type JiraUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    account_id?: string
    AND?: JiraUserWhereInput | JiraUserWhereInput[]
    OR?: JiraUserWhereInput[]
    NOT?: JiraUserWhereInput | JiraUserWhereInput[]
    display_name?: StringNullableFilter<"JiraUser"> | string | null
    created_issues?: JiraIssueListRelationFilter
    assigned_issues?: JiraIssueListRelationFilter
    JiraEvent?: JiraEventListRelationFilter
  }, "id" | "account_id">

  export type JiraUserOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    display_name?: SortOrderInput | SortOrder
    _count?: JiraUserCountOrderByAggregateInput
    _avg?: JiraUserAvgOrderByAggregateInput
    _max?: JiraUserMaxOrderByAggregateInput
    _min?: JiraUserMinOrderByAggregateInput
    _sum?: JiraUserSumOrderByAggregateInput
  }

  export type JiraUserScalarWhereWithAggregatesInput = {
    AND?: JiraUserScalarWhereWithAggregatesInput | JiraUserScalarWhereWithAggregatesInput[]
    OR?: JiraUserScalarWhereWithAggregatesInput[]
    NOT?: JiraUserScalarWhereWithAggregatesInput | JiraUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JiraUser"> | number
    account_id?: StringWithAggregatesFilter<"JiraUser"> | string
    display_name?: StringNullableWithAggregatesFilter<"JiraUser"> | string | null
  }

  export type JiraIssueWhereInput = {
    AND?: JiraIssueWhereInput | JiraIssueWhereInput[]
    OR?: JiraIssueWhereInput[]
    NOT?: JiraIssueWhereInput | JiraIssueWhereInput[]
    id?: IntFilter<"JiraIssue"> | number
    issue_id?: StringFilter<"JiraIssue"> | string
    summary?: StringNullableFilter<"JiraIssue"> | string | null
    key?: StringFilter<"JiraIssue"> | string
    status_name?: StringNullableFilter<"JiraIssue"> | string | null
    status_id?: StringNullableFilter<"JiraIssue"> | string | null
    timespent?: IntNullableFilter<"JiraIssue"> | number | null
    timeestimate?: IntNullableFilter<"JiraIssue"> | number | null
    created_at?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    resolution_date?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    project_id?: IntNullableFilter<"JiraIssue"> | number | null
    creator_id?: IntNullableFilter<"JiraIssue"> | number | null
    assignee_id?: IntNullableFilter<"JiraIssue"> | number | null
    sprint_name?: StringNullableFilter<"JiraIssue"> | string | null
    sprint_start?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    sprint_end?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    raw_fields?: JsonNullableFilter<"JiraIssue">
    project?: XOR<JiraProjectNullableScalarRelationFilter, JiraProjectWhereInput> | null
    creator?: XOR<JiraUserNullableScalarRelationFilter, JiraUserWhereInput> | null
    assignee?: XOR<JiraUserNullableScalarRelationFilter, JiraUserWhereInput> | null
    events?: JiraEventListRelationFilter
  }

  export type JiraIssueOrderByWithRelationInput = {
    id?: SortOrder
    issue_id?: SortOrder
    summary?: SortOrderInput | SortOrder
    key?: SortOrder
    status_name?: SortOrderInput | SortOrder
    status_id?: SortOrderInput | SortOrder
    timespent?: SortOrderInput | SortOrder
    timeestimate?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    resolution_date?: SortOrderInput | SortOrder
    project_id?: SortOrderInput | SortOrder
    creator_id?: SortOrderInput | SortOrder
    assignee_id?: SortOrderInput | SortOrder
    sprint_name?: SortOrderInput | SortOrder
    sprint_start?: SortOrderInput | SortOrder
    sprint_end?: SortOrderInput | SortOrder
    raw_fields?: SortOrderInput | SortOrder
    project?: JiraProjectOrderByWithRelationInput
    creator?: JiraUserOrderByWithRelationInput
    assignee?: JiraUserOrderByWithRelationInput
    events?: JiraEventOrderByRelationAggregateInput
    _relevance?: JiraIssueOrderByRelevanceInput
  }

  export type JiraIssueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    issue_id?: string
    AND?: JiraIssueWhereInput | JiraIssueWhereInput[]
    OR?: JiraIssueWhereInput[]
    NOT?: JiraIssueWhereInput | JiraIssueWhereInput[]
    summary?: StringNullableFilter<"JiraIssue"> | string | null
    key?: StringFilter<"JiraIssue"> | string
    status_name?: StringNullableFilter<"JiraIssue"> | string | null
    status_id?: StringNullableFilter<"JiraIssue"> | string | null
    timespent?: IntNullableFilter<"JiraIssue"> | number | null
    timeestimate?: IntNullableFilter<"JiraIssue"> | number | null
    created_at?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    resolution_date?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    project_id?: IntNullableFilter<"JiraIssue"> | number | null
    creator_id?: IntNullableFilter<"JiraIssue"> | number | null
    assignee_id?: IntNullableFilter<"JiraIssue"> | number | null
    sprint_name?: StringNullableFilter<"JiraIssue"> | string | null
    sprint_start?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    sprint_end?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    raw_fields?: JsonNullableFilter<"JiraIssue">
    project?: XOR<JiraProjectNullableScalarRelationFilter, JiraProjectWhereInput> | null
    creator?: XOR<JiraUserNullableScalarRelationFilter, JiraUserWhereInput> | null
    assignee?: XOR<JiraUserNullableScalarRelationFilter, JiraUserWhereInput> | null
    events?: JiraEventListRelationFilter
  }, "id" | "issue_id">

  export type JiraIssueOrderByWithAggregationInput = {
    id?: SortOrder
    issue_id?: SortOrder
    summary?: SortOrderInput | SortOrder
    key?: SortOrder
    status_name?: SortOrderInput | SortOrder
    status_id?: SortOrderInput | SortOrder
    timespent?: SortOrderInput | SortOrder
    timeestimate?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    resolution_date?: SortOrderInput | SortOrder
    project_id?: SortOrderInput | SortOrder
    creator_id?: SortOrderInput | SortOrder
    assignee_id?: SortOrderInput | SortOrder
    sprint_name?: SortOrderInput | SortOrder
    sprint_start?: SortOrderInput | SortOrder
    sprint_end?: SortOrderInput | SortOrder
    raw_fields?: SortOrderInput | SortOrder
    _count?: JiraIssueCountOrderByAggregateInput
    _avg?: JiraIssueAvgOrderByAggregateInput
    _max?: JiraIssueMaxOrderByAggregateInput
    _min?: JiraIssueMinOrderByAggregateInput
    _sum?: JiraIssueSumOrderByAggregateInput
  }

  export type JiraIssueScalarWhereWithAggregatesInput = {
    AND?: JiraIssueScalarWhereWithAggregatesInput | JiraIssueScalarWhereWithAggregatesInput[]
    OR?: JiraIssueScalarWhereWithAggregatesInput[]
    NOT?: JiraIssueScalarWhereWithAggregatesInput | JiraIssueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JiraIssue"> | number
    issue_id?: StringWithAggregatesFilter<"JiraIssue"> | string
    summary?: StringNullableWithAggregatesFilter<"JiraIssue"> | string | null
    key?: StringWithAggregatesFilter<"JiraIssue"> | string
    status_name?: StringNullableWithAggregatesFilter<"JiraIssue"> | string | null
    status_id?: StringNullableWithAggregatesFilter<"JiraIssue"> | string | null
    timespent?: IntNullableWithAggregatesFilter<"JiraIssue"> | number | null
    timeestimate?: IntNullableWithAggregatesFilter<"JiraIssue"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"JiraIssue"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"JiraIssue"> | Date | string | null
    resolution_date?: DateTimeNullableWithAggregatesFilter<"JiraIssue"> | Date | string | null
    project_id?: IntNullableWithAggregatesFilter<"JiraIssue"> | number | null
    creator_id?: IntNullableWithAggregatesFilter<"JiraIssue"> | number | null
    assignee_id?: IntNullableWithAggregatesFilter<"JiraIssue"> | number | null
    sprint_name?: StringNullableWithAggregatesFilter<"JiraIssue"> | string | null
    sprint_start?: DateTimeNullableWithAggregatesFilter<"JiraIssue"> | Date | string | null
    sprint_end?: DateTimeNullableWithAggregatesFilter<"JiraIssue"> | Date | string | null
    raw_fields?: JsonNullableWithAggregatesFilter<"JiraIssue">
  }

  export type JiraPayloadWhereInput = {
    AND?: JiraPayloadWhereInput | JiraPayloadWhereInput[]
    OR?: JiraPayloadWhereInput[]
    NOT?: JiraPayloadWhereInput | JiraPayloadWhereInput[]
    id?: IntFilter<"JiraPayload"> | number
    raw_payload?: JsonFilter<"JiraPayload">
    event_id?: IntFilter<"JiraPayload"> | number
    event?: XOR<JiraEventScalarRelationFilter, JiraEventWhereInput>
  }

  export type JiraPayloadOrderByWithRelationInput = {
    id?: SortOrder
    raw_payload?: SortOrder
    event_id?: SortOrder
    event?: JiraEventOrderByWithRelationInput
  }

  export type JiraPayloadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    event_id?: number
    AND?: JiraPayloadWhereInput | JiraPayloadWhereInput[]
    OR?: JiraPayloadWhereInput[]
    NOT?: JiraPayloadWhereInput | JiraPayloadWhereInput[]
    raw_payload?: JsonFilter<"JiraPayload">
    event?: XOR<JiraEventScalarRelationFilter, JiraEventWhereInput>
  }, "id" | "event_id">

  export type JiraPayloadOrderByWithAggregationInput = {
    id?: SortOrder
    raw_payload?: SortOrder
    event_id?: SortOrder
    _count?: JiraPayloadCountOrderByAggregateInput
    _avg?: JiraPayloadAvgOrderByAggregateInput
    _max?: JiraPayloadMaxOrderByAggregateInput
    _min?: JiraPayloadMinOrderByAggregateInput
    _sum?: JiraPayloadSumOrderByAggregateInput
  }

  export type JiraPayloadScalarWhereWithAggregatesInput = {
    AND?: JiraPayloadScalarWhereWithAggregatesInput | JiraPayloadScalarWhereWithAggregatesInput[]
    OR?: JiraPayloadScalarWhereWithAggregatesInput[]
    NOT?: JiraPayloadScalarWhereWithAggregatesInput | JiraPayloadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JiraPayload"> | number
    raw_payload?: JsonWithAggregatesFilter<"JiraPayload">
    event_id?: IntWithAggregatesFilter<"JiraPayload"> | number
  }

  export type ProjectCreateInput = {
    name: string
    repository: string
    events?: EventCreateNestedManyWithoutProjectInput
    tickets?: TicketCreateNestedManyWithoutProjectInput
    contributors?: UserCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    repository: string
    events?: EventUncheckedCreateNestedManyWithoutProjectInput
    tickets?: TicketUncheckedCreateNestedManyWithoutProjectInput
    contributors?: UserUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutProjectNestedInput
    tickets?: TicketUpdateManyWithoutProjectNestedInput
    contributors?: UserUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutProjectNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutProjectNestedInput
    contributors?: UserUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    repository: string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectCreateNestedManyWithoutContributorsInput
    events?: EventCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutContributorsInput
    events?: EventUncheckedCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventUncheckedCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionUncheckedCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutContributorsNestedInput
    events?: EventUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutContributorsNestedInput
    events?: EventUncheckedUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventUncheckedUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionUncheckedUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCreateInput = {
    code: string
    events?: EventCreateNestedManyWithoutTicketInput
    project: ProjectCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    code: string
    project_id: number
    events?: EventUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutTicketNestedInput
    project?: ProjectUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    project_id?: IntFieldUpdateOperationsInput | number
    events?: EventUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    code: string
    project_id: number
  }

  export type TicketUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    project_id?: IntFieldUpdateOperationsInput | number
  }

  export type EventCreateInput = {
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    project?: ProjectCreateNestedOneWithoutEventsInput
    author?: UserCreateNestedOneWithoutEventsInput
    reviewer?: UserCreateNestedOneWithoutReviewed_eventsInput
    ticket?: TicketCreateNestedOneWithoutEventsInput
    payload?: PayloadCreateNestedOneWithoutEventInput
    revision?: RevisionCreateNestedOneWithoutPr_eventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    payload?: PayloadUncheckedCreateNestedOneWithoutEventInput
    revision?: RevisionUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventUpdateInput = {
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutEventsNestedInput
    author?: UserUpdateOneWithoutEventsNestedInput
    reviewer?: UserUpdateOneWithoutReviewed_eventsNestedInput
    ticket?: TicketUpdateOneWithoutEventsNestedInput
    payload?: PayloadUpdateOneWithoutEventNestedInput
    revision?: RevisionUpdateOneWithoutPr_eventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadUncheckedUpdateOneWithoutEventNestedInput
    revision?: RevisionUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayloadCreateInput = {
    raw_payload: JsonNullValueInput | InputJsonValue
    event: EventCreateNestedOneWithoutPayloadInput
  }

  export type PayloadUncheckedCreateInput = {
    id?: number
    raw_payload: JsonNullValueInput | InputJsonValue
    event_id: number
  }

  export type PayloadUpdateInput = {
    raw_payload?: JsonNullValueInput | InputJsonValue
    event?: EventUpdateOneRequiredWithoutPayloadNestedInput
  }

  export type PayloadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    raw_payload?: JsonNullValueInput | InputJsonValue
    event_id?: IntFieldUpdateOperationsInput | number
  }

  export type PayloadCreateManyInput = {
    id?: number
    raw_payload: JsonNullValueInput | InputJsonValue
    event_id: number
  }

  export type PayloadUpdateManyMutationInput = {
    raw_payload?: JsonNullValueInput | InputJsonValue
  }

  export type PayloadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    raw_payload?: JsonNullValueInput | InputJsonValue
    event_id?: IntFieldUpdateOperationsInput | number
  }

  export type RevisionCreateInput = {
    user: UserCreateNestedOneWithoutAuthoredRevisionsInput
    reviewer?: UserCreateNestedOneWithoutReviewedRevisionsInput
    pr_event: EventCreateNestedOneWithoutRevisionInput
  }

  export type RevisionUncheckedCreateInput = {
    id?: number
    user_id: number
    reviewer_id?: number | null
    pr_event_id: number
  }

  export type RevisionUpdateInput = {
    user?: UserUpdateOneRequiredWithoutAuthoredRevisionsNestedInput
    reviewer?: UserUpdateOneWithoutReviewedRevisionsNestedInput
    pr_event?: EventUpdateOneRequiredWithoutRevisionNestedInput
  }

  export type RevisionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type RevisionCreateManyInput = {
    id?: number
    user_id: number
    reviewer_id?: number | null
    pr_event_id: number
  }

  export type RevisionUpdateManyMutationInput = {

  }

  export type RevisionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type JiraEventCreateInput = {
    webhook_event: string
    issue_event_type: string
    date_created?: Date | string
    issue?: JiraIssueCreateNestedOneWithoutEventsInput
    project?: JiraProjectCreateNestedOneWithoutJiraEventInput
    user?: JiraUserCreateNestedOneWithoutJiraEventInput
    payload?: JiraPayloadCreateNestedOneWithoutEventInput
  }

  export type JiraEventUncheckedCreateInput = {
    id?: number
    webhook_event: string
    issue_event_type: string
    issue_id?: number | null
    project_id?: number | null
    user_id?: number | null
    date_created?: Date | string
    payload?: JiraPayloadUncheckedCreateNestedOneWithoutEventInput
  }

  export type JiraEventUpdateInput = {
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: JiraIssueUpdateOneWithoutEventsNestedInput
    project?: JiraProjectUpdateOneWithoutJiraEventNestedInput
    user?: JiraUserUpdateOneWithoutJiraEventNestedInput
    payload?: JiraPayloadUpdateOneWithoutEventNestedInput
  }

  export type JiraEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    issue_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JiraPayloadUncheckedUpdateOneWithoutEventNestedInput
  }

  export type JiraEventCreateManyInput = {
    id?: number
    webhook_event: string
    issue_event_type: string
    issue_id?: number | null
    project_id?: number | null
    user_id?: number | null
    date_created?: Date | string
  }

  export type JiraEventUpdateManyMutationInput = {
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JiraEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    issue_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JiraProjectCreateInput = {
    key: string
    name: string
    created_at?: Date | string
    issues?: JiraIssueCreateNestedManyWithoutProjectInput
    JiraEvent?: JiraEventCreateNestedManyWithoutProjectInput
  }

  export type JiraProjectUncheckedCreateInput = {
    id?: number
    key: string
    name: string
    created_at?: Date | string
    issues?: JiraIssueUncheckedCreateNestedManyWithoutProjectInput
    JiraEvent?: JiraEventUncheckedCreateNestedManyWithoutProjectInput
  }

  export type JiraProjectUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: JiraIssueUpdateManyWithoutProjectNestedInput
    JiraEvent?: JiraEventUpdateManyWithoutProjectNestedInput
  }

  export type JiraProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: JiraIssueUncheckedUpdateManyWithoutProjectNestedInput
    JiraEvent?: JiraEventUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type JiraProjectCreateManyInput = {
    id?: number
    key: string
    name: string
    created_at?: Date | string
  }

  export type JiraProjectUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JiraProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JiraUserCreateInput = {
    account_id: string
    display_name?: string | null
    created_issues?: JiraIssueCreateNestedManyWithoutCreatorInput
    assigned_issues?: JiraIssueCreateNestedManyWithoutAssigneeInput
    JiraEvent?: JiraEventCreateNestedManyWithoutUserInput
  }

  export type JiraUserUncheckedCreateInput = {
    id?: number
    account_id: string
    display_name?: string | null
    created_issues?: JiraIssueUncheckedCreateNestedManyWithoutCreatorInput
    assigned_issues?: JiraIssueUncheckedCreateNestedManyWithoutAssigneeInput
    JiraEvent?: JiraEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type JiraUserUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_issues?: JiraIssueUpdateManyWithoutCreatorNestedInput
    assigned_issues?: JiraIssueUpdateManyWithoutAssigneeNestedInput
    JiraEvent?: JiraEventUpdateManyWithoutUserNestedInput
  }

  export type JiraUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_issues?: JiraIssueUncheckedUpdateManyWithoutCreatorNestedInput
    assigned_issues?: JiraIssueUncheckedUpdateManyWithoutAssigneeNestedInput
    JiraEvent?: JiraEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JiraUserCreateManyInput = {
    id?: number
    account_id: string
    display_name?: string | null
  }

  export type JiraUserUpdateManyMutationInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JiraUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JiraIssueCreateInput = {
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    project?: JiraProjectCreateNestedOneWithoutIssuesInput
    creator?: JiraUserCreateNestedOneWithoutCreated_issuesInput
    assignee?: JiraUserCreateNestedOneWithoutAssigned_issuesInput
    events?: JiraEventCreateNestedManyWithoutIssueInput
  }

  export type JiraIssueUncheckedCreateInput = {
    id?: number
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    project_id?: number | null
    creator_id?: number | null
    assignee_id?: number | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    events?: JiraEventUncheckedCreateNestedManyWithoutIssueInput
  }

  export type JiraIssueUpdateInput = {
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    project?: JiraProjectUpdateOneWithoutIssuesNestedInput
    creator?: JiraUserUpdateOneWithoutCreated_issuesNestedInput
    assignee?: JiraUserUpdateOneWithoutAssigned_issuesNestedInput
    events?: JiraEventUpdateManyWithoutIssueNestedInput
  }

  export type JiraIssueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    assignee_id?: NullableIntFieldUpdateOperationsInput | number | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    events?: JiraEventUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type JiraIssueCreateManyInput = {
    id?: number
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    project_id?: number | null
    creator_id?: number | null
    assignee_id?: number | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JiraIssueUpdateManyMutationInput = {
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JiraIssueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    assignee_id?: NullableIntFieldUpdateOperationsInput | number | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JiraPayloadCreateInput = {
    raw_payload: JsonNullValueInput | InputJsonValue
    event: JiraEventCreateNestedOneWithoutPayloadInput
  }

  export type JiraPayloadUncheckedCreateInput = {
    id?: number
    raw_payload: JsonNullValueInput | InputJsonValue
    event_id: number
  }

  export type JiraPayloadUpdateInput = {
    raw_payload?: JsonNullValueInput | InputJsonValue
    event?: JiraEventUpdateOneRequiredWithoutPayloadNestedInput
  }

  export type JiraPayloadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    raw_payload?: JsonNullValueInput | InputJsonValue
    event_id?: IntFieldUpdateOperationsInput | number
  }

  export type JiraPayloadCreateManyInput = {
    id?: number
    raw_payload: JsonNullValueInput | InputJsonValue
    event_id: number
  }

  export type JiraPayloadUpdateManyMutationInput = {
    raw_payload?: JsonNullValueInput | InputJsonValue
  }

  export type JiraPayloadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    raw_payload?: JsonNullValueInput | InputJsonValue
    event_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type RevisionListRelationFilter = {
    every?: RevisionWhereInput
    some?: RevisionWhereInput
    none?: RevisionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RevisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TicketOrderByRelevanceInput = {
    fields: TicketOrderByRelevanceFieldEnum | TicketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    project_id?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    project_id?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    project_id?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[]
    notIn?: $Enums.SourceType[]
    not?: NestedEnumSourceTypeFilter<$PrismaModel> | $Enums.SourceType
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TicketNullableScalarRelationFilter = {
    is?: TicketWhereInput | null
    isNot?: TicketWhereInput | null
  }

  export type PayloadNullableScalarRelationFilter = {
    is?: PayloadWhereInput | null
    isNot?: PayloadWhereInput | null
  }

  export type RevisionNullableScalarRelationFilter = {
    is?: RevisionWhereInput | null
    isNot?: RevisionWhereInput | null
  }

  export type EventOrderByRelevanceInput = {
    fields: EventOrderByRelevanceFieldEnum | EventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    author_id?: SortOrder
    reviewer_id?: SortOrder
    ticket_id?: SortOrder
    source?: SortOrder
    branch?: SortOrder
    pr_number?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changed_files?: SortOrder
    event_type?: SortOrder
    date_created?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    author_id?: SortOrder
    reviewer_id?: SortOrder
    ticket_id?: SortOrder
    pr_number?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changed_files?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    author_id?: SortOrder
    reviewer_id?: SortOrder
    ticket_id?: SortOrder
    source?: SortOrder
    branch?: SortOrder
    pr_number?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changed_files?: SortOrder
    event_type?: SortOrder
    date_created?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    author_id?: SortOrder
    reviewer_id?: SortOrder
    ticket_id?: SortOrder
    source?: SortOrder
    branch?: SortOrder
    pr_number?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changed_files?: SortOrder
    event_type?: SortOrder
    date_created?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    author_id?: SortOrder
    reviewer_id?: SortOrder
    ticket_id?: SortOrder
    pr_number?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    changed_files?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[]
    notIn?: $Enums.SourceType[]
    not?: NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeFilter<$PrismaModel>
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type PayloadCountOrderByAggregateInput = {
    id?: SortOrder
    raw_payload?: SortOrder
    event_id?: SortOrder
  }

  export type PayloadAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type PayloadMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type PayloadMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type PayloadSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RevisionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrder
    pr_event_id?: SortOrder
  }

  export type RevisionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrder
    pr_event_id?: SortOrder
  }

  export type RevisionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrder
    pr_event_id?: SortOrder
  }

  export type RevisionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrder
    pr_event_id?: SortOrder
  }

  export type RevisionSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reviewer_id?: SortOrder
    pr_event_id?: SortOrder
  }

  export type JiraIssueNullableScalarRelationFilter = {
    is?: JiraIssueWhereInput | null
    isNot?: JiraIssueWhereInput | null
  }

  export type JiraProjectNullableScalarRelationFilter = {
    is?: JiraProjectWhereInput | null
    isNot?: JiraProjectWhereInput | null
  }

  export type JiraUserNullableScalarRelationFilter = {
    is?: JiraUserWhereInput | null
    isNot?: JiraUserWhereInput | null
  }

  export type JiraPayloadNullableScalarRelationFilter = {
    is?: JiraPayloadWhereInput | null
    isNot?: JiraPayloadWhereInput | null
  }

  export type JiraEventOrderByRelevanceInput = {
    fields: JiraEventOrderByRelevanceFieldEnum | JiraEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JiraEventCountOrderByAggregateInput = {
    id?: SortOrder
    webhook_event?: SortOrder
    issue_event_type?: SortOrder
    issue_id?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    date_created?: SortOrder
  }

  export type JiraEventAvgOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
  }

  export type JiraEventMaxOrderByAggregateInput = {
    id?: SortOrder
    webhook_event?: SortOrder
    issue_event_type?: SortOrder
    issue_id?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    date_created?: SortOrder
  }

  export type JiraEventMinOrderByAggregateInput = {
    id?: SortOrder
    webhook_event?: SortOrder
    issue_event_type?: SortOrder
    issue_id?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    date_created?: SortOrder
  }

  export type JiraEventSumOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
  }

  export type JiraIssueListRelationFilter = {
    every?: JiraIssueWhereInput
    some?: JiraIssueWhereInput
    none?: JiraIssueWhereInput
  }

  export type JiraEventListRelationFilter = {
    every?: JiraEventWhereInput
    some?: JiraEventWhereInput
    none?: JiraEventWhereInput
  }

  export type JiraIssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JiraEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JiraProjectOrderByRelevanceInput = {
    fields: JiraProjectOrderByRelevanceFieldEnum | JiraProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JiraProjectCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type JiraProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JiraProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type JiraProjectMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type JiraProjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JiraUserOrderByRelevanceInput = {
    fields: JiraUserOrderByRelevanceFieldEnum | JiraUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JiraUserCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    display_name?: SortOrder
  }

  export type JiraUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JiraUserMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    display_name?: SortOrder
  }

  export type JiraUserMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    display_name?: SortOrder
  }

  export type JiraUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type JiraIssueOrderByRelevanceInput = {
    fields: JiraIssueOrderByRelevanceFieldEnum | JiraIssueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JiraIssueCountOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    summary?: SortOrder
    key?: SortOrder
    status_name?: SortOrder
    status_id?: SortOrder
    timespent?: SortOrder
    timeestimate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    resolution_date?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    assignee_id?: SortOrder
    sprint_name?: SortOrder
    sprint_start?: SortOrder
    sprint_end?: SortOrder
    raw_fields?: SortOrder
  }

  export type JiraIssueAvgOrderByAggregateInput = {
    id?: SortOrder
    timespent?: SortOrder
    timeestimate?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    assignee_id?: SortOrder
  }

  export type JiraIssueMaxOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    summary?: SortOrder
    key?: SortOrder
    status_name?: SortOrder
    status_id?: SortOrder
    timespent?: SortOrder
    timeestimate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    resolution_date?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    assignee_id?: SortOrder
    sprint_name?: SortOrder
    sprint_start?: SortOrder
    sprint_end?: SortOrder
  }

  export type JiraIssueMinOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    summary?: SortOrder
    key?: SortOrder
    status_name?: SortOrder
    status_id?: SortOrder
    timespent?: SortOrder
    timeestimate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    resolution_date?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    assignee_id?: SortOrder
    sprint_name?: SortOrder
    sprint_start?: SortOrder
    sprint_end?: SortOrder
  }

  export type JiraIssueSumOrderByAggregateInput = {
    id?: SortOrder
    timespent?: SortOrder
    timeestimate?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    assignee_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type JiraEventScalarRelationFilter = {
    is?: JiraEventWhereInput
    isNot?: JiraEventWhereInput
  }

  export type JiraPayloadCountOrderByAggregateInput = {
    id?: SortOrder
    raw_payload?: SortOrder
    event_id?: SortOrder
  }

  export type JiraPayloadAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type JiraPayloadMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type JiraPayloadMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type JiraPayloadSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type EventCreateNestedManyWithoutProjectInput = {
    create?: XOR<EventCreateWithoutProjectInput, EventUncheckedCreateWithoutProjectInput> | EventCreateWithoutProjectInput[] | EventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProjectInput | EventCreateOrConnectWithoutProjectInput[]
    createMany?: EventCreateManyProjectInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutProjectInput = {
    create?: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput> | TicketCreateWithoutProjectInput[] | TicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProjectInput | TicketCreateOrConnectWithoutProjectInput[]
    createMany?: TicketCreateManyProjectInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput> | UserCreateWithoutProjectsInput[] | UserUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | UserCreateOrConnectWithoutProjectsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<EventCreateWithoutProjectInput, EventUncheckedCreateWithoutProjectInput> | EventCreateWithoutProjectInput[] | EventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProjectInput | EventCreateOrConnectWithoutProjectInput[]
    createMany?: EventCreateManyProjectInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput> | TicketCreateWithoutProjectInput[] | TicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProjectInput | TicketCreateOrConnectWithoutProjectInput[]
    createMany?: TicketCreateManyProjectInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput> | UserCreateWithoutProjectsInput[] | UserUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | UserCreateOrConnectWithoutProjectsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EventUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EventCreateWithoutProjectInput, EventUncheckedCreateWithoutProjectInput> | EventCreateWithoutProjectInput[] | EventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProjectInput | EventCreateOrConnectWithoutProjectInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutProjectInput | EventUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EventCreateManyProjectInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutProjectInput | EventUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EventUpdateManyWithWhereWithoutProjectInput | EventUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput> | TicketCreateWithoutProjectInput[] | TicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProjectInput | TicketCreateOrConnectWithoutProjectInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutProjectInput | TicketUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TicketCreateManyProjectInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutProjectInput | TicketUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutProjectInput | TicketUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput> | UserCreateWithoutProjectsInput[] | UserUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | UserCreateOrConnectWithoutProjectsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProjectsInput | UserUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProjectsInput | UserUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProjectsInput | UserUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EventCreateWithoutProjectInput, EventUncheckedCreateWithoutProjectInput> | EventCreateWithoutProjectInput[] | EventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProjectInput | EventCreateOrConnectWithoutProjectInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutProjectInput | EventUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EventCreateManyProjectInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutProjectInput | EventUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EventUpdateManyWithWhereWithoutProjectInput | EventUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput> | TicketCreateWithoutProjectInput[] | TicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutProjectInput | TicketCreateOrConnectWithoutProjectInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutProjectInput | TicketUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TicketCreateManyProjectInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutProjectInput | TicketUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutProjectInput | TicketUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput> | UserCreateWithoutProjectsInput[] | UserUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | UserCreateOrConnectWithoutProjectsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProjectsInput | UserUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProjectsInput | UserUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProjectsInput | UserUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutContributorsInput = {
    create?: XOR<ProjectCreateWithoutContributorsInput, ProjectUncheckedCreateWithoutContributorsInput> | ProjectCreateWithoutContributorsInput[] | ProjectUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutContributorsInput | ProjectCreateOrConnectWithoutContributorsInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutAuthorInput = {
    create?: XOR<EventCreateWithoutAuthorInput, EventUncheckedCreateWithoutAuthorInput> | EventCreateWithoutAuthorInput[] | EventUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAuthorInput | EventCreateOrConnectWithoutAuthorInput[]
    createMany?: EventCreateManyAuthorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutReviewerInput = {
    create?: XOR<EventCreateWithoutReviewerInput, EventUncheckedCreateWithoutReviewerInput> | EventCreateWithoutReviewerInput[] | EventUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutReviewerInput | EventCreateOrConnectWithoutReviewerInput[]
    createMany?: EventCreateManyReviewerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type RevisionCreateNestedManyWithoutUserInput = {
    create?: XOR<RevisionCreateWithoutUserInput, RevisionUncheckedCreateWithoutUserInput> | RevisionCreateWithoutUserInput[] | RevisionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutUserInput | RevisionCreateOrConnectWithoutUserInput[]
    createMany?: RevisionCreateManyUserInputEnvelope
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
  }

  export type RevisionCreateNestedManyWithoutReviewerInput = {
    create?: XOR<RevisionCreateWithoutReviewerInput, RevisionUncheckedCreateWithoutReviewerInput> | RevisionCreateWithoutReviewerInput[] | RevisionUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutReviewerInput | RevisionCreateOrConnectWithoutReviewerInput[]
    createMany?: RevisionCreateManyReviewerInputEnvelope
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutContributorsInput = {
    create?: XOR<ProjectCreateWithoutContributorsInput, ProjectUncheckedCreateWithoutContributorsInput> | ProjectCreateWithoutContributorsInput[] | ProjectUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutContributorsInput | ProjectCreateOrConnectWithoutContributorsInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<EventCreateWithoutAuthorInput, EventUncheckedCreateWithoutAuthorInput> | EventCreateWithoutAuthorInput[] | EventUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAuthorInput | EventCreateOrConnectWithoutAuthorInput[]
    createMany?: EventCreateManyAuthorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<EventCreateWithoutReviewerInput, EventUncheckedCreateWithoutReviewerInput> | EventCreateWithoutReviewerInput[] | EventUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutReviewerInput | EventCreateOrConnectWithoutReviewerInput[]
    createMany?: EventCreateManyReviewerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type RevisionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RevisionCreateWithoutUserInput, RevisionUncheckedCreateWithoutUserInput> | RevisionCreateWithoutUserInput[] | RevisionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutUserInput | RevisionCreateOrConnectWithoutUserInput[]
    createMany?: RevisionCreateManyUserInputEnvelope
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
  }

  export type RevisionUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<RevisionCreateWithoutReviewerInput, RevisionUncheckedCreateWithoutReviewerInput> | RevisionCreateWithoutReviewerInput[] | RevisionUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutReviewerInput | RevisionCreateOrConnectWithoutReviewerInput[]
    createMany?: RevisionCreateManyReviewerInputEnvelope
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateManyWithoutContributorsNestedInput = {
    create?: XOR<ProjectCreateWithoutContributorsInput, ProjectUncheckedCreateWithoutContributorsInput> | ProjectCreateWithoutContributorsInput[] | ProjectUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutContributorsInput | ProjectCreateOrConnectWithoutContributorsInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutContributorsInput | ProjectUpsertWithWhereUniqueWithoutContributorsInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutContributorsInput | ProjectUpdateWithWhereUniqueWithoutContributorsInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutContributorsInput | ProjectUpdateManyWithWhereWithoutContributorsInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type EventUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<EventCreateWithoutAuthorInput, EventUncheckedCreateWithoutAuthorInput> | EventCreateWithoutAuthorInput[] | EventUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAuthorInput | EventCreateOrConnectWithoutAuthorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutAuthorInput | EventUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: EventCreateManyAuthorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutAuthorInput | EventUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutAuthorInput | EventUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<EventCreateWithoutReviewerInput, EventUncheckedCreateWithoutReviewerInput> | EventCreateWithoutReviewerInput[] | EventUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutReviewerInput | EventCreateOrConnectWithoutReviewerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutReviewerInput | EventUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: EventCreateManyReviewerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutReviewerInput | EventUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutReviewerInput | EventUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type RevisionUpdateManyWithoutUserNestedInput = {
    create?: XOR<RevisionCreateWithoutUserInput, RevisionUncheckedCreateWithoutUserInput> | RevisionCreateWithoutUserInput[] | RevisionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutUserInput | RevisionCreateOrConnectWithoutUserInput[]
    upsert?: RevisionUpsertWithWhereUniqueWithoutUserInput | RevisionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RevisionCreateManyUserInputEnvelope
    set?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    disconnect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    delete?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    update?: RevisionUpdateWithWhereUniqueWithoutUserInput | RevisionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RevisionUpdateManyWithWhereWithoutUserInput | RevisionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
  }

  export type RevisionUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<RevisionCreateWithoutReviewerInput, RevisionUncheckedCreateWithoutReviewerInput> | RevisionCreateWithoutReviewerInput[] | RevisionUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutReviewerInput | RevisionCreateOrConnectWithoutReviewerInput[]
    upsert?: RevisionUpsertWithWhereUniqueWithoutReviewerInput | RevisionUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: RevisionCreateManyReviewerInputEnvelope
    set?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    disconnect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    delete?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    update?: RevisionUpdateWithWhereUniqueWithoutReviewerInput | RevisionUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: RevisionUpdateManyWithWhereWithoutReviewerInput | RevisionUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutContributorsNestedInput = {
    create?: XOR<ProjectCreateWithoutContributorsInput, ProjectUncheckedCreateWithoutContributorsInput> | ProjectCreateWithoutContributorsInput[] | ProjectUncheckedCreateWithoutContributorsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutContributorsInput | ProjectCreateOrConnectWithoutContributorsInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutContributorsInput | ProjectUpsertWithWhereUniqueWithoutContributorsInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutContributorsInput | ProjectUpdateWithWhereUniqueWithoutContributorsInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutContributorsInput | ProjectUpdateManyWithWhereWithoutContributorsInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<EventCreateWithoutAuthorInput, EventUncheckedCreateWithoutAuthorInput> | EventCreateWithoutAuthorInput[] | EventUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAuthorInput | EventCreateOrConnectWithoutAuthorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutAuthorInput | EventUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: EventCreateManyAuthorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutAuthorInput | EventUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutAuthorInput | EventUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<EventCreateWithoutReviewerInput, EventUncheckedCreateWithoutReviewerInput> | EventCreateWithoutReviewerInput[] | EventUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutReviewerInput | EventCreateOrConnectWithoutReviewerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutReviewerInput | EventUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: EventCreateManyReviewerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutReviewerInput | EventUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutReviewerInput | EventUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type RevisionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RevisionCreateWithoutUserInput, RevisionUncheckedCreateWithoutUserInput> | RevisionCreateWithoutUserInput[] | RevisionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutUserInput | RevisionCreateOrConnectWithoutUserInput[]
    upsert?: RevisionUpsertWithWhereUniqueWithoutUserInput | RevisionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RevisionCreateManyUserInputEnvelope
    set?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    disconnect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    delete?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    update?: RevisionUpdateWithWhereUniqueWithoutUserInput | RevisionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RevisionUpdateManyWithWhereWithoutUserInput | RevisionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
  }

  export type RevisionUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<RevisionCreateWithoutReviewerInput, RevisionUncheckedCreateWithoutReviewerInput> | RevisionCreateWithoutReviewerInput[] | RevisionUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutReviewerInput | RevisionCreateOrConnectWithoutReviewerInput[]
    upsert?: RevisionUpsertWithWhereUniqueWithoutReviewerInput | RevisionUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: RevisionCreateManyReviewerInputEnvelope
    set?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    disconnect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    delete?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    update?: RevisionUpdateWithWhereUniqueWithoutReviewerInput | RevisionUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: RevisionUpdateManyWithWhereWithoutReviewerInput | RevisionUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutTicketInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput> | EventCreateWithoutTicketInput[] | EventUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput | EventCreateOrConnectWithoutTicketInput[]
    createMany?: EventCreateManyTicketInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ProjectCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ProjectCreateWithoutTicketsInput, ProjectUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTicketsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EventUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput> | EventCreateWithoutTicketInput[] | EventUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput | EventCreateOrConnectWithoutTicketInput[]
    createMany?: EventCreateManyTicketInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutTicketNestedInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput> | EventCreateWithoutTicketInput[] | EventUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput | EventCreateOrConnectWithoutTicketInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutTicketInput | EventUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: EventCreateManyTicketInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutTicketInput | EventUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: EventUpdateManyWithWhereWithoutTicketInput | EventUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ProjectUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<ProjectCreateWithoutTicketsInput, ProjectUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTicketsInput
    upsert?: ProjectUpsertWithoutTicketsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTicketsInput, ProjectUpdateWithoutTicketsInput>, ProjectUncheckedUpdateWithoutTicketsInput>
  }

  export type EventUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput> | EventCreateWithoutTicketInput[] | EventUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput | EventCreateOrConnectWithoutTicketInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutTicketInput | EventUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: EventCreateManyTicketInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutTicketInput | EventUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: EventUpdateManyWithWhereWithoutTicketInput | EventUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutEventsInput = {
    create?: XOR<ProjectCreateWithoutEventsInput, ProjectUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEventsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewed_eventsInput = {
    create?: XOR<UserCreateWithoutReviewed_eventsInput, UserUncheckedCreateWithoutReviewed_eventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewed_eventsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutEventsInput = {
    create?: XOR<TicketCreateWithoutEventsInput, TicketUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutEventsInput
    connect?: TicketWhereUniqueInput
  }

  export type PayloadCreateNestedOneWithoutEventInput = {
    create?: XOR<PayloadCreateWithoutEventInput, PayloadUncheckedCreateWithoutEventInput>
    connectOrCreate?: PayloadCreateOrConnectWithoutEventInput
    connect?: PayloadWhereUniqueInput
  }

  export type RevisionCreateNestedOneWithoutPr_eventInput = {
    create?: XOR<RevisionCreateWithoutPr_eventInput, RevisionUncheckedCreateWithoutPr_eventInput>
    connectOrCreate?: RevisionCreateOrConnectWithoutPr_eventInput
    connect?: RevisionWhereUniqueInput
  }

  export type PayloadUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<PayloadCreateWithoutEventInput, PayloadUncheckedCreateWithoutEventInput>
    connectOrCreate?: PayloadCreateOrConnectWithoutEventInput
    connect?: PayloadWhereUniqueInput
  }

  export type RevisionUncheckedCreateNestedOneWithoutPr_eventInput = {
    create?: XOR<RevisionCreateWithoutPr_eventInput, RevisionUncheckedCreateWithoutPr_eventInput>
    connectOrCreate?: RevisionCreateOrConnectWithoutPr_eventInput
    connect?: RevisionWhereUniqueInput
  }

  export type EnumSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.SourceType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateOneWithoutEventsNestedInput = {
    create?: XOR<ProjectCreateWithoutEventsInput, ProjectUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEventsInput
    upsert?: ProjectUpsertWithoutEventsInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEventsInput, ProjectUpdateWithoutEventsInput>, ProjectUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateOneWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateOneWithoutReviewed_eventsNestedInput = {
    create?: XOR<UserCreateWithoutReviewed_eventsInput, UserUncheckedCreateWithoutReviewed_eventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewed_eventsInput
    upsert?: UserUpsertWithoutReviewed_eventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewed_eventsInput, UserUpdateWithoutReviewed_eventsInput>, UserUncheckedUpdateWithoutReviewed_eventsInput>
  }

  export type TicketUpdateOneWithoutEventsNestedInput = {
    create?: XOR<TicketCreateWithoutEventsInput, TicketUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutEventsInput
    upsert?: TicketUpsertWithoutEventsInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutEventsInput, TicketUpdateWithoutEventsInput>, TicketUncheckedUpdateWithoutEventsInput>
  }

  export type PayloadUpdateOneWithoutEventNestedInput = {
    create?: XOR<PayloadCreateWithoutEventInput, PayloadUncheckedCreateWithoutEventInput>
    connectOrCreate?: PayloadCreateOrConnectWithoutEventInput
    upsert?: PayloadUpsertWithoutEventInput
    disconnect?: PayloadWhereInput | boolean
    delete?: PayloadWhereInput | boolean
    connect?: PayloadWhereUniqueInput
    update?: XOR<XOR<PayloadUpdateToOneWithWhereWithoutEventInput, PayloadUpdateWithoutEventInput>, PayloadUncheckedUpdateWithoutEventInput>
  }

  export type RevisionUpdateOneWithoutPr_eventNestedInput = {
    create?: XOR<RevisionCreateWithoutPr_eventInput, RevisionUncheckedCreateWithoutPr_eventInput>
    connectOrCreate?: RevisionCreateOrConnectWithoutPr_eventInput
    upsert?: RevisionUpsertWithoutPr_eventInput
    disconnect?: RevisionWhereInput | boolean
    delete?: RevisionWhereInput | boolean
    connect?: RevisionWhereUniqueInput
    update?: XOR<XOR<RevisionUpdateToOneWithWhereWithoutPr_eventInput, RevisionUpdateWithoutPr_eventInput>, RevisionUncheckedUpdateWithoutPr_eventInput>
  }

  export type PayloadUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<PayloadCreateWithoutEventInput, PayloadUncheckedCreateWithoutEventInput>
    connectOrCreate?: PayloadCreateOrConnectWithoutEventInput
    upsert?: PayloadUpsertWithoutEventInput
    disconnect?: PayloadWhereInput | boolean
    delete?: PayloadWhereInput | boolean
    connect?: PayloadWhereUniqueInput
    update?: XOR<XOR<PayloadUpdateToOneWithWhereWithoutEventInput, PayloadUpdateWithoutEventInput>, PayloadUncheckedUpdateWithoutEventInput>
  }

  export type RevisionUncheckedUpdateOneWithoutPr_eventNestedInput = {
    create?: XOR<RevisionCreateWithoutPr_eventInput, RevisionUncheckedCreateWithoutPr_eventInput>
    connectOrCreate?: RevisionCreateOrConnectWithoutPr_eventInput
    upsert?: RevisionUpsertWithoutPr_eventInput
    disconnect?: RevisionWhereInput | boolean
    delete?: RevisionWhereInput | boolean
    connect?: RevisionWhereUniqueInput
    update?: XOR<XOR<RevisionUpdateToOneWithWhereWithoutPr_eventInput, RevisionUpdateWithoutPr_eventInput>, RevisionUncheckedUpdateWithoutPr_eventInput>
  }

  export type EventCreateNestedOneWithoutPayloadInput = {
    create?: XOR<EventCreateWithoutPayloadInput, EventUncheckedCreateWithoutPayloadInput>
    connectOrCreate?: EventCreateOrConnectWithoutPayloadInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutPayloadNestedInput = {
    create?: XOR<EventCreateWithoutPayloadInput, EventUncheckedCreateWithoutPayloadInput>
    connectOrCreate?: EventCreateOrConnectWithoutPayloadInput
    upsert?: EventUpsertWithoutPayloadInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutPayloadInput, EventUpdateWithoutPayloadInput>, EventUncheckedUpdateWithoutPayloadInput>
  }

  export type UserCreateNestedOneWithoutAuthoredRevisionsInput = {
    create?: XOR<UserCreateWithoutAuthoredRevisionsInput, UserUncheckedCreateWithoutAuthoredRevisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthoredRevisionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewedRevisionsInput = {
    create?: XOR<UserCreateWithoutReviewedRevisionsInput, UserUncheckedCreateWithoutReviewedRevisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedRevisionsInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutRevisionInput = {
    create?: XOR<EventCreateWithoutRevisionInput, EventUncheckedCreateWithoutRevisionInput>
    connectOrCreate?: EventCreateOrConnectWithoutRevisionInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuthoredRevisionsNestedInput = {
    create?: XOR<UserCreateWithoutAuthoredRevisionsInput, UserUncheckedCreateWithoutAuthoredRevisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthoredRevisionsInput
    upsert?: UserUpsertWithoutAuthoredRevisionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthoredRevisionsInput, UserUpdateWithoutAuthoredRevisionsInput>, UserUncheckedUpdateWithoutAuthoredRevisionsInput>
  }

  export type UserUpdateOneWithoutReviewedRevisionsNestedInput = {
    create?: XOR<UserCreateWithoutReviewedRevisionsInput, UserUncheckedCreateWithoutReviewedRevisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedRevisionsInput
    upsert?: UserUpsertWithoutReviewedRevisionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewedRevisionsInput, UserUpdateWithoutReviewedRevisionsInput>, UserUncheckedUpdateWithoutReviewedRevisionsInput>
  }

  export type EventUpdateOneRequiredWithoutRevisionNestedInput = {
    create?: XOR<EventCreateWithoutRevisionInput, EventUncheckedCreateWithoutRevisionInput>
    connectOrCreate?: EventCreateOrConnectWithoutRevisionInput
    upsert?: EventUpsertWithoutRevisionInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRevisionInput, EventUpdateWithoutRevisionInput>, EventUncheckedUpdateWithoutRevisionInput>
  }

  export type JiraIssueCreateNestedOneWithoutEventsInput = {
    create?: XOR<JiraIssueCreateWithoutEventsInput, JiraIssueUncheckedCreateWithoutEventsInput>
    connectOrCreate?: JiraIssueCreateOrConnectWithoutEventsInput
    connect?: JiraIssueWhereUniqueInput
  }

  export type JiraProjectCreateNestedOneWithoutJiraEventInput = {
    create?: XOR<JiraProjectCreateWithoutJiraEventInput, JiraProjectUncheckedCreateWithoutJiraEventInput>
    connectOrCreate?: JiraProjectCreateOrConnectWithoutJiraEventInput
    connect?: JiraProjectWhereUniqueInput
  }

  export type JiraUserCreateNestedOneWithoutJiraEventInput = {
    create?: XOR<JiraUserCreateWithoutJiraEventInput, JiraUserUncheckedCreateWithoutJiraEventInput>
    connectOrCreate?: JiraUserCreateOrConnectWithoutJiraEventInput
    connect?: JiraUserWhereUniqueInput
  }

  export type JiraPayloadCreateNestedOneWithoutEventInput = {
    create?: XOR<JiraPayloadCreateWithoutEventInput, JiraPayloadUncheckedCreateWithoutEventInput>
    connectOrCreate?: JiraPayloadCreateOrConnectWithoutEventInput
    connect?: JiraPayloadWhereUniqueInput
  }

  export type JiraPayloadUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<JiraPayloadCreateWithoutEventInput, JiraPayloadUncheckedCreateWithoutEventInput>
    connectOrCreate?: JiraPayloadCreateOrConnectWithoutEventInput
    connect?: JiraPayloadWhereUniqueInput
  }

  export type JiraIssueUpdateOneWithoutEventsNestedInput = {
    create?: XOR<JiraIssueCreateWithoutEventsInput, JiraIssueUncheckedCreateWithoutEventsInput>
    connectOrCreate?: JiraIssueCreateOrConnectWithoutEventsInput
    upsert?: JiraIssueUpsertWithoutEventsInput
    disconnect?: JiraIssueWhereInput | boolean
    delete?: JiraIssueWhereInput | boolean
    connect?: JiraIssueWhereUniqueInput
    update?: XOR<XOR<JiraIssueUpdateToOneWithWhereWithoutEventsInput, JiraIssueUpdateWithoutEventsInput>, JiraIssueUncheckedUpdateWithoutEventsInput>
  }

  export type JiraProjectUpdateOneWithoutJiraEventNestedInput = {
    create?: XOR<JiraProjectCreateWithoutJiraEventInput, JiraProjectUncheckedCreateWithoutJiraEventInput>
    connectOrCreate?: JiraProjectCreateOrConnectWithoutJiraEventInput
    upsert?: JiraProjectUpsertWithoutJiraEventInput
    disconnect?: JiraProjectWhereInput | boolean
    delete?: JiraProjectWhereInput | boolean
    connect?: JiraProjectWhereUniqueInput
    update?: XOR<XOR<JiraProjectUpdateToOneWithWhereWithoutJiraEventInput, JiraProjectUpdateWithoutJiraEventInput>, JiraProjectUncheckedUpdateWithoutJiraEventInput>
  }

  export type JiraUserUpdateOneWithoutJiraEventNestedInput = {
    create?: XOR<JiraUserCreateWithoutJiraEventInput, JiraUserUncheckedCreateWithoutJiraEventInput>
    connectOrCreate?: JiraUserCreateOrConnectWithoutJiraEventInput
    upsert?: JiraUserUpsertWithoutJiraEventInput
    disconnect?: JiraUserWhereInput | boolean
    delete?: JiraUserWhereInput | boolean
    connect?: JiraUserWhereUniqueInput
    update?: XOR<XOR<JiraUserUpdateToOneWithWhereWithoutJiraEventInput, JiraUserUpdateWithoutJiraEventInput>, JiraUserUncheckedUpdateWithoutJiraEventInput>
  }

  export type JiraPayloadUpdateOneWithoutEventNestedInput = {
    create?: XOR<JiraPayloadCreateWithoutEventInput, JiraPayloadUncheckedCreateWithoutEventInput>
    connectOrCreate?: JiraPayloadCreateOrConnectWithoutEventInput
    upsert?: JiraPayloadUpsertWithoutEventInput
    disconnect?: JiraPayloadWhereInput | boolean
    delete?: JiraPayloadWhereInput | boolean
    connect?: JiraPayloadWhereUniqueInput
    update?: XOR<XOR<JiraPayloadUpdateToOneWithWhereWithoutEventInput, JiraPayloadUpdateWithoutEventInput>, JiraPayloadUncheckedUpdateWithoutEventInput>
  }

  export type JiraPayloadUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<JiraPayloadCreateWithoutEventInput, JiraPayloadUncheckedCreateWithoutEventInput>
    connectOrCreate?: JiraPayloadCreateOrConnectWithoutEventInput
    upsert?: JiraPayloadUpsertWithoutEventInput
    disconnect?: JiraPayloadWhereInput | boolean
    delete?: JiraPayloadWhereInput | boolean
    connect?: JiraPayloadWhereUniqueInput
    update?: XOR<XOR<JiraPayloadUpdateToOneWithWhereWithoutEventInput, JiraPayloadUpdateWithoutEventInput>, JiraPayloadUncheckedUpdateWithoutEventInput>
  }

  export type JiraIssueCreateNestedManyWithoutProjectInput = {
    create?: XOR<JiraIssueCreateWithoutProjectInput, JiraIssueUncheckedCreateWithoutProjectInput> | JiraIssueCreateWithoutProjectInput[] | JiraIssueUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutProjectInput | JiraIssueCreateOrConnectWithoutProjectInput[]
    createMany?: JiraIssueCreateManyProjectInputEnvelope
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
  }

  export type JiraEventCreateNestedManyWithoutProjectInput = {
    create?: XOR<JiraEventCreateWithoutProjectInput, JiraEventUncheckedCreateWithoutProjectInput> | JiraEventCreateWithoutProjectInput[] | JiraEventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutProjectInput | JiraEventCreateOrConnectWithoutProjectInput[]
    createMany?: JiraEventCreateManyProjectInputEnvelope
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
  }

  export type JiraIssueUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<JiraIssueCreateWithoutProjectInput, JiraIssueUncheckedCreateWithoutProjectInput> | JiraIssueCreateWithoutProjectInput[] | JiraIssueUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutProjectInput | JiraIssueCreateOrConnectWithoutProjectInput[]
    createMany?: JiraIssueCreateManyProjectInputEnvelope
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
  }

  export type JiraEventUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<JiraEventCreateWithoutProjectInput, JiraEventUncheckedCreateWithoutProjectInput> | JiraEventCreateWithoutProjectInput[] | JiraEventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutProjectInput | JiraEventCreateOrConnectWithoutProjectInput[]
    createMany?: JiraEventCreateManyProjectInputEnvelope
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
  }

  export type JiraIssueUpdateManyWithoutProjectNestedInput = {
    create?: XOR<JiraIssueCreateWithoutProjectInput, JiraIssueUncheckedCreateWithoutProjectInput> | JiraIssueCreateWithoutProjectInput[] | JiraIssueUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutProjectInput | JiraIssueCreateOrConnectWithoutProjectInput[]
    upsert?: JiraIssueUpsertWithWhereUniqueWithoutProjectInput | JiraIssueUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: JiraIssueCreateManyProjectInputEnvelope
    set?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    disconnect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    delete?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    update?: JiraIssueUpdateWithWhereUniqueWithoutProjectInput | JiraIssueUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: JiraIssueUpdateManyWithWhereWithoutProjectInput | JiraIssueUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: JiraIssueScalarWhereInput | JiraIssueScalarWhereInput[]
  }

  export type JiraEventUpdateManyWithoutProjectNestedInput = {
    create?: XOR<JiraEventCreateWithoutProjectInput, JiraEventUncheckedCreateWithoutProjectInput> | JiraEventCreateWithoutProjectInput[] | JiraEventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutProjectInput | JiraEventCreateOrConnectWithoutProjectInput[]
    upsert?: JiraEventUpsertWithWhereUniqueWithoutProjectInput | JiraEventUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: JiraEventCreateManyProjectInputEnvelope
    set?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    disconnect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    delete?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    update?: JiraEventUpdateWithWhereUniqueWithoutProjectInput | JiraEventUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: JiraEventUpdateManyWithWhereWithoutProjectInput | JiraEventUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: JiraEventScalarWhereInput | JiraEventScalarWhereInput[]
  }

  export type JiraIssueUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<JiraIssueCreateWithoutProjectInput, JiraIssueUncheckedCreateWithoutProjectInput> | JiraIssueCreateWithoutProjectInput[] | JiraIssueUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutProjectInput | JiraIssueCreateOrConnectWithoutProjectInput[]
    upsert?: JiraIssueUpsertWithWhereUniqueWithoutProjectInput | JiraIssueUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: JiraIssueCreateManyProjectInputEnvelope
    set?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    disconnect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    delete?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    update?: JiraIssueUpdateWithWhereUniqueWithoutProjectInput | JiraIssueUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: JiraIssueUpdateManyWithWhereWithoutProjectInput | JiraIssueUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: JiraIssueScalarWhereInput | JiraIssueScalarWhereInput[]
  }

  export type JiraEventUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<JiraEventCreateWithoutProjectInput, JiraEventUncheckedCreateWithoutProjectInput> | JiraEventCreateWithoutProjectInput[] | JiraEventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutProjectInput | JiraEventCreateOrConnectWithoutProjectInput[]
    upsert?: JiraEventUpsertWithWhereUniqueWithoutProjectInput | JiraEventUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: JiraEventCreateManyProjectInputEnvelope
    set?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    disconnect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    delete?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    update?: JiraEventUpdateWithWhereUniqueWithoutProjectInput | JiraEventUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: JiraEventUpdateManyWithWhereWithoutProjectInput | JiraEventUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: JiraEventScalarWhereInput | JiraEventScalarWhereInput[]
  }

  export type JiraIssueCreateNestedManyWithoutCreatorInput = {
    create?: XOR<JiraIssueCreateWithoutCreatorInput, JiraIssueUncheckedCreateWithoutCreatorInput> | JiraIssueCreateWithoutCreatorInput[] | JiraIssueUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutCreatorInput | JiraIssueCreateOrConnectWithoutCreatorInput[]
    createMany?: JiraIssueCreateManyCreatorInputEnvelope
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
  }

  export type JiraIssueCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<JiraIssueCreateWithoutAssigneeInput, JiraIssueUncheckedCreateWithoutAssigneeInput> | JiraIssueCreateWithoutAssigneeInput[] | JiraIssueUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutAssigneeInput | JiraIssueCreateOrConnectWithoutAssigneeInput[]
    createMany?: JiraIssueCreateManyAssigneeInputEnvelope
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
  }

  export type JiraEventCreateNestedManyWithoutUserInput = {
    create?: XOR<JiraEventCreateWithoutUserInput, JiraEventUncheckedCreateWithoutUserInput> | JiraEventCreateWithoutUserInput[] | JiraEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutUserInput | JiraEventCreateOrConnectWithoutUserInput[]
    createMany?: JiraEventCreateManyUserInputEnvelope
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
  }

  export type JiraIssueUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<JiraIssueCreateWithoutCreatorInput, JiraIssueUncheckedCreateWithoutCreatorInput> | JiraIssueCreateWithoutCreatorInput[] | JiraIssueUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutCreatorInput | JiraIssueCreateOrConnectWithoutCreatorInput[]
    createMany?: JiraIssueCreateManyCreatorInputEnvelope
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
  }

  export type JiraIssueUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<JiraIssueCreateWithoutAssigneeInput, JiraIssueUncheckedCreateWithoutAssigneeInput> | JiraIssueCreateWithoutAssigneeInput[] | JiraIssueUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutAssigneeInput | JiraIssueCreateOrConnectWithoutAssigneeInput[]
    createMany?: JiraIssueCreateManyAssigneeInputEnvelope
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
  }

  export type JiraEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JiraEventCreateWithoutUserInput, JiraEventUncheckedCreateWithoutUserInput> | JiraEventCreateWithoutUserInput[] | JiraEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutUserInput | JiraEventCreateOrConnectWithoutUserInput[]
    createMany?: JiraEventCreateManyUserInputEnvelope
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
  }

  export type JiraIssueUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<JiraIssueCreateWithoutCreatorInput, JiraIssueUncheckedCreateWithoutCreatorInput> | JiraIssueCreateWithoutCreatorInput[] | JiraIssueUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutCreatorInput | JiraIssueCreateOrConnectWithoutCreatorInput[]
    upsert?: JiraIssueUpsertWithWhereUniqueWithoutCreatorInput | JiraIssueUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: JiraIssueCreateManyCreatorInputEnvelope
    set?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    disconnect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    delete?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    update?: JiraIssueUpdateWithWhereUniqueWithoutCreatorInput | JiraIssueUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: JiraIssueUpdateManyWithWhereWithoutCreatorInput | JiraIssueUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: JiraIssueScalarWhereInput | JiraIssueScalarWhereInput[]
  }

  export type JiraIssueUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<JiraIssueCreateWithoutAssigneeInput, JiraIssueUncheckedCreateWithoutAssigneeInput> | JiraIssueCreateWithoutAssigneeInput[] | JiraIssueUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutAssigneeInput | JiraIssueCreateOrConnectWithoutAssigneeInput[]
    upsert?: JiraIssueUpsertWithWhereUniqueWithoutAssigneeInput | JiraIssueUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: JiraIssueCreateManyAssigneeInputEnvelope
    set?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    disconnect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    delete?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    update?: JiraIssueUpdateWithWhereUniqueWithoutAssigneeInput | JiraIssueUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: JiraIssueUpdateManyWithWhereWithoutAssigneeInput | JiraIssueUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: JiraIssueScalarWhereInput | JiraIssueScalarWhereInput[]
  }

  export type JiraEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<JiraEventCreateWithoutUserInput, JiraEventUncheckedCreateWithoutUserInput> | JiraEventCreateWithoutUserInput[] | JiraEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutUserInput | JiraEventCreateOrConnectWithoutUserInput[]
    upsert?: JiraEventUpsertWithWhereUniqueWithoutUserInput | JiraEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JiraEventCreateManyUserInputEnvelope
    set?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    disconnect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    delete?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    update?: JiraEventUpdateWithWhereUniqueWithoutUserInput | JiraEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JiraEventUpdateManyWithWhereWithoutUserInput | JiraEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JiraEventScalarWhereInput | JiraEventScalarWhereInput[]
  }

  export type JiraIssueUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<JiraIssueCreateWithoutCreatorInput, JiraIssueUncheckedCreateWithoutCreatorInput> | JiraIssueCreateWithoutCreatorInput[] | JiraIssueUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutCreatorInput | JiraIssueCreateOrConnectWithoutCreatorInput[]
    upsert?: JiraIssueUpsertWithWhereUniqueWithoutCreatorInput | JiraIssueUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: JiraIssueCreateManyCreatorInputEnvelope
    set?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    disconnect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    delete?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    update?: JiraIssueUpdateWithWhereUniqueWithoutCreatorInput | JiraIssueUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: JiraIssueUpdateManyWithWhereWithoutCreatorInput | JiraIssueUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: JiraIssueScalarWhereInput | JiraIssueScalarWhereInput[]
  }

  export type JiraIssueUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<JiraIssueCreateWithoutAssigneeInput, JiraIssueUncheckedCreateWithoutAssigneeInput> | JiraIssueCreateWithoutAssigneeInput[] | JiraIssueUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: JiraIssueCreateOrConnectWithoutAssigneeInput | JiraIssueCreateOrConnectWithoutAssigneeInput[]
    upsert?: JiraIssueUpsertWithWhereUniqueWithoutAssigneeInput | JiraIssueUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: JiraIssueCreateManyAssigneeInputEnvelope
    set?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    disconnect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    delete?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    connect?: JiraIssueWhereUniqueInput | JiraIssueWhereUniqueInput[]
    update?: JiraIssueUpdateWithWhereUniqueWithoutAssigneeInput | JiraIssueUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: JiraIssueUpdateManyWithWhereWithoutAssigneeInput | JiraIssueUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: JiraIssueScalarWhereInput | JiraIssueScalarWhereInput[]
  }

  export type JiraEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JiraEventCreateWithoutUserInput, JiraEventUncheckedCreateWithoutUserInput> | JiraEventCreateWithoutUserInput[] | JiraEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutUserInput | JiraEventCreateOrConnectWithoutUserInput[]
    upsert?: JiraEventUpsertWithWhereUniqueWithoutUserInput | JiraEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JiraEventCreateManyUserInputEnvelope
    set?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    disconnect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    delete?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    update?: JiraEventUpdateWithWhereUniqueWithoutUserInput | JiraEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JiraEventUpdateManyWithWhereWithoutUserInput | JiraEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JiraEventScalarWhereInput | JiraEventScalarWhereInput[]
  }

  export type JiraProjectCreateNestedOneWithoutIssuesInput = {
    create?: XOR<JiraProjectCreateWithoutIssuesInput, JiraProjectUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: JiraProjectCreateOrConnectWithoutIssuesInput
    connect?: JiraProjectWhereUniqueInput
  }

  export type JiraUserCreateNestedOneWithoutCreated_issuesInput = {
    create?: XOR<JiraUserCreateWithoutCreated_issuesInput, JiraUserUncheckedCreateWithoutCreated_issuesInput>
    connectOrCreate?: JiraUserCreateOrConnectWithoutCreated_issuesInput
    connect?: JiraUserWhereUniqueInput
  }

  export type JiraUserCreateNestedOneWithoutAssigned_issuesInput = {
    create?: XOR<JiraUserCreateWithoutAssigned_issuesInput, JiraUserUncheckedCreateWithoutAssigned_issuesInput>
    connectOrCreate?: JiraUserCreateOrConnectWithoutAssigned_issuesInput
    connect?: JiraUserWhereUniqueInput
  }

  export type JiraEventCreateNestedManyWithoutIssueInput = {
    create?: XOR<JiraEventCreateWithoutIssueInput, JiraEventUncheckedCreateWithoutIssueInput> | JiraEventCreateWithoutIssueInput[] | JiraEventUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutIssueInput | JiraEventCreateOrConnectWithoutIssueInput[]
    createMany?: JiraEventCreateManyIssueInputEnvelope
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
  }

  export type JiraEventUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<JiraEventCreateWithoutIssueInput, JiraEventUncheckedCreateWithoutIssueInput> | JiraEventCreateWithoutIssueInput[] | JiraEventUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutIssueInput | JiraEventCreateOrConnectWithoutIssueInput[]
    createMany?: JiraEventCreateManyIssueInputEnvelope
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type JiraProjectUpdateOneWithoutIssuesNestedInput = {
    create?: XOR<JiraProjectCreateWithoutIssuesInput, JiraProjectUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: JiraProjectCreateOrConnectWithoutIssuesInput
    upsert?: JiraProjectUpsertWithoutIssuesInput
    disconnect?: JiraProjectWhereInput | boolean
    delete?: JiraProjectWhereInput | boolean
    connect?: JiraProjectWhereUniqueInput
    update?: XOR<XOR<JiraProjectUpdateToOneWithWhereWithoutIssuesInput, JiraProjectUpdateWithoutIssuesInput>, JiraProjectUncheckedUpdateWithoutIssuesInput>
  }

  export type JiraUserUpdateOneWithoutCreated_issuesNestedInput = {
    create?: XOR<JiraUserCreateWithoutCreated_issuesInput, JiraUserUncheckedCreateWithoutCreated_issuesInput>
    connectOrCreate?: JiraUserCreateOrConnectWithoutCreated_issuesInput
    upsert?: JiraUserUpsertWithoutCreated_issuesInput
    disconnect?: JiraUserWhereInput | boolean
    delete?: JiraUserWhereInput | boolean
    connect?: JiraUserWhereUniqueInput
    update?: XOR<XOR<JiraUserUpdateToOneWithWhereWithoutCreated_issuesInput, JiraUserUpdateWithoutCreated_issuesInput>, JiraUserUncheckedUpdateWithoutCreated_issuesInput>
  }

  export type JiraUserUpdateOneWithoutAssigned_issuesNestedInput = {
    create?: XOR<JiraUserCreateWithoutAssigned_issuesInput, JiraUserUncheckedCreateWithoutAssigned_issuesInput>
    connectOrCreate?: JiraUserCreateOrConnectWithoutAssigned_issuesInput
    upsert?: JiraUserUpsertWithoutAssigned_issuesInput
    disconnect?: JiraUserWhereInput | boolean
    delete?: JiraUserWhereInput | boolean
    connect?: JiraUserWhereUniqueInput
    update?: XOR<XOR<JiraUserUpdateToOneWithWhereWithoutAssigned_issuesInput, JiraUserUpdateWithoutAssigned_issuesInput>, JiraUserUncheckedUpdateWithoutAssigned_issuesInput>
  }

  export type JiraEventUpdateManyWithoutIssueNestedInput = {
    create?: XOR<JiraEventCreateWithoutIssueInput, JiraEventUncheckedCreateWithoutIssueInput> | JiraEventCreateWithoutIssueInput[] | JiraEventUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutIssueInput | JiraEventCreateOrConnectWithoutIssueInput[]
    upsert?: JiraEventUpsertWithWhereUniqueWithoutIssueInput | JiraEventUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: JiraEventCreateManyIssueInputEnvelope
    set?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    disconnect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    delete?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    update?: JiraEventUpdateWithWhereUniqueWithoutIssueInput | JiraEventUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: JiraEventUpdateManyWithWhereWithoutIssueInput | JiraEventUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: JiraEventScalarWhereInput | JiraEventScalarWhereInput[]
  }

  export type JiraEventUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: XOR<JiraEventCreateWithoutIssueInput, JiraEventUncheckedCreateWithoutIssueInput> | JiraEventCreateWithoutIssueInput[] | JiraEventUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: JiraEventCreateOrConnectWithoutIssueInput | JiraEventCreateOrConnectWithoutIssueInput[]
    upsert?: JiraEventUpsertWithWhereUniqueWithoutIssueInput | JiraEventUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: JiraEventCreateManyIssueInputEnvelope
    set?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    disconnect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    delete?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    connect?: JiraEventWhereUniqueInput | JiraEventWhereUniqueInput[]
    update?: JiraEventUpdateWithWhereUniqueWithoutIssueInput | JiraEventUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: JiraEventUpdateManyWithWhereWithoutIssueInput | JiraEventUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: JiraEventScalarWhereInput | JiraEventScalarWhereInput[]
  }

  export type JiraEventCreateNestedOneWithoutPayloadInput = {
    create?: XOR<JiraEventCreateWithoutPayloadInput, JiraEventUncheckedCreateWithoutPayloadInput>
    connectOrCreate?: JiraEventCreateOrConnectWithoutPayloadInput
    connect?: JiraEventWhereUniqueInput
  }

  export type JiraEventUpdateOneRequiredWithoutPayloadNestedInput = {
    create?: XOR<JiraEventCreateWithoutPayloadInput, JiraEventUncheckedCreateWithoutPayloadInput>
    connectOrCreate?: JiraEventCreateOrConnectWithoutPayloadInput
    upsert?: JiraEventUpsertWithoutPayloadInput
    connect?: JiraEventWhereUniqueInput
    update?: XOR<XOR<JiraEventUpdateToOneWithWhereWithoutPayloadInput, JiraEventUpdateWithoutPayloadInput>, JiraEventUncheckedUpdateWithoutPayloadInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[]
    notIn?: $Enums.SourceType[]
    not?: NestedEnumSourceTypeFilter<$PrismaModel> | $Enums.SourceType
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[]
    notIn?: $Enums.SourceType[]
    not?: NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EventCreateWithoutProjectInput = {
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    author?: UserCreateNestedOneWithoutEventsInput
    reviewer?: UserCreateNestedOneWithoutReviewed_eventsInput
    ticket?: TicketCreateNestedOneWithoutEventsInput
    payload?: PayloadCreateNestedOneWithoutEventInput
    revision?: RevisionCreateNestedOneWithoutPr_eventInput
  }

  export type EventUncheckedCreateWithoutProjectInput = {
    id?: number
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    payload?: PayloadUncheckedCreateNestedOneWithoutEventInput
    revision?: RevisionUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventCreateOrConnectWithoutProjectInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutProjectInput, EventUncheckedCreateWithoutProjectInput>
  }

  export type EventCreateManyProjectInputEnvelope = {
    data: EventCreateManyProjectInput | EventCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutProjectInput = {
    code: string
    events?: EventCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutProjectInput = {
    id?: number
    code: string
    events?: EventUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutProjectInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput>
  }

  export type TicketCreateManyProjectInputEnvelope = {
    data: TicketCreateManyProjectInput | TicketCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProjectsInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    events?: EventCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    events?: EventUncheckedCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventUncheckedCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionUncheckedCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type EventUpsertWithWhereUniqueWithoutProjectInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutProjectInput, EventUncheckedUpdateWithoutProjectInput>
    create: XOR<EventCreateWithoutProjectInput, EventUncheckedCreateWithoutProjectInput>
  }

  export type EventUpdateWithWhereUniqueWithoutProjectInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutProjectInput, EventUncheckedUpdateWithoutProjectInput>
  }

  export type EventUpdateManyWithWhereWithoutProjectInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutProjectInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    project_id?: IntNullableFilter<"Event"> | number | null
    author_id?: IntNullableFilter<"Event"> | number | null
    reviewer_id?: IntNullableFilter<"Event"> | number | null
    ticket_id?: IntNullableFilter<"Event"> | number | null
    source?: EnumSourceTypeFilter<"Event"> | $Enums.SourceType
    branch?: StringNullableFilter<"Event"> | string | null
    pr_number?: IntNullableFilter<"Event"> | number | null
    additions?: IntNullableFilter<"Event"> | number | null
    deletions?: IntNullableFilter<"Event"> | number | null
    changed_files?: IntNullableFilter<"Event"> | number | null
    event_type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    date_created?: DateTimeFilter<"Event"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutProjectInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutProjectInput, TicketUncheckedUpdateWithoutProjectInput>
    create: XOR<TicketCreateWithoutProjectInput, TicketUncheckedCreateWithoutProjectInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutProjectInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutProjectInput, TicketUncheckedUpdateWithoutProjectInput>
  }

  export type TicketUpdateManyWithWhereWithoutProjectInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutProjectInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    code?: StringFilter<"Ticket"> | string
    project_id?: IntFilter<"Ticket"> | number
  }

  export type UserUpsertWithWhereUniqueWithoutProjectsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProjectsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateManyWithWhereWithoutProjectsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProjectsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
  }

  export type ProjectCreateWithoutContributorsInput = {
    name: string
    repository: string
    events?: EventCreateNestedManyWithoutProjectInput
    tickets?: TicketCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutContributorsInput = {
    id?: number
    name: string
    repository: string
    events?: EventUncheckedCreateNestedManyWithoutProjectInput
    tickets?: TicketUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutContributorsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutContributorsInput, ProjectUncheckedCreateWithoutContributorsInput>
  }

  export type EventCreateWithoutAuthorInput = {
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    project?: ProjectCreateNestedOneWithoutEventsInput
    reviewer?: UserCreateNestedOneWithoutReviewed_eventsInput
    ticket?: TicketCreateNestedOneWithoutEventsInput
    payload?: PayloadCreateNestedOneWithoutEventInput
    revision?: RevisionCreateNestedOneWithoutPr_eventInput
  }

  export type EventUncheckedCreateWithoutAuthorInput = {
    id?: number
    project_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    payload?: PayloadUncheckedCreateNestedOneWithoutEventInput
    revision?: RevisionUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventCreateOrConnectWithoutAuthorInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAuthorInput, EventUncheckedCreateWithoutAuthorInput>
  }

  export type EventCreateManyAuthorInputEnvelope = {
    data: EventCreateManyAuthorInput | EventCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutReviewerInput = {
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    project?: ProjectCreateNestedOneWithoutEventsInput
    author?: UserCreateNestedOneWithoutEventsInput
    ticket?: TicketCreateNestedOneWithoutEventsInput
    payload?: PayloadCreateNestedOneWithoutEventInput
    revision?: RevisionCreateNestedOneWithoutPr_eventInput
  }

  export type EventUncheckedCreateWithoutReviewerInput = {
    id?: number
    project_id?: number | null
    author_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    payload?: PayloadUncheckedCreateNestedOneWithoutEventInput
    revision?: RevisionUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventCreateOrConnectWithoutReviewerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReviewerInput, EventUncheckedCreateWithoutReviewerInput>
  }

  export type EventCreateManyReviewerInputEnvelope = {
    data: EventCreateManyReviewerInput | EventCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type RevisionCreateWithoutUserInput = {
    reviewer?: UserCreateNestedOneWithoutReviewedRevisionsInput
    pr_event: EventCreateNestedOneWithoutRevisionInput
  }

  export type RevisionUncheckedCreateWithoutUserInput = {
    id?: number
    reviewer_id?: number | null
    pr_event_id: number
  }

  export type RevisionCreateOrConnectWithoutUserInput = {
    where: RevisionWhereUniqueInput
    create: XOR<RevisionCreateWithoutUserInput, RevisionUncheckedCreateWithoutUserInput>
  }

  export type RevisionCreateManyUserInputEnvelope = {
    data: RevisionCreateManyUserInput | RevisionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RevisionCreateWithoutReviewerInput = {
    user: UserCreateNestedOneWithoutAuthoredRevisionsInput
    pr_event: EventCreateNestedOneWithoutRevisionInput
  }

  export type RevisionUncheckedCreateWithoutReviewerInput = {
    id?: number
    user_id: number
    pr_event_id: number
  }

  export type RevisionCreateOrConnectWithoutReviewerInput = {
    where: RevisionWhereUniqueInput
    create: XOR<RevisionCreateWithoutReviewerInput, RevisionUncheckedCreateWithoutReviewerInput>
  }

  export type RevisionCreateManyReviewerInputEnvelope = {
    data: RevisionCreateManyReviewerInput | RevisionCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutContributorsInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutContributorsInput, ProjectUncheckedUpdateWithoutContributorsInput>
    create: XOR<ProjectCreateWithoutContributorsInput, ProjectUncheckedCreateWithoutContributorsInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutContributorsInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutContributorsInput, ProjectUncheckedUpdateWithoutContributorsInput>
  }

  export type ProjectUpdateManyWithWhereWithoutContributorsInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutContributorsInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    repository?: StringFilter<"Project"> | string
  }

  export type EventUpsertWithWhereUniqueWithoutAuthorInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutAuthorInput, EventUncheckedUpdateWithoutAuthorInput>
    create: XOR<EventCreateWithoutAuthorInput, EventUncheckedCreateWithoutAuthorInput>
  }

  export type EventUpdateWithWhereUniqueWithoutAuthorInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutAuthorInput, EventUncheckedUpdateWithoutAuthorInput>
  }

  export type EventUpdateManyWithWhereWithoutAuthorInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutAuthorInput>
  }

  export type EventUpsertWithWhereUniqueWithoutReviewerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutReviewerInput, EventUncheckedUpdateWithoutReviewerInput>
    create: XOR<EventCreateWithoutReviewerInput, EventUncheckedCreateWithoutReviewerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutReviewerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutReviewerInput, EventUncheckedUpdateWithoutReviewerInput>
  }

  export type EventUpdateManyWithWhereWithoutReviewerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutReviewerInput>
  }

  export type RevisionUpsertWithWhereUniqueWithoutUserInput = {
    where: RevisionWhereUniqueInput
    update: XOR<RevisionUpdateWithoutUserInput, RevisionUncheckedUpdateWithoutUserInput>
    create: XOR<RevisionCreateWithoutUserInput, RevisionUncheckedCreateWithoutUserInput>
  }

  export type RevisionUpdateWithWhereUniqueWithoutUserInput = {
    where: RevisionWhereUniqueInput
    data: XOR<RevisionUpdateWithoutUserInput, RevisionUncheckedUpdateWithoutUserInput>
  }

  export type RevisionUpdateManyWithWhereWithoutUserInput = {
    where: RevisionScalarWhereInput
    data: XOR<RevisionUpdateManyMutationInput, RevisionUncheckedUpdateManyWithoutUserInput>
  }

  export type RevisionScalarWhereInput = {
    AND?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
    OR?: RevisionScalarWhereInput[]
    NOT?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
    id?: IntFilter<"Revision"> | number
    user_id?: IntFilter<"Revision"> | number
    reviewer_id?: IntNullableFilter<"Revision"> | number | null
    pr_event_id?: IntFilter<"Revision"> | number
  }

  export type RevisionUpsertWithWhereUniqueWithoutReviewerInput = {
    where: RevisionWhereUniqueInput
    update: XOR<RevisionUpdateWithoutReviewerInput, RevisionUncheckedUpdateWithoutReviewerInput>
    create: XOR<RevisionCreateWithoutReviewerInput, RevisionUncheckedCreateWithoutReviewerInput>
  }

  export type RevisionUpdateWithWhereUniqueWithoutReviewerInput = {
    where: RevisionWhereUniqueInput
    data: XOR<RevisionUpdateWithoutReviewerInput, RevisionUncheckedUpdateWithoutReviewerInput>
  }

  export type RevisionUpdateManyWithWhereWithoutReviewerInput = {
    where: RevisionScalarWhereInput
    data: XOR<RevisionUpdateManyMutationInput, RevisionUncheckedUpdateManyWithoutReviewerInput>
  }

  export type EventCreateWithoutTicketInput = {
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    project?: ProjectCreateNestedOneWithoutEventsInput
    author?: UserCreateNestedOneWithoutEventsInput
    reviewer?: UserCreateNestedOneWithoutReviewed_eventsInput
    payload?: PayloadCreateNestedOneWithoutEventInput
    revision?: RevisionCreateNestedOneWithoutPr_eventInput
  }

  export type EventUncheckedCreateWithoutTicketInput = {
    id?: number
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    payload?: PayloadUncheckedCreateNestedOneWithoutEventInput
    revision?: RevisionUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventCreateOrConnectWithoutTicketInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
  }

  export type EventCreateManyTicketInputEnvelope = {
    data: EventCreateManyTicketInput | EventCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutTicketsInput = {
    name: string
    repository: string
    events?: EventCreateNestedManyWithoutProjectInput
    contributors?: UserCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutTicketsInput = {
    id?: number
    name: string
    repository: string
    events?: EventUncheckedCreateNestedManyWithoutProjectInput
    contributors?: UserUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutTicketsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTicketsInput, ProjectUncheckedCreateWithoutTicketsInput>
  }

  export type EventUpsertWithWhereUniqueWithoutTicketInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
  }

  export type EventUpdateWithWhereUniqueWithoutTicketInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
  }

  export type EventUpdateManyWithWhereWithoutTicketInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutTicketInput>
  }

  export type ProjectUpsertWithoutTicketsInput = {
    update: XOR<ProjectUpdateWithoutTicketsInput, ProjectUncheckedUpdateWithoutTicketsInput>
    create: XOR<ProjectCreateWithoutTicketsInput, ProjectUncheckedCreateWithoutTicketsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTicketsInput, ProjectUncheckedUpdateWithoutTicketsInput>
  }

  export type ProjectUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutProjectNestedInput
    contributors?: UserUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutProjectNestedInput
    contributors?: UserUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectCreateWithoutEventsInput = {
    name: string
    repository: string
    tickets?: TicketCreateNestedManyWithoutProjectInput
    contributors?: UserCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    repository: string
    tickets?: TicketUncheckedCreateNestedManyWithoutProjectInput
    contributors?: UserUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutEventsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEventsInput, ProjectUncheckedCreateWithoutEventsInput>
  }

  export type UserCreateWithoutEventsInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectCreateNestedManyWithoutContributorsInput
    reviewed_events?: EventCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutContributorsInput
    reviewed_events?: EventUncheckedCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionUncheckedCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type UserCreateWithoutReviewed_eventsInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectCreateNestedManyWithoutContributorsInput
    events?: EventCreateNestedManyWithoutAuthorInput
    authoredRevisions?: RevisionCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutReviewed_eventsInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutContributorsInput
    events?: EventUncheckedCreateNestedManyWithoutAuthorInput
    authoredRevisions?: RevisionUncheckedCreateNestedManyWithoutUserInput
    reviewedRevisions?: RevisionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutReviewed_eventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewed_eventsInput, UserUncheckedCreateWithoutReviewed_eventsInput>
  }

  export type TicketCreateWithoutEventsInput = {
    code: string
    project: ProjectCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutEventsInput = {
    id?: number
    code: string
    project_id: number
  }

  export type TicketCreateOrConnectWithoutEventsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventsInput, TicketUncheckedCreateWithoutEventsInput>
  }

  export type PayloadCreateWithoutEventInput = {
    raw_payload: JsonNullValueInput | InputJsonValue
  }

  export type PayloadUncheckedCreateWithoutEventInput = {
    id?: number
    raw_payload: JsonNullValueInput | InputJsonValue
  }

  export type PayloadCreateOrConnectWithoutEventInput = {
    where: PayloadWhereUniqueInput
    create: XOR<PayloadCreateWithoutEventInput, PayloadUncheckedCreateWithoutEventInput>
  }

  export type RevisionCreateWithoutPr_eventInput = {
    user: UserCreateNestedOneWithoutAuthoredRevisionsInput
    reviewer?: UserCreateNestedOneWithoutReviewedRevisionsInput
  }

  export type RevisionUncheckedCreateWithoutPr_eventInput = {
    id?: number
    user_id: number
    reviewer_id?: number | null
  }

  export type RevisionCreateOrConnectWithoutPr_eventInput = {
    where: RevisionWhereUniqueInput
    create: XOR<RevisionCreateWithoutPr_eventInput, RevisionUncheckedCreateWithoutPr_eventInput>
  }

  export type ProjectUpsertWithoutEventsInput = {
    update: XOR<ProjectUpdateWithoutEventsInput, ProjectUncheckedUpdateWithoutEventsInput>
    create: XOR<ProjectCreateWithoutEventsInput, ProjectUncheckedCreateWithoutEventsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutEventsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutEventsInput, ProjectUncheckedUpdateWithoutEventsInput>
  }

  export type ProjectUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutProjectNestedInput
    contributors?: UserUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutProjectNestedInput
    contributors?: UserUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutContributorsNestedInput
    reviewed_events?: EventUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutContributorsNestedInput
    reviewed_events?: EventUncheckedUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionUncheckedUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserUpsertWithoutReviewed_eventsInput = {
    update: XOR<UserUpdateWithoutReviewed_eventsInput, UserUncheckedUpdateWithoutReviewed_eventsInput>
    create: XOR<UserCreateWithoutReviewed_eventsInput, UserUncheckedCreateWithoutReviewed_eventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewed_eventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewed_eventsInput, UserUncheckedUpdateWithoutReviewed_eventsInput>
  }

  export type UserUpdateWithoutReviewed_eventsInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutContributorsNestedInput
    events?: EventUpdateManyWithoutAuthorNestedInput
    authoredRevisions?: RevisionUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewed_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutContributorsNestedInput
    events?: EventUncheckedUpdateManyWithoutAuthorNestedInput
    authoredRevisions?: RevisionUncheckedUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type TicketUpsertWithoutEventsInput = {
    update: XOR<TicketUpdateWithoutEventsInput, TicketUncheckedUpdateWithoutEventsInput>
    create: XOR<TicketCreateWithoutEventsInput, TicketUncheckedCreateWithoutEventsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutEventsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutEventsInput, TicketUncheckedUpdateWithoutEventsInput>
  }

  export type TicketUpdateWithoutEventsInput = {
    code?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    project_id?: IntFieldUpdateOperationsInput | number
  }

  export type PayloadUpsertWithoutEventInput = {
    update: XOR<PayloadUpdateWithoutEventInput, PayloadUncheckedUpdateWithoutEventInput>
    create: XOR<PayloadCreateWithoutEventInput, PayloadUncheckedCreateWithoutEventInput>
    where?: PayloadWhereInput
  }

  export type PayloadUpdateToOneWithWhereWithoutEventInput = {
    where?: PayloadWhereInput
    data: XOR<PayloadUpdateWithoutEventInput, PayloadUncheckedUpdateWithoutEventInput>
  }

  export type PayloadUpdateWithoutEventInput = {
    raw_payload?: JsonNullValueInput | InputJsonValue
  }

  export type PayloadUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    raw_payload?: JsonNullValueInput | InputJsonValue
  }

  export type RevisionUpsertWithoutPr_eventInput = {
    update: XOR<RevisionUpdateWithoutPr_eventInput, RevisionUncheckedUpdateWithoutPr_eventInput>
    create: XOR<RevisionCreateWithoutPr_eventInput, RevisionUncheckedCreateWithoutPr_eventInput>
    where?: RevisionWhereInput
  }

  export type RevisionUpdateToOneWithWhereWithoutPr_eventInput = {
    where?: RevisionWhereInput
    data: XOR<RevisionUpdateWithoutPr_eventInput, RevisionUncheckedUpdateWithoutPr_eventInput>
  }

  export type RevisionUpdateWithoutPr_eventInput = {
    user?: UserUpdateOneRequiredWithoutAuthoredRevisionsNestedInput
    reviewer?: UserUpdateOneWithoutReviewedRevisionsNestedInput
  }

  export type RevisionUncheckedUpdateWithoutPr_eventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventCreateWithoutPayloadInput = {
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    project?: ProjectCreateNestedOneWithoutEventsInput
    author?: UserCreateNestedOneWithoutEventsInput
    reviewer?: UserCreateNestedOneWithoutReviewed_eventsInput
    ticket?: TicketCreateNestedOneWithoutEventsInput
    revision?: RevisionCreateNestedOneWithoutPr_eventInput
  }

  export type EventUncheckedCreateWithoutPayloadInput = {
    id?: number
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    revision?: RevisionUncheckedCreateNestedOneWithoutPr_eventInput
  }

  export type EventCreateOrConnectWithoutPayloadInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPayloadInput, EventUncheckedCreateWithoutPayloadInput>
  }

  export type EventUpsertWithoutPayloadInput = {
    update: XOR<EventUpdateWithoutPayloadInput, EventUncheckedUpdateWithoutPayloadInput>
    create: XOR<EventCreateWithoutPayloadInput, EventUncheckedCreateWithoutPayloadInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutPayloadInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutPayloadInput, EventUncheckedUpdateWithoutPayloadInput>
  }

  export type EventUpdateWithoutPayloadInput = {
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutEventsNestedInput
    author?: UserUpdateOneWithoutEventsNestedInput
    reviewer?: UserUpdateOneWithoutReviewed_eventsNestedInput
    ticket?: TicketUpdateOneWithoutEventsNestedInput
    revision?: RevisionUpdateOneWithoutPr_eventNestedInput
  }

  export type EventUncheckedUpdateWithoutPayloadInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    revision?: RevisionUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type UserCreateWithoutAuthoredRevisionsInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectCreateNestedManyWithoutContributorsInput
    events?: EventCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventCreateNestedManyWithoutReviewerInput
    reviewedRevisions?: RevisionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutAuthoredRevisionsInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutContributorsInput
    events?: EventUncheckedCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventUncheckedCreateNestedManyWithoutReviewerInput
    reviewedRevisions?: RevisionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutAuthoredRevisionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthoredRevisionsInput, UserUncheckedCreateWithoutAuthoredRevisionsInput>
  }

  export type UserCreateWithoutReviewedRevisionsInput = {
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectCreateNestedManyWithoutContributorsInput
    events?: EventCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewedRevisionsInput = {
    id?: number
    username: string
    first_name?: string | null
    last_name?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutContributorsInput
    events?: EventUncheckedCreateNestedManyWithoutAuthorInput
    reviewed_events?: EventUncheckedCreateNestedManyWithoutReviewerInput
    authoredRevisions?: RevisionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewedRevisionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewedRevisionsInput, UserUncheckedCreateWithoutReviewedRevisionsInput>
  }

  export type EventCreateWithoutRevisionInput = {
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    project?: ProjectCreateNestedOneWithoutEventsInput
    author?: UserCreateNestedOneWithoutEventsInput
    reviewer?: UserCreateNestedOneWithoutReviewed_eventsInput
    ticket?: TicketCreateNestedOneWithoutEventsInput
    payload?: PayloadCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutRevisionInput = {
    id?: number
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
    payload?: PayloadUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutRevisionInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRevisionInput, EventUncheckedCreateWithoutRevisionInput>
  }

  export type UserUpsertWithoutAuthoredRevisionsInput = {
    update: XOR<UserUpdateWithoutAuthoredRevisionsInput, UserUncheckedUpdateWithoutAuthoredRevisionsInput>
    create: XOR<UserCreateWithoutAuthoredRevisionsInput, UserUncheckedCreateWithoutAuthoredRevisionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthoredRevisionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthoredRevisionsInput, UserUncheckedUpdateWithoutAuthoredRevisionsInput>
  }

  export type UserUpdateWithoutAuthoredRevisionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutContributorsNestedInput
    events?: EventUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventUpdateManyWithoutReviewerNestedInput
    reviewedRevisions?: RevisionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthoredRevisionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutContributorsNestedInput
    events?: EventUncheckedUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventUncheckedUpdateManyWithoutReviewerNestedInput
    reviewedRevisions?: RevisionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserUpsertWithoutReviewedRevisionsInput = {
    update: XOR<UserUpdateWithoutReviewedRevisionsInput, UserUncheckedUpdateWithoutReviewedRevisionsInput>
    create: XOR<UserCreateWithoutReviewedRevisionsInput, UserUncheckedCreateWithoutReviewedRevisionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewedRevisionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewedRevisionsInput, UserUncheckedUpdateWithoutReviewedRevisionsInput>
  }

  export type UserUpdateWithoutReviewedRevisionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutContributorsNestedInput
    events?: EventUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewedRevisionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutContributorsNestedInput
    events?: EventUncheckedUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventUncheckedUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutRevisionInput = {
    update: XOR<EventUpdateWithoutRevisionInput, EventUncheckedUpdateWithoutRevisionInput>
    create: XOR<EventCreateWithoutRevisionInput, EventUncheckedCreateWithoutRevisionInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRevisionInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRevisionInput, EventUncheckedUpdateWithoutRevisionInput>
  }

  export type EventUpdateWithoutRevisionInput = {
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutEventsNestedInput
    author?: UserUpdateOneWithoutEventsNestedInput
    reviewer?: UserUpdateOneWithoutReviewed_eventsNestedInput
    ticket?: TicketUpdateOneWithoutEventsNestedInput
    payload?: PayloadUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutRevisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadUncheckedUpdateOneWithoutEventNestedInput
  }

  export type JiraIssueCreateWithoutEventsInput = {
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    project?: JiraProjectCreateNestedOneWithoutIssuesInput
    creator?: JiraUserCreateNestedOneWithoutCreated_issuesInput
    assignee?: JiraUserCreateNestedOneWithoutAssigned_issuesInput
  }

  export type JiraIssueUncheckedCreateWithoutEventsInput = {
    id?: number
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    project_id?: number | null
    creator_id?: number | null
    assignee_id?: number | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JiraIssueCreateOrConnectWithoutEventsInput = {
    where: JiraIssueWhereUniqueInput
    create: XOR<JiraIssueCreateWithoutEventsInput, JiraIssueUncheckedCreateWithoutEventsInput>
  }

  export type JiraProjectCreateWithoutJiraEventInput = {
    key: string
    name: string
    created_at?: Date | string
    issues?: JiraIssueCreateNestedManyWithoutProjectInput
  }

  export type JiraProjectUncheckedCreateWithoutJiraEventInput = {
    id?: number
    key: string
    name: string
    created_at?: Date | string
    issues?: JiraIssueUncheckedCreateNestedManyWithoutProjectInput
  }

  export type JiraProjectCreateOrConnectWithoutJiraEventInput = {
    where: JiraProjectWhereUniqueInput
    create: XOR<JiraProjectCreateWithoutJiraEventInput, JiraProjectUncheckedCreateWithoutJiraEventInput>
  }

  export type JiraUserCreateWithoutJiraEventInput = {
    account_id: string
    display_name?: string | null
    created_issues?: JiraIssueCreateNestedManyWithoutCreatorInput
    assigned_issues?: JiraIssueCreateNestedManyWithoutAssigneeInput
  }

  export type JiraUserUncheckedCreateWithoutJiraEventInput = {
    id?: number
    account_id: string
    display_name?: string | null
    created_issues?: JiraIssueUncheckedCreateNestedManyWithoutCreatorInput
    assigned_issues?: JiraIssueUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type JiraUserCreateOrConnectWithoutJiraEventInput = {
    where: JiraUserWhereUniqueInput
    create: XOR<JiraUserCreateWithoutJiraEventInput, JiraUserUncheckedCreateWithoutJiraEventInput>
  }

  export type JiraPayloadCreateWithoutEventInput = {
    raw_payload: JsonNullValueInput | InputJsonValue
  }

  export type JiraPayloadUncheckedCreateWithoutEventInput = {
    id?: number
    raw_payload: JsonNullValueInput | InputJsonValue
  }

  export type JiraPayloadCreateOrConnectWithoutEventInput = {
    where: JiraPayloadWhereUniqueInput
    create: XOR<JiraPayloadCreateWithoutEventInput, JiraPayloadUncheckedCreateWithoutEventInput>
  }

  export type JiraIssueUpsertWithoutEventsInput = {
    update: XOR<JiraIssueUpdateWithoutEventsInput, JiraIssueUncheckedUpdateWithoutEventsInput>
    create: XOR<JiraIssueCreateWithoutEventsInput, JiraIssueUncheckedCreateWithoutEventsInput>
    where?: JiraIssueWhereInput
  }

  export type JiraIssueUpdateToOneWithWhereWithoutEventsInput = {
    where?: JiraIssueWhereInput
    data: XOR<JiraIssueUpdateWithoutEventsInput, JiraIssueUncheckedUpdateWithoutEventsInput>
  }

  export type JiraIssueUpdateWithoutEventsInput = {
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    project?: JiraProjectUpdateOneWithoutIssuesNestedInput
    creator?: JiraUserUpdateOneWithoutCreated_issuesNestedInput
    assignee?: JiraUserUpdateOneWithoutAssigned_issuesNestedInput
  }

  export type JiraIssueUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    assignee_id?: NullableIntFieldUpdateOperationsInput | number | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JiraProjectUpsertWithoutJiraEventInput = {
    update: XOR<JiraProjectUpdateWithoutJiraEventInput, JiraProjectUncheckedUpdateWithoutJiraEventInput>
    create: XOR<JiraProjectCreateWithoutJiraEventInput, JiraProjectUncheckedCreateWithoutJiraEventInput>
    where?: JiraProjectWhereInput
  }

  export type JiraProjectUpdateToOneWithWhereWithoutJiraEventInput = {
    where?: JiraProjectWhereInput
    data: XOR<JiraProjectUpdateWithoutJiraEventInput, JiraProjectUncheckedUpdateWithoutJiraEventInput>
  }

  export type JiraProjectUpdateWithoutJiraEventInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: JiraIssueUpdateManyWithoutProjectNestedInput
  }

  export type JiraProjectUncheckedUpdateWithoutJiraEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: JiraIssueUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type JiraUserUpsertWithoutJiraEventInput = {
    update: XOR<JiraUserUpdateWithoutJiraEventInput, JiraUserUncheckedUpdateWithoutJiraEventInput>
    create: XOR<JiraUserCreateWithoutJiraEventInput, JiraUserUncheckedCreateWithoutJiraEventInput>
    where?: JiraUserWhereInput
  }

  export type JiraUserUpdateToOneWithWhereWithoutJiraEventInput = {
    where?: JiraUserWhereInput
    data: XOR<JiraUserUpdateWithoutJiraEventInput, JiraUserUncheckedUpdateWithoutJiraEventInput>
  }

  export type JiraUserUpdateWithoutJiraEventInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_issues?: JiraIssueUpdateManyWithoutCreatorNestedInput
    assigned_issues?: JiraIssueUpdateManyWithoutAssigneeNestedInput
  }

  export type JiraUserUncheckedUpdateWithoutJiraEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_issues?: JiraIssueUncheckedUpdateManyWithoutCreatorNestedInput
    assigned_issues?: JiraIssueUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type JiraPayloadUpsertWithoutEventInput = {
    update: XOR<JiraPayloadUpdateWithoutEventInput, JiraPayloadUncheckedUpdateWithoutEventInput>
    create: XOR<JiraPayloadCreateWithoutEventInput, JiraPayloadUncheckedCreateWithoutEventInput>
    where?: JiraPayloadWhereInput
  }

  export type JiraPayloadUpdateToOneWithWhereWithoutEventInput = {
    where?: JiraPayloadWhereInput
    data: XOR<JiraPayloadUpdateWithoutEventInput, JiraPayloadUncheckedUpdateWithoutEventInput>
  }

  export type JiraPayloadUpdateWithoutEventInput = {
    raw_payload?: JsonNullValueInput | InputJsonValue
  }

  export type JiraPayloadUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    raw_payload?: JsonNullValueInput | InputJsonValue
  }

  export type JiraIssueCreateWithoutProjectInput = {
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    creator?: JiraUserCreateNestedOneWithoutCreated_issuesInput
    assignee?: JiraUserCreateNestedOneWithoutAssigned_issuesInput
    events?: JiraEventCreateNestedManyWithoutIssueInput
  }

  export type JiraIssueUncheckedCreateWithoutProjectInput = {
    id?: number
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    creator_id?: number | null
    assignee_id?: number | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    events?: JiraEventUncheckedCreateNestedManyWithoutIssueInput
  }

  export type JiraIssueCreateOrConnectWithoutProjectInput = {
    where: JiraIssueWhereUniqueInput
    create: XOR<JiraIssueCreateWithoutProjectInput, JiraIssueUncheckedCreateWithoutProjectInput>
  }

  export type JiraIssueCreateManyProjectInputEnvelope = {
    data: JiraIssueCreateManyProjectInput | JiraIssueCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type JiraEventCreateWithoutProjectInput = {
    webhook_event: string
    issue_event_type: string
    date_created?: Date | string
    issue?: JiraIssueCreateNestedOneWithoutEventsInput
    user?: JiraUserCreateNestedOneWithoutJiraEventInput
    payload?: JiraPayloadCreateNestedOneWithoutEventInput
  }

  export type JiraEventUncheckedCreateWithoutProjectInput = {
    id?: number
    webhook_event: string
    issue_event_type: string
    issue_id?: number | null
    user_id?: number | null
    date_created?: Date | string
    payload?: JiraPayloadUncheckedCreateNestedOneWithoutEventInput
  }

  export type JiraEventCreateOrConnectWithoutProjectInput = {
    where: JiraEventWhereUniqueInput
    create: XOR<JiraEventCreateWithoutProjectInput, JiraEventUncheckedCreateWithoutProjectInput>
  }

  export type JiraEventCreateManyProjectInputEnvelope = {
    data: JiraEventCreateManyProjectInput | JiraEventCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type JiraIssueUpsertWithWhereUniqueWithoutProjectInput = {
    where: JiraIssueWhereUniqueInput
    update: XOR<JiraIssueUpdateWithoutProjectInput, JiraIssueUncheckedUpdateWithoutProjectInput>
    create: XOR<JiraIssueCreateWithoutProjectInput, JiraIssueUncheckedCreateWithoutProjectInput>
  }

  export type JiraIssueUpdateWithWhereUniqueWithoutProjectInput = {
    where: JiraIssueWhereUniqueInput
    data: XOR<JiraIssueUpdateWithoutProjectInput, JiraIssueUncheckedUpdateWithoutProjectInput>
  }

  export type JiraIssueUpdateManyWithWhereWithoutProjectInput = {
    where: JiraIssueScalarWhereInput
    data: XOR<JiraIssueUpdateManyMutationInput, JiraIssueUncheckedUpdateManyWithoutProjectInput>
  }

  export type JiraIssueScalarWhereInput = {
    AND?: JiraIssueScalarWhereInput | JiraIssueScalarWhereInput[]
    OR?: JiraIssueScalarWhereInput[]
    NOT?: JiraIssueScalarWhereInput | JiraIssueScalarWhereInput[]
    id?: IntFilter<"JiraIssue"> | number
    issue_id?: StringFilter<"JiraIssue"> | string
    summary?: StringNullableFilter<"JiraIssue"> | string | null
    key?: StringFilter<"JiraIssue"> | string
    status_name?: StringNullableFilter<"JiraIssue"> | string | null
    status_id?: StringNullableFilter<"JiraIssue"> | string | null
    timespent?: IntNullableFilter<"JiraIssue"> | number | null
    timeestimate?: IntNullableFilter<"JiraIssue"> | number | null
    created_at?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    resolution_date?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    project_id?: IntNullableFilter<"JiraIssue"> | number | null
    creator_id?: IntNullableFilter<"JiraIssue"> | number | null
    assignee_id?: IntNullableFilter<"JiraIssue"> | number | null
    sprint_name?: StringNullableFilter<"JiraIssue"> | string | null
    sprint_start?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    sprint_end?: DateTimeNullableFilter<"JiraIssue"> | Date | string | null
    raw_fields?: JsonNullableFilter<"JiraIssue">
  }

  export type JiraEventUpsertWithWhereUniqueWithoutProjectInput = {
    where: JiraEventWhereUniqueInput
    update: XOR<JiraEventUpdateWithoutProjectInput, JiraEventUncheckedUpdateWithoutProjectInput>
    create: XOR<JiraEventCreateWithoutProjectInput, JiraEventUncheckedCreateWithoutProjectInput>
  }

  export type JiraEventUpdateWithWhereUniqueWithoutProjectInput = {
    where: JiraEventWhereUniqueInput
    data: XOR<JiraEventUpdateWithoutProjectInput, JiraEventUncheckedUpdateWithoutProjectInput>
  }

  export type JiraEventUpdateManyWithWhereWithoutProjectInput = {
    where: JiraEventScalarWhereInput
    data: XOR<JiraEventUpdateManyMutationInput, JiraEventUncheckedUpdateManyWithoutProjectInput>
  }

  export type JiraEventScalarWhereInput = {
    AND?: JiraEventScalarWhereInput | JiraEventScalarWhereInput[]
    OR?: JiraEventScalarWhereInput[]
    NOT?: JiraEventScalarWhereInput | JiraEventScalarWhereInput[]
    id?: IntFilter<"JiraEvent"> | number
    webhook_event?: StringFilter<"JiraEvent"> | string
    issue_event_type?: StringFilter<"JiraEvent"> | string
    issue_id?: IntNullableFilter<"JiraEvent"> | number | null
    project_id?: IntNullableFilter<"JiraEvent"> | number | null
    user_id?: IntNullableFilter<"JiraEvent"> | number | null
    date_created?: DateTimeFilter<"JiraEvent"> | Date | string
  }

  export type JiraIssueCreateWithoutCreatorInput = {
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    project?: JiraProjectCreateNestedOneWithoutIssuesInput
    assignee?: JiraUserCreateNestedOneWithoutAssigned_issuesInput
    events?: JiraEventCreateNestedManyWithoutIssueInput
  }

  export type JiraIssueUncheckedCreateWithoutCreatorInput = {
    id?: number
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    project_id?: number | null
    assignee_id?: number | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    events?: JiraEventUncheckedCreateNestedManyWithoutIssueInput
  }

  export type JiraIssueCreateOrConnectWithoutCreatorInput = {
    where: JiraIssueWhereUniqueInput
    create: XOR<JiraIssueCreateWithoutCreatorInput, JiraIssueUncheckedCreateWithoutCreatorInput>
  }

  export type JiraIssueCreateManyCreatorInputEnvelope = {
    data: JiraIssueCreateManyCreatorInput | JiraIssueCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type JiraIssueCreateWithoutAssigneeInput = {
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    project?: JiraProjectCreateNestedOneWithoutIssuesInput
    creator?: JiraUserCreateNestedOneWithoutCreated_issuesInput
    events?: JiraEventCreateNestedManyWithoutIssueInput
  }

  export type JiraIssueUncheckedCreateWithoutAssigneeInput = {
    id?: number
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    project_id?: number | null
    creator_id?: number | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    events?: JiraEventUncheckedCreateNestedManyWithoutIssueInput
  }

  export type JiraIssueCreateOrConnectWithoutAssigneeInput = {
    where: JiraIssueWhereUniqueInput
    create: XOR<JiraIssueCreateWithoutAssigneeInput, JiraIssueUncheckedCreateWithoutAssigneeInput>
  }

  export type JiraIssueCreateManyAssigneeInputEnvelope = {
    data: JiraIssueCreateManyAssigneeInput | JiraIssueCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type JiraEventCreateWithoutUserInput = {
    webhook_event: string
    issue_event_type: string
    date_created?: Date | string
    issue?: JiraIssueCreateNestedOneWithoutEventsInput
    project?: JiraProjectCreateNestedOneWithoutJiraEventInput
    payload?: JiraPayloadCreateNestedOneWithoutEventInput
  }

  export type JiraEventUncheckedCreateWithoutUserInput = {
    id?: number
    webhook_event: string
    issue_event_type: string
    issue_id?: number | null
    project_id?: number | null
    date_created?: Date | string
    payload?: JiraPayloadUncheckedCreateNestedOneWithoutEventInput
  }

  export type JiraEventCreateOrConnectWithoutUserInput = {
    where: JiraEventWhereUniqueInput
    create: XOR<JiraEventCreateWithoutUserInput, JiraEventUncheckedCreateWithoutUserInput>
  }

  export type JiraEventCreateManyUserInputEnvelope = {
    data: JiraEventCreateManyUserInput | JiraEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JiraIssueUpsertWithWhereUniqueWithoutCreatorInput = {
    where: JiraIssueWhereUniqueInput
    update: XOR<JiraIssueUpdateWithoutCreatorInput, JiraIssueUncheckedUpdateWithoutCreatorInput>
    create: XOR<JiraIssueCreateWithoutCreatorInput, JiraIssueUncheckedCreateWithoutCreatorInput>
  }

  export type JiraIssueUpdateWithWhereUniqueWithoutCreatorInput = {
    where: JiraIssueWhereUniqueInput
    data: XOR<JiraIssueUpdateWithoutCreatorInput, JiraIssueUncheckedUpdateWithoutCreatorInput>
  }

  export type JiraIssueUpdateManyWithWhereWithoutCreatorInput = {
    where: JiraIssueScalarWhereInput
    data: XOR<JiraIssueUpdateManyMutationInput, JiraIssueUncheckedUpdateManyWithoutCreatorInput>
  }

  export type JiraIssueUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: JiraIssueWhereUniqueInput
    update: XOR<JiraIssueUpdateWithoutAssigneeInput, JiraIssueUncheckedUpdateWithoutAssigneeInput>
    create: XOR<JiraIssueCreateWithoutAssigneeInput, JiraIssueUncheckedCreateWithoutAssigneeInput>
  }

  export type JiraIssueUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: JiraIssueWhereUniqueInput
    data: XOR<JiraIssueUpdateWithoutAssigneeInput, JiraIssueUncheckedUpdateWithoutAssigneeInput>
  }

  export type JiraIssueUpdateManyWithWhereWithoutAssigneeInput = {
    where: JiraIssueScalarWhereInput
    data: XOR<JiraIssueUpdateManyMutationInput, JiraIssueUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type JiraEventUpsertWithWhereUniqueWithoutUserInput = {
    where: JiraEventWhereUniqueInput
    update: XOR<JiraEventUpdateWithoutUserInput, JiraEventUncheckedUpdateWithoutUserInput>
    create: XOR<JiraEventCreateWithoutUserInput, JiraEventUncheckedCreateWithoutUserInput>
  }

  export type JiraEventUpdateWithWhereUniqueWithoutUserInput = {
    where: JiraEventWhereUniqueInput
    data: XOR<JiraEventUpdateWithoutUserInput, JiraEventUncheckedUpdateWithoutUserInput>
  }

  export type JiraEventUpdateManyWithWhereWithoutUserInput = {
    where: JiraEventScalarWhereInput
    data: XOR<JiraEventUpdateManyMutationInput, JiraEventUncheckedUpdateManyWithoutUserInput>
  }

  export type JiraProjectCreateWithoutIssuesInput = {
    key: string
    name: string
    created_at?: Date | string
    JiraEvent?: JiraEventCreateNestedManyWithoutProjectInput
  }

  export type JiraProjectUncheckedCreateWithoutIssuesInput = {
    id?: number
    key: string
    name: string
    created_at?: Date | string
    JiraEvent?: JiraEventUncheckedCreateNestedManyWithoutProjectInput
  }

  export type JiraProjectCreateOrConnectWithoutIssuesInput = {
    where: JiraProjectWhereUniqueInput
    create: XOR<JiraProjectCreateWithoutIssuesInput, JiraProjectUncheckedCreateWithoutIssuesInput>
  }

  export type JiraUserCreateWithoutCreated_issuesInput = {
    account_id: string
    display_name?: string | null
    assigned_issues?: JiraIssueCreateNestedManyWithoutAssigneeInput
    JiraEvent?: JiraEventCreateNestedManyWithoutUserInput
  }

  export type JiraUserUncheckedCreateWithoutCreated_issuesInput = {
    id?: number
    account_id: string
    display_name?: string | null
    assigned_issues?: JiraIssueUncheckedCreateNestedManyWithoutAssigneeInput
    JiraEvent?: JiraEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type JiraUserCreateOrConnectWithoutCreated_issuesInput = {
    where: JiraUserWhereUniqueInput
    create: XOR<JiraUserCreateWithoutCreated_issuesInput, JiraUserUncheckedCreateWithoutCreated_issuesInput>
  }

  export type JiraUserCreateWithoutAssigned_issuesInput = {
    account_id: string
    display_name?: string | null
    created_issues?: JiraIssueCreateNestedManyWithoutCreatorInput
    JiraEvent?: JiraEventCreateNestedManyWithoutUserInput
  }

  export type JiraUserUncheckedCreateWithoutAssigned_issuesInput = {
    id?: number
    account_id: string
    display_name?: string | null
    created_issues?: JiraIssueUncheckedCreateNestedManyWithoutCreatorInput
    JiraEvent?: JiraEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type JiraUserCreateOrConnectWithoutAssigned_issuesInput = {
    where: JiraUserWhereUniqueInput
    create: XOR<JiraUserCreateWithoutAssigned_issuesInput, JiraUserUncheckedCreateWithoutAssigned_issuesInput>
  }

  export type JiraEventCreateWithoutIssueInput = {
    webhook_event: string
    issue_event_type: string
    date_created?: Date | string
    project?: JiraProjectCreateNestedOneWithoutJiraEventInput
    user?: JiraUserCreateNestedOneWithoutJiraEventInput
    payload?: JiraPayloadCreateNestedOneWithoutEventInput
  }

  export type JiraEventUncheckedCreateWithoutIssueInput = {
    id?: number
    webhook_event: string
    issue_event_type: string
    project_id?: number | null
    user_id?: number | null
    date_created?: Date | string
    payload?: JiraPayloadUncheckedCreateNestedOneWithoutEventInput
  }

  export type JiraEventCreateOrConnectWithoutIssueInput = {
    where: JiraEventWhereUniqueInput
    create: XOR<JiraEventCreateWithoutIssueInput, JiraEventUncheckedCreateWithoutIssueInput>
  }

  export type JiraEventCreateManyIssueInputEnvelope = {
    data: JiraEventCreateManyIssueInput | JiraEventCreateManyIssueInput[]
    skipDuplicates?: boolean
  }

  export type JiraProjectUpsertWithoutIssuesInput = {
    update: XOR<JiraProjectUpdateWithoutIssuesInput, JiraProjectUncheckedUpdateWithoutIssuesInput>
    create: XOR<JiraProjectCreateWithoutIssuesInput, JiraProjectUncheckedCreateWithoutIssuesInput>
    where?: JiraProjectWhereInput
  }

  export type JiraProjectUpdateToOneWithWhereWithoutIssuesInput = {
    where?: JiraProjectWhereInput
    data: XOR<JiraProjectUpdateWithoutIssuesInput, JiraProjectUncheckedUpdateWithoutIssuesInput>
  }

  export type JiraProjectUpdateWithoutIssuesInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    JiraEvent?: JiraEventUpdateManyWithoutProjectNestedInput
  }

  export type JiraProjectUncheckedUpdateWithoutIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    JiraEvent?: JiraEventUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type JiraUserUpsertWithoutCreated_issuesInput = {
    update: XOR<JiraUserUpdateWithoutCreated_issuesInput, JiraUserUncheckedUpdateWithoutCreated_issuesInput>
    create: XOR<JiraUserCreateWithoutCreated_issuesInput, JiraUserUncheckedCreateWithoutCreated_issuesInput>
    where?: JiraUserWhereInput
  }

  export type JiraUserUpdateToOneWithWhereWithoutCreated_issuesInput = {
    where?: JiraUserWhereInput
    data: XOR<JiraUserUpdateWithoutCreated_issuesInput, JiraUserUncheckedUpdateWithoutCreated_issuesInput>
  }

  export type JiraUserUpdateWithoutCreated_issuesInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_issues?: JiraIssueUpdateManyWithoutAssigneeNestedInput
    JiraEvent?: JiraEventUpdateManyWithoutUserNestedInput
  }

  export type JiraUserUncheckedUpdateWithoutCreated_issuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_issues?: JiraIssueUncheckedUpdateManyWithoutAssigneeNestedInput
    JiraEvent?: JiraEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JiraUserUpsertWithoutAssigned_issuesInput = {
    update: XOR<JiraUserUpdateWithoutAssigned_issuesInput, JiraUserUncheckedUpdateWithoutAssigned_issuesInput>
    create: XOR<JiraUserCreateWithoutAssigned_issuesInput, JiraUserUncheckedCreateWithoutAssigned_issuesInput>
    where?: JiraUserWhereInput
  }

  export type JiraUserUpdateToOneWithWhereWithoutAssigned_issuesInput = {
    where?: JiraUserWhereInput
    data: XOR<JiraUserUpdateWithoutAssigned_issuesInput, JiraUserUncheckedUpdateWithoutAssigned_issuesInput>
  }

  export type JiraUserUpdateWithoutAssigned_issuesInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_issues?: JiraIssueUpdateManyWithoutCreatorNestedInput
    JiraEvent?: JiraEventUpdateManyWithoutUserNestedInput
  }

  export type JiraUserUncheckedUpdateWithoutAssigned_issuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_issues?: JiraIssueUncheckedUpdateManyWithoutCreatorNestedInput
    JiraEvent?: JiraEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JiraEventUpsertWithWhereUniqueWithoutIssueInput = {
    where: JiraEventWhereUniqueInput
    update: XOR<JiraEventUpdateWithoutIssueInput, JiraEventUncheckedUpdateWithoutIssueInput>
    create: XOR<JiraEventCreateWithoutIssueInput, JiraEventUncheckedCreateWithoutIssueInput>
  }

  export type JiraEventUpdateWithWhereUniqueWithoutIssueInput = {
    where: JiraEventWhereUniqueInput
    data: XOR<JiraEventUpdateWithoutIssueInput, JiraEventUncheckedUpdateWithoutIssueInput>
  }

  export type JiraEventUpdateManyWithWhereWithoutIssueInput = {
    where: JiraEventScalarWhereInput
    data: XOR<JiraEventUpdateManyMutationInput, JiraEventUncheckedUpdateManyWithoutIssueInput>
  }

  export type JiraEventCreateWithoutPayloadInput = {
    webhook_event: string
    issue_event_type: string
    date_created?: Date | string
    issue?: JiraIssueCreateNestedOneWithoutEventsInput
    project?: JiraProjectCreateNestedOneWithoutJiraEventInput
    user?: JiraUserCreateNestedOneWithoutJiraEventInput
  }

  export type JiraEventUncheckedCreateWithoutPayloadInput = {
    id?: number
    webhook_event: string
    issue_event_type: string
    issue_id?: number | null
    project_id?: number | null
    user_id?: number | null
    date_created?: Date | string
  }

  export type JiraEventCreateOrConnectWithoutPayloadInput = {
    where: JiraEventWhereUniqueInput
    create: XOR<JiraEventCreateWithoutPayloadInput, JiraEventUncheckedCreateWithoutPayloadInput>
  }

  export type JiraEventUpsertWithoutPayloadInput = {
    update: XOR<JiraEventUpdateWithoutPayloadInput, JiraEventUncheckedUpdateWithoutPayloadInput>
    create: XOR<JiraEventCreateWithoutPayloadInput, JiraEventUncheckedCreateWithoutPayloadInput>
    where?: JiraEventWhereInput
  }

  export type JiraEventUpdateToOneWithWhereWithoutPayloadInput = {
    where?: JiraEventWhereInput
    data: XOR<JiraEventUpdateWithoutPayloadInput, JiraEventUncheckedUpdateWithoutPayloadInput>
  }

  export type JiraEventUpdateWithoutPayloadInput = {
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: JiraIssueUpdateOneWithoutEventsNestedInput
    project?: JiraProjectUpdateOneWithoutJiraEventNestedInput
    user?: JiraUserUpdateOneWithoutJiraEventNestedInput
  }

  export type JiraEventUncheckedUpdateWithoutPayloadInput = {
    id?: IntFieldUpdateOperationsInput | number
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    issue_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyProjectInput = {
    id?: number
    author_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
  }

  export type TicketCreateManyProjectInput = {
    id?: number
    code: string
  }

  export type EventUpdateWithoutProjectInput = {
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutEventsNestedInput
    reviewer?: UserUpdateOneWithoutReviewed_eventsNestedInput
    ticket?: TicketUpdateOneWithoutEventsNestedInput
    payload?: PayloadUpdateOneWithoutEventNestedInput
    revision?: RevisionUpdateOneWithoutPr_eventNestedInput
  }

  export type EventUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadUncheckedUpdateOneWithoutEventNestedInput
    revision?: RevisionUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutProjectInput = {
    code?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutProjectsInput = {
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutAuthorNestedInput
    reviewed_events?: EventUncheckedUpdateManyWithoutReviewerNestedInput
    authoredRevisions?: RevisionUncheckedUpdateManyWithoutUserNestedInput
    reviewedRevisions?: RevisionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateManyAuthorInput = {
    id?: number
    project_id?: number | null
    reviewer_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
  }

  export type EventCreateManyReviewerInput = {
    id?: number
    project_id?: number | null
    author_id?: number | null
    ticket_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
  }

  export type RevisionCreateManyUserInput = {
    id?: number
    reviewer_id?: number | null
    pr_event_id: number
  }

  export type RevisionCreateManyReviewerInput = {
    id?: number
    user_id: number
    pr_event_id: number
  }

  export type ProjectUpdateWithoutContributorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutProjectNestedInput
    tickets?: TicketUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutContributorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutProjectNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutContributorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpdateWithoutAuthorInput = {
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutEventsNestedInput
    reviewer?: UserUpdateOneWithoutReviewed_eventsNestedInput
    ticket?: TicketUpdateOneWithoutEventsNestedInput
    payload?: PayloadUpdateOneWithoutEventNestedInput
    revision?: RevisionUpdateOneWithoutPr_eventNestedInput
  }

  export type EventUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadUncheckedUpdateOneWithoutEventNestedInput
    revision?: RevisionUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutReviewerInput = {
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutEventsNestedInput
    author?: UserUpdateOneWithoutEventsNestedInput
    ticket?: TicketUpdateOneWithoutEventsNestedInput
    payload?: PayloadUpdateOneWithoutEventNestedInput
    revision?: RevisionUpdateOneWithoutPr_eventNestedInput
  }

  export type EventUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadUncheckedUpdateOneWithoutEventNestedInput
    revision?: RevisionUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionUpdateWithoutUserInput = {
    reviewer?: UserUpdateOneWithoutReviewedRevisionsNestedInput
    pr_event?: EventUpdateOneRequiredWithoutRevisionNestedInput
  }

  export type RevisionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type RevisionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type RevisionUpdateWithoutReviewerInput = {
    user?: UserUpdateOneRequiredWithoutAuthoredRevisionsNestedInput
    pr_event?: EventUpdateOneRequiredWithoutRevisionNestedInput
  }

  export type RevisionUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type RevisionUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    pr_event_id?: IntFieldUpdateOperationsInput | number
  }

  export type EventCreateManyTicketInput = {
    id?: number
    project_id?: number | null
    author_id?: number | null
    reviewer_id?: number | null
    source: $Enums.SourceType
    branch?: string | null
    pr_number?: number | null
    additions?: number | null
    deletions?: number | null
    changed_files?: number | null
    event_type: $Enums.EventType
    date_created?: Date | string
  }

  export type EventUpdateWithoutTicketInput = {
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutEventsNestedInput
    author?: UserUpdateOneWithoutEventsNestedInput
    reviewer?: UserUpdateOneWithoutReviewed_eventsNestedInput
    payload?: PayloadUpdateOneWithoutEventNestedInput
    revision?: RevisionUpdateOneWithoutPr_eventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: PayloadUncheckedUpdateOneWithoutEventNestedInput
    revision?: RevisionUncheckedUpdateOneWithoutPr_eventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    reviewer_id?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    pr_number?: NullableIntFieldUpdateOperationsInput | number | null
    additions?: NullableIntFieldUpdateOperationsInput | number | null
    deletions?: NullableIntFieldUpdateOperationsInput | number | null
    changed_files?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JiraIssueCreateManyProjectInput = {
    id?: number
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    creator_id?: number | null
    assignee_id?: number | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JiraEventCreateManyProjectInput = {
    id?: number
    webhook_event: string
    issue_event_type: string
    issue_id?: number | null
    user_id?: number | null
    date_created?: Date | string
  }

  export type JiraIssueUpdateWithoutProjectInput = {
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    creator?: JiraUserUpdateOneWithoutCreated_issuesNestedInput
    assignee?: JiraUserUpdateOneWithoutAssigned_issuesNestedInput
    events?: JiraEventUpdateManyWithoutIssueNestedInput
  }

  export type JiraIssueUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    assignee_id?: NullableIntFieldUpdateOperationsInput | number | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    events?: JiraEventUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type JiraIssueUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    assignee_id?: NullableIntFieldUpdateOperationsInput | number | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JiraEventUpdateWithoutProjectInput = {
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: JiraIssueUpdateOneWithoutEventsNestedInput
    user?: JiraUserUpdateOneWithoutJiraEventNestedInput
    payload?: JiraPayloadUpdateOneWithoutEventNestedInput
  }

  export type JiraEventUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    issue_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JiraPayloadUncheckedUpdateOneWithoutEventNestedInput
  }

  export type JiraEventUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    issue_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JiraIssueCreateManyCreatorInput = {
    id?: number
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    project_id?: number | null
    assignee_id?: number | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JiraIssueCreateManyAssigneeInput = {
    id?: number
    issue_id: string
    summary?: string | null
    key: string
    status_name?: string | null
    status_id?: string | null
    timespent?: number | null
    timeestimate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    resolution_date?: Date | string | null
    project_id?: number | null
    creator_id?: number | null
    sprint_name?: string | null
    sprint_start?: Date | string | null
    sprint_end?: Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JiraEventCreateManyUserInput = {
    id?: number
    webhook_event: string
    issue_event_type: string
    issue_id?: number | null
    project_id?: number | null
    date_created?: Date | string
  }

  export type JiraIssueUpdateWithoutCreatorInput = {
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    project?: JiraProjectUpdateOneWithoutIssuesNestedInput
    assignee?: JiraUserUpdateOneWithoutAssigned_issuesNestedInput
    events?: JiraEventUpdateManyWithoutIssueNestedInput
  }

  export type JiraIssueUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    assignee_id?: NullableIntFieldUpdateOperationsInput | number | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    events?: JiraEventUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type JiraIssueUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    assignee_id?: NullableIntFieldUpdateOperationsInput | number | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JiraIssueUpdateWithoutAssigneeInput = {
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    project?: JiraProjectUpdateOneWithoutIssuesNestedInput
    creator?: JiraUserUpdateOneWithoutCreated_issuesNestedInput
    events?: JiraEventUpdateManyWithoutIssueNestedInput
  }

  export type JiraIssueUncheckedUpdateWithoutAssigneeInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
    events?: JiraEventUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type JiraIssueUncheckedUpdateManyWithoutAssigneeInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: NullableIntFieldUpdateOperationsInput | number | null
    timeestimate?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolution_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    sprint_name?: NullableStringFieldUpdateOperationsInput | string | null
    sprint_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    raw_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JiraEventUpdateWithoutUserInput = {
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: JiraIssueUpdateOneWithoutEventsNestedInput
    project?: JiraProjectUpdateOneWithoutJiraEventNestedInput
    payload?: JiraPayloadUpdateOneWithoutEventNestedInput
  }

  export type JiraEventUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    issue_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JiraPayloadUncheckedUpdateOneWithoutEventNestedInput
  }

  export type JiraEventUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    issue_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JiraEventCreateManyIssueInput = {
    id?: number
    webhook_event: string
    issue_event_type: string
    project_id?: number | null
    user_id?: number | null
    date_created?: Date | string
  }

  export type JiraEventUpdateWithoutIssueInput = {
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: JiraProjectUpdateOneWithoutJiraEventNestedInput
    user?: JiraUserUpdateOneWithoutJiraEventNestedInput
    payload?: JiraPayloadUpdateOneWithoutEventNestedInput
  }

  export type JiraEventUncheckedUpdateWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JiraPayloadUncheckedUpdateOneWithoutEventNestedInput
  }

  export type JiraEventUncheckedUpdateManyWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    webhook_event?: StringFieldUpdateOperationsInput | string
    issue_event_type?: StringFieldUpdateOperationsInput | string
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}