
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Instrument
 * 
 */
export type Instrument = $Result.DefaultSelection<Prisma.$InstrumentPayload>
/**
 * Model Level
 * 
 */
export type Level = $Result.DefaultSelection<Prisma.$LevelPayload>
/**
 * Model Chord
 * 
 */
export type Chord = $Result.DefaultSelection<Prisma.$ChordPayload>
/**
 * Model GameSession
 * 
 */
export type GameSession = $Result.DefaultSelection<Prisma.$GameSessionPayload>
/**
 * Model GameSessionChord
 * 
 */
export type GameSessionChord = $Result.DefaultSelection<Prisma.$GameSessionChordPayload>
/**
 * Model LeaderboardEntry
 * 
 */
export type LeaderboardEntry = $Result.DefaultSelection<Prisma.$LeaderboardEntryPayload>
/**
 * Model UserStats
 * 
 */
export type UserStats = $Result.DefaultSelection<Prisma.$UserStatsPayload>
/**
 * Model AppSettings
 * 
 */
export type AppSettings = $Result.DefaultSelection<Prisma.$AppSettingsPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubscriptionType: {
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
  PENDING: 'PENDING'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const GameMode: {
  SIMPLE_MODE: 'SIMPLE_MODE',
  ADVANCE_MODE: 'ADVANCE_MODE'
};

export type GameMode = (typeof GameMode)[keyof typeof GameMode]

}

export type SubscriptionType = $Enums.SubscriptionType

export const SubscriptionType: typeof $Enums.SubscriptionType

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type GameMode = $Enums.GameMode

export const GameMode: typeof $Enums.GameMode

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instrument`: Exposes CRUD operations for the **Instrument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instruments
    * const instruments = await prisma.instrument.findMany()
    * ```
    */
  get instrument(): Prisma.InstrumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.level`: Exposes CRUD operations for the **Level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Levels
    * const levels = await prisma.level.findMany()
    * ```
    */
  get level(): Prisma.LevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chord`: Exposes CRUD operations for the **Chord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chords
    * const chords = await prisma.chord.findMany()
    * ```
    */
  get chord(): Prisma.ChordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameSession`: Exposes CRUD operations for the **GameSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSessions
    * const gameSessions = await prisma.gameSession.findMany()
    * ```
    */
  get gameSession(): Prisma.GameSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameSessionChord`: Exposes CRUD operations for the **GameSessionChord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSessionChords
    * const gameSessionChords = await prisma.gameSessionChord.findMany()
    * ```
    */
  get gameSessionChord(): Prisma.GameSessionChordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderboardEntry`: Exposes CRUD operations for the **LeaderboardEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaderboardEntries
    * const leaderboardEntries = await prisma.leaderboardEntry.findMany()
    * ```
    */
  get leaderboardEntry(): Prisma.LeaderboardEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStats`: Exposes CRUD operations for the **UserStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStats
    * const userStats = await prisma.userStats.findMany()
    * ```
    */
  get userStats(): Prisma.UserStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appSettings`: Exposes CRUD operations for the **AppSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppSettings
    * const appSettings = await prisma.appSettings.findMany()
    * ```
    */
  get appSettings(): Prisma.AppSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Subscription: 'Subscription',
    Instrument: 'Instrument',
    Level: 'Level',
    Chord: 'Chord',
    GameSession: 'GameSession',
    GameSessionChord: 'GameSessionChord',
    LeaderboardEntry: 'LeaderboardEntry',
    UserStats: 'UserStats',
    AppSettings: 'AppSettings',
    RefreshToken: 'RefreshToken'
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
      modelProps: "user" | "subscription" | "instrument" | "level" | "chord" | "gameSession" | "gameSessionChord" | "leaderboardEntry" | "userStats" | "appSettings" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Instrument: {
        payload: Prisma.$InstrumentPayload<ExtArgs>
        fields: Prisma.InstrumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstrumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstrumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          findFirst: {
            args: Prisma.InstrumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstrumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          findMany: {
            args: Prisma.InstrumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          create: {
            args: Prisma.InstrumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          createMany: {
            args: Prisma.InstrumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstrumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          delete: {
            args: Prisma.InstrumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          update: {
            args: Prisma.InstrumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          deleteMany: {
            args: Prisma.InstrumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstrumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstrumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          upsert: {
            args: Prisma.InstrumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          aggregate: {
            args: Prisma.InstrumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstrument>
          }
          groupBy: {
            args: Prisma.InstrumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstrumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstrumentCountArgs<ExtArgs>
            result: $Utils.Optional<InstrumentCountAggregateOutputType> | number
          }
        }
      }
      Level: {
        payload: Prisma.$LevelPayload<ExtArgs>
        fields: Prisma.LevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findFirst: {
            args: Prisma.LevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findMany: {
            args: Prisma.LevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          create: {
            args: Prisma.LevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          createMany: {
            args: Prisma.LevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          delete: {
            args: Prisma.LevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          update: {
            args: Prisma.LevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          deleteMany: {
            args: Prisma.LevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          upsert: {
            args: Prisma.LevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          aggregate: {
            args: Prisma.LevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevel>
          }
          groupBy: {
            args: Prisma.LevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelCountArgs<ExtArgs>
            result: $Utils.Optional<LevelCountAggregateOutputType> | number
          }
        }
      }
      Chord: {
        payload: Prisma.$ChordPayload<ExtArgs>
        fields: Prisma.ChordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChordPayload>
          }
          findFirst: {
            args: Prisma.ChordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChordPayload>
          }
          findMany: {
            args: Prisma.ChordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChordPayload>[]
          }
          create: {
            args: Prisma.ChordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChordPayload>
          }
          createMany: {
            args: Prisma.ChordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChordPayload>[]
          }
          delete: {
            args: Prisma.ChordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChordPayload>
          }
          update: {
            args: Prisma.ChordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChordPayload>
          }
          deleteMany: {
            args: Prisma.ChordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChordPayload>[]
          }
          upsert: {
            args: Prisma.ChordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChordPayload>
          }
          aggregate: {
            args: Prisma.ChordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChord>
          }
          groupBy: {
            args: Prisma.ChordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChordCountArgs<ExtArgs>
            result: $Utils.Optional<ChordCountAggregateOutputType> | number
          }
        }
      }
      GameSession: {
        payload: Prisma.$GameSessionPayload<ExtArgs>
        fields: Prisma.GameSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findFirst: {
            args: Prisma.GameSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findMany: {
            args: Prisma.GameSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          create: {
            args: Prisma.GameSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          createMany: {
            args: Prisma.GameSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          delete: {
            args: Prisma.GameSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          update: {
            args: Prisma.GameSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          deleteMany: {
            args: Prisma.GameSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          upsert: {
            args: Prisma.GameSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          aggregate: {
            args: Prisma.GameSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameSession>
          }
          groupBy: {
            args: Prisma.GameSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameSessionCountArgs<ExtArgs>
            result: $Utils.Optional<GameSessionCountAggregateOutputType> | number
          }
        }
      }
      GameSessionChord: {
        payload: Prisma.$GameSessionChordPayload<ExtArgs>
        fields: Prisma.GameSessionChordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameSessionChordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionChordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameSessionChordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionChordPayload>
          }
          findFirst: {
            args: Prisma.GameSessionChordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionChordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameSessionChordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionChordPayload>
          }
          findMany: {
            args: Prisma.GameSessionChordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionChordPayload>[]
          }
          create: {
            args: Prisma.GameSessionChordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionChordPayload>
          }
          createMany: {
            args: Prisma.GameSessionChordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameSessionChordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionChordPayload>[]
          }
          delete: {
            args: Prisma.GameSessionChordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionChordPayload>
          }
          update: {
            args: Prisma.GameSessionChordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionChordPayload>
          }
          deleteMany: {
            args: Prisma.GameSessionChordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameSessionChordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameSessionChordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionChordPayload>[]
          }
          upsert: {
            args: Prisma.GameSessionChordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionChordPayload>
          }
          aggregate: {
            args: Prisma.GameSessionChordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameSessionChord>
          }
          groupBy: {
            args: Prisma.GameSessionChordGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameSessionChordGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameSessionChordCountArgs<ExtArgs>
            result: $Utils.Optional<GameSessionChordCountAggregateOutputType> | number
          }
        }
      }
      LeaderboardEntry: {
        payload: Prisma.$LeaderboardEntryPayload<ExtArgs>
        fields: Prisma.LeaderboardEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderboardEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderboardEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          findFirst: {
            args: Prisma.LeaderboardEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderboardEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          findMany: {
            args: Prisma.LeaderboardEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>[]
          }
          create: {
            args: Prisma.LeaderboardEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          createMany: {
            args: Prisma.LeaderboardEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderboardEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>[]
          }
          delete: {
            args: Prisma.LeaderboardEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          update: {
            args: Prisma.LeaderboardEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          deleteMany: {
            args: Prisma.LeaderboardEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderboardEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderboardEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>[]
          }
          upsert: {
            args: Prisma.LeaderboardEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          aggregate: {
            args: Prisma.LeaderboardEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderboardEntry>
          }
          groupBy: {
            args: Prisma.LeaderboardEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderboardEntryCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardEntryCountAggregateOutputType> | number
          }
        }
      }
      UserStats: {
        payload: Prisma.$UserStatsPayload<ExtArgs>
        fields: Prisma.UserStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findFirst: {
            args: Prisma.UserStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findMany: {
            args: Prisma.UserStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          create: {
            args: Prisma.UserStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          createMany: {
            args: Prisma.UserStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          delete: {
            args: Prisma.UserStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          update: {
            args: Prisma.UserStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          deleteMany: {
            args: Prisma.UserStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          upsert: {
            args: Prisma.UserStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          aggregate: {
            args: Prisma.UserStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStats>
          }
          groupBy: {
            args: Prisma.UserStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStatsCountArgs<ExtArgs>
            result: $Utils.Optional<UserStatsCountAggregateOutputType> | number
          }
        }
      }
      AppSettings: {
        payload: Prisma.$AppSettingsPayload<ExtArgs>
        fields: Prisma.AppSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          findFirst: {
            args: Prisma.AppSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          findMany: {
            args: Prisma.AppSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>[]
          }
          create: {
            args: Prisma.AppSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          createMany: {
            args: Prisma.AppSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>[]
          }
          delete: {
            args: Prisma.AppSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          update: {
            args: Prisma.AppSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          deleteMany: {
            args: Prisma.AppSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>[]
          }
          upsert: {
            args: Prisma.AppSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          aggregate: {
            args: Prisma.AppSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppSettings>
          }
          groupBy: {
            args: Prisma.AppSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<AppSettingsCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
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
    user?: UserOmit
    subscription?: SubscriptionOmit
    instrument?: InstrumentOmit
    level?: LevelOmit
    chord?: ChordOmit
    gameSession?: GameSessionOmit
    gameSessionChord?: GameSessionChordOmit
    leaderboardEntry?: LeaderboardEntryOmit
    userStats?: UserStatsOmit
    appSettings?: AppSettingsOmit
    refreshToken?: RefreshTokenOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gameSessions: number
    leaderboardEntries: number
    userStats: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameSessions?: boolean | UserCountOutputTypeCountGameSessionsArgs
    leaderboardEntries?: boolean | UserCountOutputTypeCountLeaderboardEntriesArgs
    userStats?: boolean | UserCountOutputTypeCountUserStatsArgs
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
  export type UserCountOutputTypeCountGameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatsWhereInput
  }


  /**
   * Count Type InstrumentCountOutputType
   */

  export type InstrumentCountOutputType = {
    chords: number
    gameSessions: number
  }

  export type InstrumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chords?: boolean | InstrumentCountOutputTypeCountChordsArgs
    gameSessions?: boolean | InstrumentCountOutputTypeCountGameSessionsArgs
  }

  // Custom InputTypes
  /**
   * InstrumentCountOutputType without action
   */
  export type InstrumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentCountOutputType
     */
    select?: InstrumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstrumentCountOutputType without action
   */
  export type InstrumentCountOutputTypeCountChordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChordWhereInput
  }

  /**
   * InstrumentCountOutputType without action
   */
  export type InstrumentCountOutputTypeCountGameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }


  /**
   * Count Type LevelCountOutputType
   */

  export type LevelCountOutputType = {
    chords: number
    gameSessions: number
    leaderboardEntries: number
    userStats: number
  }

  export type LevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chords?: boolean | LevelCountOutputTypeCountChordsArgs
    gameSessions?: boolean | LevelCountOutputTypeCountGameSessionsArgs
    leaderboardEntries?: boolean | LevelCountOutputTypeCountLeaderboardEntriesArgs
    userStats?: boolean | LevelCountOutputTypeCountUserStatsArgs
  }

  // Custom InputTypes
  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelCountOutputType
     */
    select?: LevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountChordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChordWhereInput
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountGameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountLeaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardEntryWhereInput
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountUserStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatsWhereInput
  }


  /**
   * Count Type ChordCountOutputType
   */

  export type ChordCountOutputType = {
    gameSessionChords: number
  }

  export type ChordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameSessionChords?: boolean | ChordCountOutputTypeCountGameSessionChordsArgs
  }

  // Custom InputTypes
  /**
   * ChordCountOutputType without action
   */
  export type ChordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChordCountOutputType
     */
    select?: ChordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChordCountOutputType without action
   */
  export type ChordCountOutputTypeCountGameSessionChordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionChordWhereInput
  }


  /**
   * Count Type GameSessionCountOutputType
   */

  export type GameSessionCountOutputType = {
    chords: number
  }

  export type GameSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chords?: boolean | GameSessionCountOutputTypeCountChordsArgs
  }

  // Custom InputTypes
  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionCountOutputType
     */
    select?: GameSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeCountChordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionChordWhereInput
  }


  /**
   * Models
   */

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
    currentLevel: number | null
    currentStreak: number | null
    overallAccuracy: number | null
    totalGamesPlayed: number | null
  }

  export type UserSumAggregateOutputType = {
    currentLevel: number | null
    currentStreak: number | null
    overallAccuracy: number | null
    totalGamesPlayed: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    subscriptionId: string | null
    currentLevel: number | null
    currentStreak: number | null
    overallAccuracy: number | null
    totalGamesPlayed: number | null
    lastPlayedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    subscriptionId: string | null
    currentLevel: number | null
    currentStreak: number | null
    overallAccuracy: number | null
    totalGamesPlayed: number | null
    lastPlayedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    subscriptionId: number
    currentLevel: number
    currentStreak: number
    overallAccuracy: number
    totalGamesPlayed: number
    lastPlayedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    currentLevel?: true
    currentStreak?: true
    overallAccuracy?: true
    totalGamesPlayed?: true
  }

  export type UserSumAggregateInputType = {
    currentLevel?: true
    currentStreak?: true
    overallAccuracy?: true
    totalGamesPlayed?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    subscriptionId?: true
    currentLevel?: true
    currentStreak?: true
    overallAccuracy?: true
    totalGamesPlayed?: true
    lastPlayedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    subscriptionId?: true
    currentLevel?: true
    currentStreak?: true
    overallAccuracy?: true
    totalGamesPlayed?: true
    lastPlayedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    subscriptionId?: true
    currentLevel?: true
    currentStreak?: true
    overallAccuracy?: true
    totalGamesPlayed?: true
    lastPlayedAt?: true
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
    id: string
    name: string
    email: string
    password: string | null
    createdAt: Date
    updatedAt: Date
    subscriptionId: string | null
    currentLevel: number
    currentStreak: number
    overallAccuracy: number
    totalGamesPlayed: number
    lastPlayedAt: Date | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionId?: boolean
    currentLevel?: boolean
    currentStreak?: boolean
    overallAccuracy?: boolean
    totalGamesPlayed?: boolean
    lastPlayedAt?: boolean
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    gameSessions?: boolean | User$gameSessionsArgs<ExtArgs>
    leaderboardEntries?: boolean | User$leaderboardEntriesArgs<ExtArgs>
    userStats?: boolean | User$userStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionId?: boolean
    currentLevel?: boolean
    currentStreak?: boolean
    overallAccuracy?: boolean
    totalGamesPlayed?: boolean
    lastPlayedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionId?: boolean
    currentLevel?: boolean
    currentStreak?: boolean
    overallAccuracy?: boolean
    totalGamesPlayed?: boolean
    lastPlayedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionId?: boolean
    currentLevel?: boolean
    currentStreak?: boolean
    overallAccuracy?: boolean
    totalGamesPlayed?: boolean
    lastPlayedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt" | "subscriptionId" | "currentLevel" | "currentStreak" | "overallAccuracy" | "totalGamesPlayed" | "lastPlayedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    gameSessions?: boolean | User$gameSessionsArgs<ExtArgs>
    leaderboardEntries?: boolean | User$leaderboardEntriesArgs<ExtArgs>
    userStats?: boolean | User$userStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      gameSessions: Prisma.$GameSessionPayload<ExtArgs>[]
      leaderboardEntries: Prisma.$LeaderboardEntryPayload<ExtArgs>[]
      userStats: Prisma.$UserStatsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      createdAt: Date
      updatedAt: Date
      subscriptionId: string | null
      currentLevel: number
      currentStreak: number
      overallAccuracy: number
      totalGamesPlayed: number
      lastPlayedAt: Date | null
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gameSessions<T extends User$gameSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$gameSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaderboardEntries<T extends User$leaderboardEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$leaderboardEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userStats<T extends User$userStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$userStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly subscriptionId: FieldRef<"User", 'String'>
    readonly currentLevel: FieldRef<"User", 'Int'>
    readonly currentStreak: FieldRef<"User", 'Int'>
    readonly overallAccuracy: FieldRef<"User", 'Float'>
    readonly totalGamesPlayed: FieldRef<"User", 'Int'>
    readonly lastPlayedAt: FieldRef<"User", 'DateTime'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User.gameSessions
   */
  export type User$gameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * User.leaderboardEntries
   */
  export type User$leaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    where?: LeaderboardEntryWhereInput
    orderBy?: LeaderboardEntryOrderByWithRelationInput | LeaderboardEntryOrderByWithRelationInput[]
    cursor?: LeaderboardEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderboardEntryScalarFieldEnum | LeaderboardEntryScalarFieldEnum[]
  }

  /**
   * User.userStats
   */
  export type User$userStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    where?: UserStatsWhereInput
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    cursor?: UserStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
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
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    amount: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    amount: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.SubscriptionType | null
    status: $Enums.SubscriptionStatus | null
    startDate: Date | null
    endDate: Date | null
    amount: number | null
    currency: string | null
    paymentMethod: string | null
    externalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.SubscriptionType | null
    status: $Enums.SubscriptionStatus | null
    startDate: Date | null
    endDate: Date | null
    amount: number | null
    currency: string | null
    paymentMethod: string | null
    externalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    status: number
    startDate: number
    endDate: number
    amount: number
    currency: number
    paymentMethod: number
    externalId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    amount?: true
  }

  export type SubscriptionSumAggregateInputType = {
    amount?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    startDate?: true
    endDate?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    externalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    startDate?: true
    endDate?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    externalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    startDate?: true
    endDate?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    externalId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.SubscriptionType
    status: $Enums.SubscriptionStatus
    startDate: Date
    endDate: Date
    amount: number
    currency: string
    paymentMethod: string | null
    externalId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "status" | "startDate" | "endDate" | "amount" | "currency" | "paymentMethod" | "externalId" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.SubscriptionType
      status: $Enums.SubscriptionStatus
      startDate: Date
      endDate: Date
      amount: number
      currency: string
      paymentMethod: string | null
      externalId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly type: FieldRef<"Subscription", 'SubscriptionType'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly amount: FieldRef<"Subscription", 'Float'>
    readonly currency: FieldRef<"Subscription", 'String'>
    readonly paymentMethod: FieldRef<"Subscription", 'String'>
    readonly externalId: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Instrument
   */

  export type AggregateInstrument = {
    _count: InstrumentCountAggregateOutputType | null
    _min: InstrumentMinAggregateOutputType | null
    _max: InstrumentMaxAggregateOutputType | null
  }

  export type InstrumentMinAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    isActive: boolean | null
  }

  export type InstrumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    isActive: boolean | null
  }

  export type InstrumentCountAggregateOutputType = {
    id: number
    name: number
    displayName: number
    isActive: number
    _all: number
  }


  export type InstrumentMinAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    isActive?: true
  }

  export type InstrumentMaxAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    isActive?: true
  }

  export type InstrumentCountAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    isActive?: true
    _all?: true
  }

  export type InstrumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instrument to aggregate.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instruments
    **/
    _count?: true | InstrumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstrumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstrumentMaxAggregateInputType
  }

  export type GetInstrumentAggregateType<T extends InstrumentAggregateArgs> = {
        [P in keyof T & keyof AggregateInstrument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstrument[P]>
      : GetScalarType<T[P], AggregateInstrument[P]>
  }




  export type InstrumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstrumentWhereInput
    orderBy?: InstrumentOrderByWithAggregationInput | InstrumentOrderByWithAggregationInput[]
    by: InstrumentScalarFieldEnum[] | InstrumentScalarFieldEnum
    having?: InstrumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstrumentCountAggregateInputType | true
    _min?: InstrumentMinAggregateInputType
    _max?: InstrumentMaxAggregateInputType
  }

  export type InstrumentGroupByOutputType = {
    id: string
    name: string
    displayName: string
    isActive: boolean
    _count: InstrumentCountAggregateOutputType | null
    _min: InstrumentMinAggregateOutputType | null
    _max: InstrumentMaxAggregateOutputType | null
  }

  type GetInstrumentGroupByPayload<T extends InstrumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstrumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstrumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstrumentGroupByOutputType[P]>
            : GetScalarType<T[P], InstrumentGroupByOutputType[P]>
        }
      >
    >


  export type InstrumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    isActive?: boolean
    chords?: boolean | Instrument$chordsArgs<ExtArgs>
    gameSessions?: boolean | Instrument$gameSessionsArgs<ExtArgs>
    _count?: boolean | InstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectScalar = {
    id?: boolean
    name?: boolean
    displayName?: boolean
    isActive?: boolean
  }

  export type InstrumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "displayName" | "isActive", ExtArgs["result"]["instrument"]>
  export type InstrumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chords?: boolean | Instrument$chordsArgs<ExtArgs>
    gameSessions?: boolean | Instrument$gameSessionsArgs<ExtArgs>
    _count?: boolean | InstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstrumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstrumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstrumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instrument"
    objects: {
      chords: Prisma.$ChordPayload<ExtArgs>[]
      gameSessions: Prisma.$GameSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      displayName: string
      isActive: boolean
    }, ExtArgs["result"]["instrument"]>
    composites: {}
  }

  type InstrumentGetPayload<S extends boolean | null | undefined | InstrumentDefaultArgs> = $Result.GetResult<Prisma.$InstrumentPayload, S>

  type InstrumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstrumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstrumentCountAggregateInputType | true
    }

  export interface InstrumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instrument'], meta: { name: 'Instrument' } }
    /**
     * Find zero or one Instrument that matches the filter.
     * @param {InstrumentFindUniqueArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstrumentFindUniqueArgs>(args: SelectSubset<T, InstrumentFindUniqueArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instrument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstrumentFindUniqueOrThrowArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstrumentFindUniqueOrThrowArgs>(args: SelectSubset<T, InstrumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instrument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindFirstArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstrumentFindFirstArgs>(args?: SelectSubset<T, InstrumentFindFirstArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instrument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindFirstOrThrowArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstrumentFindFirstOrThrowArgs>(args?: SelectSubset<T, InstrumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instruments
     * const instruments = await prisma.instrument.findMany()
     * 
     * // Get first 10 Instruments
     * const instruments = await prisma.instrument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instrumentWithIdOnly = await prisma.instrument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstrumentFindManyArgs>(args?: SelectSubset<T, InstrumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instrument.
     * @param {InstrumentCreateArgs} args - Arguments to create a Instrument.
     * @example
     * // Create one Instrument
     * const Instrument = await prisma.instrument.create({
     *   data: {
     *     // ... data to create a Instrument
     *   }
     * })
     * 
     */
    create<T extends InstrumentCreateArgs>(args: SelectSubset<T, InstrumentCreateArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instruments.
     * @param {InstrumentCreateManyArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instrument = await prisma.instrument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstrumentCreateManyArgs>(args?: SelectSubset<T, InstrumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instruments and returns the data saved in the database.
     * @param {InstrumentCreateManyAndReturnArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instrument = await prisma.instrument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instruments and only return the `id`
     * const instrumentWithIdOnly = await prisma.instrument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstrumentCreateManyAndReturnArgs>(args?: SelectSubset<T, InstrumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instrument.
     * @param {InstrumentDeleteArgs} args - Arguments to delete one Instrument.
     * @example
     * // Delete one Instrument
     * const Instrument = await prisma.instrument.delete({
     *   where: {
     *     // ... filter to delete one Instrument
     *   }
     * })
     * 
     */
    delete<T extends InstrumentDeleteArgs>(args: SelectSubset<T, InstrumentDeleteArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instrument.
     * @param {InstrumentUpdateArgs} args - Arguments to update one Instrument.
     * @example
     * // Update one Instrument
     * const instrument = await prisma.instrument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstrumentUpdateArgs>(args: SelectSubset<T, InstrumentUpdateArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instruments.
     * @param {InstrumentDeleteManyArgs} args - Arguments to filter Instruments to delete.
     * @example
     * // Delete a few Instruments
     * const { count } = await prisma.instrument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstrumentDeleteManyArgs>(args?: SelectSubset<T, InstrumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instruments
     * const instrument = await prisma.instrument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstrumentUpdateManyArgs>(args: SelectSubset<T, InstrumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments and returns the data updated in the database.
     * @param {InstrumentUpdateManyAndReturnArgs} args - Arguments to update many Instruments.
     * @example
     * // Update many Instruments
     * const instrument = await prisma.instrument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instruments and only return the `id`
     * const instrumentWithIdOnly = await prisma.instrument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstrumentUpdateManyAndReturnArgs>(args: SelectSubset<T, InstrumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instrument.
     * @param {InstrumentUpsertArgs} args - Arguments to update or create a Instrument.
     * @example
     * // Update or create a Instrument
     * const instrument = await prisma.instrument.upsert({
     *   create: {
     *     // ... data to create a Instrument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instrument we want to update
     *   }
     * })
     */
    upsert<T extends InstrumentUpsertArgs>(args: SelectSubset<T, InstrumentUpsertArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentCountArgs} args - Arguments to filter Instruments to count.
     * @example
     * // Count the number of Instruments
     * const count = await prisma.instrument.count({
     *   where: {
     *     // ... the filter for the Instruments we want to count
     *   }
     * })
    **/
    count<T extends InstrumentCountArgs>(
      args?: Subset<T, InstrumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstrumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstrumentAggregateArgs>(args: Subset<T, InstrumentAggregateArgs>): Prisma.PrismaPromise<GetInstrumentAggregateType<T>>

    /**
     * Group by Instrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentGroupByArgs} args - Group by arguments.
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
      T extends InstrumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstrumentGroupByArgs['orderBy'] }
        : { orderBy?: InstrumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstrumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstrumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instrument model
   */
  readonly fields: InstrumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instrument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstrumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chords<T extends Instrument$chordsArgs<ExtArgs> = {}>(args?: Subset<T, Instrument$chordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameSessions<T extends Instrument$gameSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Instrument$gameSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Instrument model
   */
  interface InstrumentFieldRefs {
    readonly id: FieldRef<"Instrument", 'String'>
    readonly name: FieldRef<"Instrument", 'String'>
    readonly displayName: FieldRef<"Instrument", 'String'>
    readonly isActive: FieldRef<"Instrument", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Instrument findUnique
   */
  export type InstrumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument findUniqueOrThrow
   */
  export type InstrumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument findFirst
   */
  export type InstrumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument findFirstOrThrow
   */
  export type InstrumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument findMany
   */
  export type InstrumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instruments to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument create
   */
  export type InstrumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Instrument.
     */
    data: XOR<InstrumentCreateInput, InstrumentUncheckedCreateInput>
  }

  /**
   * Instrument createMany
   */
  export type InstrumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instruments.
     */
    data: InstrumentCreateManyInput | InstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instrument createManyAndReturn
   */
  export type InstrumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * The data used to create many Instruments.
     */
    data: InstrumentCreateManyInput | InstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instrument update
   */
  export type InstrumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Instrument.
     */
    data: XOR<InstrumentUpdateInput, InstrumentUncheckedUpdateInput>
    /**
     * Choose, which Instrument to update.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument updateMany
   */
  export type InstrumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instruments.
     */
    data: XOR<InstrumentUpdateManyMutationInput, InstrumentUncheckedUpdateManyInput>
    /**
     * Filter which Instruments to update
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to update.
     */
    limit?: number
  }

  /**
   * Instrument updateManyAndReturn
   */
  export type InstrumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * The data used to update Instruments.
     */
    data: XOR<InstrumentUpdateManyMutationInput, InstrumentUncheckedUpdateManyInput>
    /**
     * Filter which Instruments to update
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to update.
     */
    limit?: number
  }

  /**
   * Instrument upsert
   */
  export type InstrumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Instrument to update in case it exists.
     */
    where: InstrumentWhereUniqueInput
    /**
     * In case the Instrument found by the `where` argument doesn't exist, create a new Instrument with this data.
     */
    create: XOR<InstrumentCreateInput, InstrumentUncheckedCreateInput>
    /**
     * In case the Instrument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstrumentUpdateInput, InstrumentUncheckedUpdateInput>
  }

  /**
   * Instrument delete
   */
  export type InstrumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter which Instrument to delete.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument deleteMany
   */
  export type InstrumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instruments to delete
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to delete.
     */
    limit?: number
  }

  /**
   * Instrument.chords
   */
  export type Instrument$chordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
    where?: ChordWhereInput
    orderBy?: ChordOrderByWithRelationInput | ChordOrderByWithRelationInput[]
    cursor?: ChordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChordScalarFieldEnum | ChordScalarFieldEnum[]
  }

  /**
   * Instrument.gameSessions
   */
  export type Instrument$gameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * Instrument without action
   */
  export type InstrumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
  }


  /**
   * Model Level
   */

  export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  export type LevelAvgAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type LevelSumAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type LevelMinAggregateOutputType = {
    id: number | null
    number: number | null
    name: string | null
    description: string | null
    isFree: boolean | null
    isActive: boolean | null
  }

  export type LevelMaxAggregateOutputType = {
    id: number | null
    number: number | null
    name: string | null
    description: string | null
    isFree: boolean | null
    isActive: boolean | null
  }

  export type LevelCountAggregateOutputType = {
    id: number
    number: number
    name: number
    description: number
    isFree: number
    isActive: number
    _all: number
  }


  export type LevelAvgAggregateInputType = {
    id?: true
    number?: true
  }

  export type LevelSumAggregateInputType = {
    id?: true
    number?: true
  }

  export type LevelMinAggregateInputType = {
    id?: true
    number?: true
    name?: true
    description?: true
    isFree?: true
    isActive?: true
  }

  export type LevelMaxAggregateInputType = {
    id?: true
    number?: true
    name?: true
    description?: true
    isFree?: true
    isActive?: true
  }

  export type LevelCountAggregateInputType = {
    id?: true
    number?: true
    name?: true
    description?: true
    isFree?: true
    isActive?: true
    _all?: true
  }

  export type LevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Level to aggregate.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Levels
    **/
    _count?: true | LevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelMaxAggregateInputType
  }

  export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
        [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevel[P]>
      : GetScalarType<T[P], AggregateLevel[P]>
  }




  export type LevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelWhereInput
    orderBy?: LevelOrderByWithAggregationInput | LevelOrderByWithAggregationInput[]
    by: LevelScalarFieldEnum[] | LevelScalarFieldEnum
    having?: LevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelCountAggregateInputType | true
    _avg?: LevelAvgAggregateInputType
    _sum?: LevelSumAggregateInputType
    _min?: LevelMinAggregateInputType
    _max?: LevelMaxAggregateInputType
  }

  export type LevelGroupByOutputType = {
    id: number
    number: number
    name: string
    description: string | null
    isFree: boolean
    isActive: boolean
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelGroupByOutputType[P]>
            : GetScalarType<T[P], LevelGroupByOutputType[P]>
        }
      >
    >


  export type LevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    name?: boolean
    description?: boolean
    isFree?: boolean
    isActive?: boolean
    chords?: boolean | Level$chordsArgs<ExtArgs>
    gameSessions?: boolean | Level$gameSessionsArgs<ExtArgs>
    leaderboardEntries?: boolean | Level$leaderboardEntriesArgs<ExtArgs>
    userStats?: boolean | Level$userStatsArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["level"]>

  export type LevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    name?: boolean
    description?: boolean
    isFree?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    name?: boolean
    description?: boolean
    isFree?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectScalar = {
    id?: boolean
    number?: boolean
    name?: boolean
    description?: boolean
    isFree?: boolean
    isActive?: boolean
  }

  export type LevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "name" | "description" | "isFree" | "isActive", ExtArgs["result"]["level"]>
  export type LevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chords?: boolean | Level$chordsArgs<ExtArgs>
    gameSessions?: boolean | Level$gameSessionsArgs<ExtArgs>
    leaderboardEntries?: boolean | Level$leaderboardEntriesArgs<ExtArgs>
    userStats?: boolean | Level$userStatsArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Level"
    objects: {
      chords: Prisma.$ChordPayload<ExtArgs>[]
      gameSessions: Prisma.$GameSessionPayload<ExtArgs>[]
      leaderboardEntries: Prisma.$LeaderboardEntryPayload<ExtArgs>[]
      userStats: Prisma.$UserStatsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: number
      name: string
      description: string | null
      isFree: boolean
      isActive: boolean
    }, ExtArgs["result"]["level"]>
    composites: {}
  }

  type LevelGetPayload<S extends boolean | null | undefined | LevelDefaultArgs> = $Result.GetResult<Prisma.$LevelPayload, S>

  type LevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelCountAggregateInputType | true
    }

  export interface LevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Level'], meta: { name: 'Level' } }
    /**
     * Find zero or one Level that matches the filter.
     * @param {LevelFindUniqueArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelFindUniqueArgs>(args: SelectSubset<T, LevelFindUniqueArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelFindUniqueOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelFindFirstArgs>(args?: SelectSubset<T, LevelFindFirstArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Levels
     * const levels = await prisma.level.findMany()
     * 
     * // Get first 10 Levels
     * const levels = await prisma.level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelWithIdOnly = await prisma.level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelFindManyArgs>(args?: SelectSubset<T, LevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Level.
     * @param {LevelCreateArgs} args - Arguments to create a Level.
     * @example
     * // Create one Level
     * const Level = await prisma.level.create({
     *   data: {
     *     // ... data to create a Level
     *   }
     * })
     * 
     */
    create<T extends LevelCreateArgs>(args: SelectSubset<T, LevelCreateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Levels.
     * @param {LevelCreateManyArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelCreateManyArgs>(args?: SelectSubset<T, LevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Levels and returns the data saved in the database.
     * @param {LevelCreateManyAndReturnArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Level.
     * @param {LevelDeleteArgs} args - Arguments to delete one Level.
     * @example
     * // Delete one Level
     * const Level = await prisma.level.delete({
     *   where: {
     *     // ... filter to delete one Level
     *   }
     * })
     * 
     */
    delete<T extends LevelDeleteArgs>(args: SelectSubset<T, LevelDeleteArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Level.
     * @param {LevelUpdateArgs} args - Arguments to update one Level.
     * @example
     * // Update one Level
     * const level = await prisma.level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelUpdateArgs>(args: SelectSubset<T, LevelUpdateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Levels.
     * @param {LevelDeleteManyArgs} args - Arguments to filter Levels to delete.
     * @example
     * // Delete a few Levels
     * const { count } = await prisma.level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelDeleteManyArgs>(args?: SelectSubset<T, LevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelUpdateManyArgs>(args: SelectSubset<T, LevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels and returns the data updated in the database.
     * @param {LevelUpdateManyAndReturnArgs} args - Arguments to update many Levels.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LevelUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Level.
     * @param {LevelUpsertArgs} args - Arguments to update or create a Level.
     * @example
     * // Update or create a Level
     * const level = await prisma.level.upsert({
     *   create: {
     *     // ... data to create a Level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Level we want to update
     *   }
     * })
     */
    upsert<T extends LevelUpsertArgs>(args: SelectSubset<T, LevelUpsertArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelCountArgs} args - Arguments to filter Levels to count.
     * @example
     * // Count the number of Levels
     * const count = await prisma.level.count({
     *   where: {
     *     // ... the filter for the Levels we want to count
     *   }
     * })
    **/
    count<T extends LevelCountArgs>(
      args?: Subset<T, LevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LevelAggregateArgs>(args: Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>

    /**
     * Group by Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelGroupByArgs} args - Group by arguments.
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
      T extends LevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelGroupByArgs['orderBy'] }
        : { orderBy?: LevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Level model
   */
  readonly fields: LevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chords<T extends Level$chordsArgs<ExtArgs> = {}>(args?: Subset<T, Level$chordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameSessions<T extends Level$gameSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Level$gameSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaderboardEntries<T extends Level$leaderboardEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Level$leaderboardEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userStats<T extends Level$userStatsArgs<ExtArgs> = {}>(args?: Subset<T, Level$userStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Level model
   */
  interface LevelFieldRefs {
    readonly id: FieldRef<"Level", 'Int'>
    readonly number: FieldRef<"Level", 'Int'>
    readonly name: FieldRef<"Level", 'String'>
    readonly description: FieldRef<"Level", 'String'>
    readonly isFree: FieldRef<"Level", 'Boolean'>
    readonly isActive: FieldRef<"Level", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Level findUnique
   */
  export type LevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findUniqueOrThrow
   */
  export type LevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findFirst
   */
  export type LevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findFirstOrThrow
   */
  export type LevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findMany
   */
  export type LevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level create
   */
  export type LevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to create a Level.
     */
    data: XOR<LevelCreateInput, LevelUncheckedCreateInput>
  }

  /**
   * Level createMany
   */
  export type LevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level createManyAndReturn
   */
  export type LevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level update
   */
  export type LevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to update a Level.
     */
    data: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
    /**
     * Choose, which Level to update.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level updateMany
   */
  export type LevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level updateManyAndReturn
   */
  export type LevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level upsert
   */
  export type LevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The filter to search for the Level to update in case it exists.
     */
    where: LevelWhereUniqueInput
    /**
     * In case the Level found by the `where` argument doesn't exist, create a new Level with this data.
     */
    create: XOR<LevelCreateInput, LevelUncheckedCreateInput>
    /**
     * In case the Level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
  }

  /**
   * Level delete
   */
  export type LevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter which Level to delete.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level deleteMany
   */
  export type LevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Levels to delete
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to delete.
     */
    limit?: number
  }

  /**
   * Level.chords
   */
  export type Level$chordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
    where?: ChordWhereInput
    orderBy?: ChordOrderByWithRelationInput | ChordOrderByWithRelationInput[]
    cursor?: ChordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChordScalarFieldEnum | ChordScalarFieldEnum[]
  }

  /**
   * Level.gameSessions
   */
  export type Level$gameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * Level.leaderboardEntries
   */
  export type Level$leaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    where?: LeaderboardEntryWhereInput
    orderBy?: LeaderboardEntryOrderByWithRelationInput | LeaderboardEntryOrderByWithRelationInput[]
    cursor?: LeaderboardEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderboardEntryScalarFieldEnum | LeaderboardEntryScalarFieldEnum[]
  }

  /**
   * Level.userStats
   */
  export type Level$userStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    where?: UserStatsWhereInput
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    cursor?: UserStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * Level without action
   */
  export type LevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
  }


  /**
   * Model Chord
   */

  export type AggregateChord = {
    _count: ChordCountAggregateOutputType | null
    _avg: ChordAvgAggregateOutputType | null
    _sum: ChordSumAggregateOutputType | null
    _min: ChordMinAggregateOutputType | null
    _max: ChordMaxAggregateOutputType | null
  }

  export type ChordAvgAggregateOutputType = {
    levelId: number | null
  }

  export type ChordSumAggregateOutputType = {
    levelId: number | null
  }

  export type ChordMinAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    audioFileUrl: string | null
    instrumentId: string | null
    levelId: number | null
    isActive: boolean | null
  }

  export type ChordMaxAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    audioFileUrl: string | null
    instrumentId: string | null
    levelId: number | null
    isActive: boolean | null
  }

  export type ChordCountAggregateOutputType = {
    id: number
    name: number
    displayName: number
    audioFileUrl: number
    instrumentId: number
    levelId: number
    isActive: number
    _all: number
  }


  export type ChordAvgAggregateInputType = {
    levelId?: true
  }

  export type ChordSumAggregateInputType = {
    levelId?: true
  }

  export type ChordMinAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    audioFileUrl?: true
    instrumentId?: true
    levelId?: true
    isActive?: true
  }

  export type ChordMaxAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    audioFileUrl?: true
    instrumentId?: true
    levelId?: true
    isActive?: true
  }

  export type ChordCountAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    audioFileUrl?: true
    instrumentId?: true
    levelId?: true
    isActive?: true
    _all?: true
  }

  export type ChordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chord to aggregate.
     */
    where?: ChordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chords to fetch.
     */
    orderBy?: ChordOrderByWithRelationInput | ChordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chords
    **/
    _count?: true | ChordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChordMaxAggregateInputType
  }

  export type GetChordAggregateType<T extends ChordAggregateArgs> = {
        [P in keyof T & keyof AggregateChord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChord[P]>
      : GetScalarType<T[P], AggregateChord[P]>
  }




  export type ChordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChordWhereInput
    orderBy?: ChordOrderByWithAggregationInput | ChordOrderByWithAggregationInput[]
    by: ChordScalarFieldEnum[] | ChordScalarFieldEnum
    having?: ChordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChordCountAggregateInputType | true
    _avg?: ChordAvgAggregateInputType
    _sum?: ChordSumAggregateInputType
    _min?: ChordMinAggregateInputType
    _max?: ChordMaxAggregateInputType
  }

  export type ChordGroupByOutputType = {
    id: string
    name: string
    displayName: string
    audioFileUrl: string | null
    instrumentId: string
    levelId: number
    isActive: boolean
    _count: ChordCountAggregateOutputType | null
    _avg: ChordAvgAggregateOutputType | null
    _sum: ChordSumAggregateOutputType | null
    _min: ChordMinAggregateOutputType | null
    _max: ChordMaxAggregateOutputType | null
  }

  type GetChordGroupByPayload<T extends ChordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChordGroupByOutputType[P]>
            : GetScalarType<T[P], ChordGroupByOutputType[P]>
        }
      >
    >


  export type ChordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    audioFileUrl?: boolean
    instrumentId?: boolean
    levelId?: boolean
    isActive?: boolean
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
    gameSessionChords?: boolean | Chord$gameSessionChordsArgs<ExtArgs>
    _count?: boolean | ChordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chord"]>

  export type ChordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    audioFileUrl?: boolean
    instrumentId?: boolean
    levelId?: boolean
    isActive?: boolean
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chord"]>

  export type ChordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    audioFileUrl?: boolean
    instrumentId?: boolean
    levelId?: boolean
    isActive?: boolean
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chord"]>

  export type ChordSelectScalar = {
    id?: boolean
    name?: boolean
    displayName?: boolean
    audioFileUrl?: boolean
    instrumentId?: boolean
    levelId?: boolean
    isActive?: boolean
  }

  export type ChordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "displayName" | "audioFileUrl" | "instrumentId" | "levelId" | "isActive", ExtArgs["result"]["chord"]>
  export type ChordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
    gameSessionChords?: boolean | Chord$gameSessionChordsArgs<ExtArgs>
    _count?: boolean | ChordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type ChordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $ChordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chord"
    objects: {
      instrument: Prisma.$InstrumentPayload<ExtArgs>
      level: Prisma.$LevelPayload<ExtArgs>
      gameSessionChords: Prisma.$GameSessionChordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      displayName: string
      audioFileUrl: string | null
      instrumentId: string
      levelId: number
      isActive: boolean
    }, ExtArgs["result"]["chord"]>
    composites: {}
  }

  type ChordGetPayload<S extends boolean | null | undefined | ChordDefaultArgs> = $Result.GetResult<Prisma.$ChordPayload, S>

  type ChordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChordCountAggregateInputType | true
    }

  export interface ChordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chord'], meta: { name: 'Chord' } }
    /**
     * Find zero or one Chord that matches the filter.
     * @param {ChordFindUniqueArgs} args - Arguments to find a Chord
     * @example
     * // Get one Chord
     * const chord = await prisma.chord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChordFindUniqueArgs>(args: SelectSubset<T, ChordFindUniqueArgs<ExtArgs>>): Prisma__ChordClient<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChordFindUniqueOrThrowArgs} args - Arguments to find a Chord
     * @example
     * // Get one Chord
     * const chord = await prisma.chord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChordFindUniqueOrThrowArgs>(args: SelectSubset<T, ChordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChordClient<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChordFindFirstArgs} args - Arguments to find a Chord
     * @example
     * // Get one Chord
     * const chord = await prisma.chord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChordFindFirstArgs>(args?: SelectSubset<T, ChordFindFirstArgs<ExtArgs>>): Prisma__ChordClient<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChordFindFirstOrThrowArgs} args - Arguments to find a Chord
     * @example
     * // Get one Chord
     * const chord = await prisma.chord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChordFindFirstOrThrowArgs>(args?: SelectSubset<T, ChordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChordClient<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chords
     * const chords = await prisma.chord.findMany()
     * 
     * // Get first 10 Chords
     * const chords = await prisma.chord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chordWithIdOnly = await prisma.chord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChordFindManyArgs>(args?: SelectSubset<T, ChordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chord.
     * @param {ChordCreateArgs} args - Arguments to create a Chord.
     * @example
     * // Create one Chord
     * const Chord = await prisma.chord.create({
     *   data: {
     *     // ... data to create a Chord
     *   }
     * })
     * 
     */
    create<T extends ChordCreateArgs>(args: SelectSubset<T, ChordCreateArgs<ExtArgs>>): Prisma__ChordClient<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chords.
     * @param {ChordCreateManyArgs} args - Arguments to create many Chords.
     * @example
     * // Create many Chords
     * const chord = await prisma.chord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChordCreateManyArgs>(args?: SelectSubset<T, ChordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chords and returns the data saved in the database.
     * @param {ChordCreateManyAndReturnArgs} args - Arguments to create many Chords.
     * @example
     * // Create many Chords
     * const chord = await prisma.chord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chords and only return the `id`
     * const chordWithIdOnly = await prisma.chord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChordCreateManyAndReturnArgs>(args?: SelectSubset<T, ChordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chord.
     * @param {ChordDeleteArgs} args - Arguments to delete one Chord.
     * @example
     * // Delete one Chord
     * const Chord = await prisma.chord.delete({
     *   where: {
     *     // ... filter to delete one Chord
     *   }
     * })
     * 
     */
    delete<T extends ChordDeleteArgs>(args: SelectSubset<T, ChordDeleteArgs<ExtArgs>>): Prisma__ChordClient<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chord.
     * @param {ChordUpdateArgs} args - Arguments to update one Chord.
     * @example
     * // Update one Chord
     * const chord = await prisma.chord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChordUpdateArgs>(args: SelectSubset<T, ChordUpdateArgs<ExtArgs>>): Prisma__ChordClient<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chords.
     * @param {ChordDeleteManyArgs} args - Arguments to filter Chords to delete.
     * @example
     * // Delete a few Chords
     * const { count } = await prisma.chord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChordDeleteManyArgs>(args?: SelectSubset<T, ChordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chords
     * const chord = await prisma.chord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChordUpdateManyArgs>(args: SelectSubset<T, ChordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chords and returns the data updated in the database.
     * @param {ChordUpdateManyAndReturnArgs} args - Arguments to update many Chords.
     * @example
     * // Update many Chords
     * const chord = await prisma.chord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chords and only return the `id`
     * const chordWithIdOnly = await prisma.chord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChordUpdateManyAndReturnArgs>(args: SelectSubset<T, ChordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chord.
     * @param {ChordUpsertArgs} args - Arguments to update or create a Chord.
     * @example
     * // Update or create a Chord
     * const chord = await prisma.chord.upsert({
     *   create: {
     *     // ... data to create a Chord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chord we want to update
     *   }
     * })
     */
    upsert<T extends ChordUpsertArgs>(args: SelectSubset<T, ChordUpsertArgs<ExtArgs>>): Prisma__ChordClient<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChordCountArgs} args - Arguments to filter Chords to count.
     * @example
     * // Count the number of Chords
     * const count = await prisma.chord.count({
     *   where: {
     *     // ... the filter for the Chords we want to count
     *   }
     * })
    **/
    count<T extends ChordCountArgs>(
      args?: Subset<T, ChordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChordAggregateArgs>(args: Subset<T, ChordAggregateArgs>): Prisma.PrismaPromise<GetChordAggregateType<T>>

    /**
     * Group by Chord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChordGroupByArgs} args - Group by arguments.
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
      T extends ChordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChordGroupByArgs['orderBy'] }
        : { orderBy?: ChordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chord model
   */
  readonly fields: ChordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instrument<T extends InstrumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstrumentDefaultArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gameSessionChords<T extends Chord$gameSessionChordsArgs<ExtArgs> = {}>(args?: Subset<T, Chord$gameSessionChordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chord model
   */
  interface ChordFieldRefs {
    readonly id: FieldRef<"Chord", 'String'>
    readonly name: FieldRef<"Chord", 'String'>
    readonly displayName: FieldRef<"Chord", 'String'>
    readonly audioFileUrl: FieldRef<"Chord", 'String'>
    readonly instrumentId: FieldRef<"Chord", 'String'>
    readonly levelId: FieldRef<"Chord", 'Int'>
    readonly isActive: FieldRef<"Chord", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Chord findUnique
   */
  export type ChordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
    /**
     * Filter, which Chord to fetch.
     */
    where: ChordWhereUniqueInput
  }

  /**
   * Chord findUniqueOrThrow
   */
  export type ChordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
    /**
     * Filter, which Chord to fetch.
     */
    where: ChordWhereUniqueInput
  }

  /**
   * Chord findFirst
   */
  export type ChordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
    /**
     * Filter, which Chord to fetch.
     */
    where?: ChordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chords to fetch.
     */
    orderBy?: ChordOrderByWithRelationInput | ChordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chords.
     */
    cursor?: ChordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chords.
     */
    distinct?: ChordScalarFieldEnum | ChordScalarFieldEnum[]
  }

  /**
   * Chord findFirstOrThrow
   */
  export type ChordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
    /**
     * Filter, which Chord to fetch.
     */
    where?: ChordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chords to fetch.
     */
    orderBy?: ChordOrderByWithRelationInput | ChordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chords.
     */
    cursor?: ChordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chords.
     */
    distinct?: ChordScalarFieldEnum | ChordScalarFieldEnum[]
  }

  /**
   * Chord findMany
   */
  export type ChordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
    /**
     * Filter, which Chords to fetch.
     */
    where?: ChordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chords to fetch.
     */
    orderBy?: ChordOrderByWithRelationInput | ChordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chords.
     */
    cursor?: ChordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chords.
     */
    skip?: number
    distinct?: ChordScalarFieldEnum | ChordScalarFieldEnum[]
  }

  /**
   * Chord create
   */
  export type ChordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
    /**
     * The data needed to create a Chord.
     */
    data: XOR<ChordCreateInput, ChordUncheckedCreateInput>
  }

  /**
   * Chord createMany
   */
  export type ChordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chords.
     */
    data: ChordCreateManyInput | ChordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chord createManyAndReturn
   */
  export type ChordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * The data used to create many Chords.
     */
    data: ChordCreateManyInput | ChordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chord update
   */
  export type ChordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
    /**
     * The data needed to update a Chord.
     */
    data: XOR<ChordUpdateInput, ChordUncheckedUpdateInput>
    /**
     * Choose, which Chord to update.
     */
    where: ChordWhereUniqueInput
  }

  /**
   * Chord updateMany
   */
  export type ChordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chords.
     */
    data: XOR<ChordUpdateManyMutationInput, ChordUncheckedUpdateManyInput>
    /**
     * Filter which Chords to update
     */
    where?: ChordWhereInput
    /**
     * Limit how many Chords to update.
     */
    limit?: number
  }

  /**
   * Chord updateManyAndReturn
   */
  export type ChordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * The data used to update Chords.
     */
    data: XOR<ChordUpdateManyMutationInput, ChordUncheckedUpdateManyInput>
    /**
     * Filter which Chords to update
     */
    where?: ChordWhereInput
    /**
     * Limit how many Chords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chord upsert
   */
  export type ChordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
    /**
     * The filter to search for the Chord to update in case it exists.
     */
    where: ChordWhereUniqueInput
    /**
     * In case the Chord found by the `where` argument doesn't exist, create a new Chord with this data.
     */
    create: XOR<ChordCreateInput, ChordUncheckedCreateInput>
    /**
     * In case the Chord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChordUpdateInput, ChordUncheckedUpdateInput>
  }

  /**
   * Chord delete
   */
  export type ChordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
    /**
     * Filter which Chord to delete.
     */
    where: ChordWhereUniqueInput
  }

  /**
   * Chord deleteMany
   */
  export type ChordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chords to delete
     */
    where?: ChordWhereInput
    /**
     * Limit how many Chords to delete.
     */
    limit?: number
  }

  /**
   * Chord.gameSessionChords
   */
  export type Chord$gameSessionChordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
    where?: GameSessionChordWhereInput
    orderBy?: GameSessionChordOrderByWithRelationInput | GameSessionChordOrderByWithRelationInput[]
    cursor?: GameSessionChordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionChordScalarFieldEnum | GameSessionChordScalarFieldEnum[]
  }

  /**
   * Chord without action
   */
  export type ChordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chord
     */
    select?: ChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chord
     */
    omit?: ChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChordInclude<ExtArgs> | null
  }


  /**
   * Model GameSession
   */

  export type AggregateGameSession = {
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  export type GameSessionAvgAggregateOutputType = {
    levelId: number | null
    totalQuestions: number | null
    correctAnswers: number | null
    accuracy: number | null
    sessionStreak: number | null
    maxStreak: number | null
    durationMs: number | null
  }

  export type GameSessionSumAggregateOutputType = {
    levelId: number | null
    totalQuestions: number | null
    correctAnswers: number | null
    accuracy: number | null
    sessionStreak: number | null
    maxStreak: number | null
    durationMs: number | null
  }

  export type GameSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    instrumentId: string | null
    levelId: number | null
    gameMode: $Enums.GameMode | null
    isCompleted: boolean | null
    totalQuestions: number | null
    correctAnswers: number | null
    accuracy: number | null
    sessionStreak: number | null
    maxStreak: number | null
    startedAt: Date | null
    completedAt: Date | null
    durationMs: number | null
  }

  export type GameSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    instrumentId: string | null
    levelId: number | null
    gameMode: $Enums.GameMode | null
    isCompleted: boolean | null
    totalQuestions: number | null
    correctAnswers: number | null
    accuracy: number | null
    sessionStreak: number | null
    maxStreak: number | null
    startedAt: Date | null
    completedAt: Date | null
    durationMs: number | null
  }

  export type GameSessionCountAggregateOutputType = {
    id: number
    userId: number
    instrumentId: number
    levelId: number
    gameMode: number
    isCompleted: number
    totalQuestions: number
    correctAnswers: number
    accuracy: number
    sessionStreak: number
    maxStreak: number
    startedAt: number
    completedAt: number
    durationMs: number
    _all: number
  }


  export type GameSessionAvgAggregateInputType = {
    levelId?: true
    totalQuestions?: true
    correctAnswers?: true
    accuracy?: true
    sessionStreak?: true
    maxStreak?: true
    durationMs?: true
  }

  export type GameSessionSumAggregateInputType = {
    levelId?: true
    totalQuestions?: true
    correctAnswers?: true
    accuracy?: true
    sessionStreak?: true
    maxStreak?: true
    durationMs?: true
  }

  export type GameSessionMinAggregateInputType = {
    id?: true
    userId?: true
    instrumentId?: true
    levelId?: true
    gameMode?: true
    isCompleted?: true
    totalQuestions?: true
    correctAnswers?: true
    accuracy?: true
    sessionStreak?: true
    maxStreak?: true
    startedAt?: true
    completedAt?: true
    durationMs?: true
  }

  export type GameSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    instrumentId?: true
    levelId?: true
    gameMode?: true
    isCompleted?: true
    totalQuestions?: true
    correctAnswers?: true
    accuracy?: true
    sessionStreak?: true
    maxStreak?: true
    startedAt?: true
    completedAt?: true
    durationMs?: true
  }

  export type GameSessionCountAggregateInputType = {
    id?: true
    userId?: true
    instrumentId?: true
    levelId?: true
    gameMode?: true
    isCompleted?: true
    totalQuestions?: true
    correctAnswers?: true
    accuracy?: true
    sessionStreak?: true
    maxStreak?: true
    startedAt?: true
    completedAt?: true
    durationMs?: true
    _all?: true
  }

  export type GameSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSession to aggregate.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameSessions
    **/
    _count?: true | GameSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSessionMaxAggregateInputType
  }

  export type GetGameSessionAggregateType<T extends GameSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSession[P]>
      : GetScalarType<T[P], AggregateGameSession[P]>
  }




  export type GameSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithAggregationInput | GameSessionOrderByWithAggregationInput[]
    by: GameSessionScalarFieldEnum[] | GameSessionScalarFieldEnum
    having?: GameSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSessionCountAggregateInputType | true
    _avg?: GameSessionAvgAggregateInputType
    _sum?: GameSessionSumAggregateInputType
    _min?: GameSessionMinAggregateInputType
    _max?: GameSessionMaxAggregateInputType
  }

  export type GameSessionGroupByOutputType = {
    id: string
    userId: string
    instrumentId: string
    levelId: number
    gameMode: $Enums.GameMode
    isCompleted: boolean
    totalQuestions: number
    correctAnswers: number
    accuracy: number
    sessionStreak: number
    maxStreak: number
    startedAt: Date
    completedAt: Date | null
    durationMs: number | null
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  type GetGameSessionGroupByPayload<T extends GameSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
            : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
        }
      >
    >


  export type GameSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    instrumentId?: boolean
    levelId?: boolean
    gameMode?: boolean
    isCompleted?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    accuracy?: boolean
    sessionStreak?: boolean
    maxStreak?: boolean
    startedAt?: boolean
    completedAt?: boolean
    durationMs?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
    chords?: boolean | GameSession$chordsArgs<ExtArgs>
    _count?: boolean | GameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>

  export type GameSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    instrumentId?: boolean
    levelId?: boolean
    gameMode?: boolean
    isCompleted?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    accuracy?: boolean
    sessionStreak?: boolean
    maxStreak?: boolean
    startedAt?: boolean
    completedAt?: boolean
    durationMs?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>

  export type GameSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    instrumentId?: boolean
    levelId?: boolean
    gameMode?: boolean
    isCompleted?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    accuracy?: boolean
    sessionStreak?: boolean
    maxStreak?: boolean
    startedAt?: boolean
    completedAt?: boolean
    durationMs?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>

  export type GameSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    instrumentId?: boolean
    levelId?: boolean
    gameMode?: boolean
    isCompleted?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    accuracy?: boolean
    sessionStreak?: boolean
    maxStreak?: boolean
    startedAt?: boolean
    completedAt?: boolean
    durationMs?: boolean
  }

  export type GameSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "instrumentId" | "levelId" | "gameMode" | "isCompleted" | "totalQuestions" | "correctAnswers" | "accuracy" | "sessionStreak" | "maxStreak" | "startedAt" | "completedAt" | "durationMs", ExtArgs["result"]["gameSession"]>
  export type GameSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
    chords?: boolean | GameSession$chordsArgs<ExtArgs>
    _count?: boolean | GameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type GameSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $GameSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      instrument: Prisma.$InstrumentPayload<ExtArgs>
      level: Prisma.$LevelPayload<ExtArgs>
      chords: Prisma.$GameSessionChordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      instrumentId: string
      levelId: number
      gameMode: $Enums.GameMode
      isCompleted: boolean
      totalQuestions: number
      correctAnswers: number
      accuracy: number
      sessionStreak: number
      maxStreak: number
      startedAt: Date
      completedAt: Date | null
      durationMs: number | null
    }, ExtArgs["result"]["gameSession"]>
    composites: {}
  }

  type GameSessionGetPayload<S extends boolean | null | undefined | GameSessionDefaultArgs> = $Result.GetResult<Prisma.$GameSessionPayload, S>

  type GameSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameSessionCountAggregateInputType | true
    }

  export interface GameSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameSession'], meta: { name: 'GameSession' } }
    /**
     * Find zero or one GameSession that matches the filter.
     * @param {GameSessionFindUniqueArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameSessionFindUniqueArgs>(args: SelectSubset<T, GameSessionFindUniqueArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameSessionFindUniqueOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameSessionFindFirstArgs>(args?: SelectSubset<T, GameSessionFindFirstArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSessions
     * const gameSessions = await prisma.gameSession.findMany()
     * 
     * // Get first 10 GameSessions
     * const gameSessions = await prisma.gameSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameSessionFindManyArgs>(args?: SelectSubset<T, GameSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameSession.
     * @param {GameSessionCreateArgs} args - Arguments to create a GameSession.
     * @example
     * // Create one GameSession
     * const GameSession = await prisma.gameSession.create({
     *   data: {
     *     // ... data to create a GameSession
     *   }
     * })
     * 
     */
    create<T extends GameSessionCreateArgs>(args: SelectSubset<T, GameSessionCreateArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameSessions.
     * @param {GameSessionCreateManyArgs} args - Arguments to create many GameSessions.
     * @example
     * // Create many GameSessions
     * const gameSession = await prisma.gameSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameSessionCreateManyArgs>(args?: SelectSubset<T, GameSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameSessions and returns the data saved in the database.
     * @param {GameSessionCreateManyAndReturnArgs} args - Arguments to create many GameSessions.
     * @example
     * // Create many GameSessions
     * const gameSession = await prisma.gameSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameSessions and only return the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameSession.
     * @param {GameSessionDeleteArgs} args - Arguments to delete one GameSession.
     * @example
     * // Delete one GameSession
     * const GameSession = await prisma.gameSession.delete({
     *   where: {
     *     // ... filter to delete one GameSession
     *   }
     * })
     * 
     */
    delete<T extends GameSessionDeleteArgs>(args: SelectSubset<T, GameSessionDeleteArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameSession.
     * @param {GameSessionUpdateArgs} args - Arguments to update one GameSession.
     * @example
     * // Update one GameSession
     * const gameSession = await prisma.gameSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameSessionUpdateArgs>(args: SelectSubset<T, GameSessionUpdateArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameSessions.
     * @param {GameSessionDeleteManyArgs} args - Arguments to filter GameSessions to delete.
     * @example
     * // Delete a few GameSessions
     * const { count } = await prisma.gameSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameSessionDeleteManyArgs>(args?: SelectSubset<T, GameSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSessions
     * const gameSession = await prisma.gameSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameSessionUpdateManyArgs>(args: SelectSubset<T, GameSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessions and returns the data updated in the database.
     * @param {GameSessionUpdateManyAndReturnArgs} args - Arguments to update many GameSessions.
     * @example
     * // Update many GameSessions
     * const gameSession = await prisma.gameSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameSessions and only return the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, GameSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameSession.
     * @param {GameSessionUpsertArgs} args - Arguments to update or create a GameSession.
     * @example
     * // Update or create a GameSession
     * const gameSession = await prisma.gameSession.upsert({
     *   create: {
     *     // ... data to create a GameSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSession we want to update
     *   }
     * })
     */
    upsert<T extends GameSessionUpsertArgs>(args: SelectSubset<T, GameSessionUpsertArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionCountArgs} args - Arguments to filter GameSessions to count.
     * @example
     * // Count the number of GameSessions
     * const count = await prisma.gameSession.count({
     *   where: {
     *     // ... the filter for the GameSessions we want to count
     *   }
     * })
    **/
    count<T extends GameSessionCountArgs>(
      args?: Subset<T, GameSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameSessionAggregateArgs>(args: Subset<T, GameSessionAggregateArgs>): Prisma.PrismaPromise<GetGameSessionAggregateType<T>>

    /**
     * Group by GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionGroupByArgs} args - Group by arguments.
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
      T extends GameSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameSessionGroupByArgs['orderBy'] }
        : { orderBy?: GameSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameSession model
   */
  readonly fields: GameSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instrument<T extends InstrumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstrumentDefaultArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chords<T extends GameSession$chordsArgs<ExtArgs> = {}>(args?: Subset<T, GameSession$chordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GameSession model
   */
  interface GameSessionFieldRefs {
    readonly id: FieldRef<"GameSession", 'String'>
    readonly userId: FieldRef<"GameSession", 'String'>
    readonly instrumentId: FieldRef<"GameSession", 'String'>
    readonly levelId: FieldRef<"GameSession", 'Int'>
    readonly gameMode: FieldRef<"GameSession", 'GameMode'>
    readonly isCompleted: FieldRef<"GameSession", 'Boolean'>
    readonly totalQuestions: FieldRef<"GameSession", 'Int'>
    readonly correctAnswers: FieldRef<"GameSession", 'Int'>
    readonly accuracy: FieldRef<"GameSession", 'Float'>
    readonly sessionStreak: FieldRef<"GameSession", 'Int'>
    readonly maxStreak: FieldRef<"GameSession", 'Int'>
    readonly startedAt: FieldRef<"GameSession", 'DateTime'>
    readonly completedAt: FieldRef<"GameSession", 'DateTime'>
    readonly durationMs: FieldRef<"GameSession", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GameSession findUnique
   */
  export type GameSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession findUniqueOrThrow
   */
  export type GameSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession findFirst
   */
  export type GameSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession findFirstOrThrow
   */
  export type GameSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession findMany
   */
  export type GameSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSessions to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession create
   */
  export type GameSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameSession.
     */
    data: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
  }

  /**
   * GameSession createMany
   */
  export type GameSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameSessions.
     */
    data: GameSessionCreateManyInput | GameSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameSession createManyAndReturn
   */
  export type GameSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * The data used to create many GameSessions.
     */
    data: GameSessionCreateManyInput | GameSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameSession update
   */
  export type GameSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameSession.
     */
    data: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
    /**
     * Choose, which GameSession to update.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession updateMany
   */
  export type GameSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameSessions.
     */
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyInput>
    /**
     * Filter which GameSessions to update
     */
    where?: GameSessionWhereInput
    /**
     * Limit how many GameSessions to update.
     */
    limit?: number
  }

  /**
   * GameSession updateManyAndReturn
   */
  export type GameSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * The data used to update GameSessions.
     */
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyInput>
    /**
     * Filter which GameSessions to update
     */
    where?: GameSessionWhereInput
    /**
     * Limit how many GameSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameSession upsert
   */
  export type GameSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameSession to update in case it exists.
     */
    where: GameSessionWhereUniqueInput
    /**
     * In case the GameSession found by the `where` argument doesn't exist, create a new GameSession with this data.
     */
    create: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
    /**
     * In case the GameSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
  }

  /**
   * GameSession delete
   */
  export type GameSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter which GameSession to delete.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession deleteMany
   */
  export type GameSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSessions to delete
     */
    where?: GameSessionWhereInput
    /**
     * Limit how many GameSessions to delete.
     */
    limit?: number
  }

  /**
   * GameSession.chords
   */
  export type GameSession$chordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
    where?: GameSessionChordWhereInput
    orderBy?: GameSessionChordOrderByWithRelationInput | GameSessionChordOrderByWithRelationInput[]
    cursor?: GameSessionChordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionChordScalarFieldEnum | GameSessionChordScalarFieldEnum[]
  }

  /**
   * GameSession without action
   */
  export type GameSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
  }


  /**
   * Model GameSessionChord
   */

  export type AggregateGameSessionChord = {
    _count: GameSessionChordCountAggregateOutputType | null
    _avg: GameSessionChordAvgAggregateOutputType | null
    _sum: GameSessionChordSumAggregateOutputType | null
    _min: GameSessionChordMinAggregateOutputType | null
    _max: GameSessionChordMaxAggregateOutputType | null
  }

  export type GameSessionChordAvgAggregateOutputType = {
    sequenceOrder: number | null
    responseTimeMs: number | null
  }

  export type GameSessionChordSumAggregateOutputType = {
    sequenceOrder: number | null
    responseTimeMs: number | null
  }

  export type GameSessionChordMinAggregateOutputType = {
    id: string | null
    gameSessionId: string | null
    chordId: string | null
    sequenceOrder: number | null
    userAnswer: string | null
    isCorrect: boolean | null
    responseTimeMs: number | null
    playedAt: Date | null
  }

  export type GameSessionChordMaxAggregateOutputType = {
    id: string | null
    gameSessionId: string | null
    chordId: string | null
    sequenceOrder: number | null
    userAnswer: string | null
    isCorrect: boolean | null
    responseTimeMs: number | null
    playedAt: Date | null
  }

  export type GameSessionChordCountAggregateOutputType = {
    id: number
    gameSessionId: number
    chordId: number
    sequenceOrder: number
    userAnswer: number
    isCorrect: number
    responseTimeMs: number
    playedAt: number
    _all: number
  }


  export type GameSessionChordAvgAggregateInputType = {
    sequenceOrder?: true
    responseTimeMs?: true
  }

  export type GameSessionChordSumAggregateInputType = {
    sequenceOrder?: true
    responseTimeMs?: true
  }

  export type GameSessionChordMinAggregateInputType = {
    id?: true
    gameSessionId?: true
    chordId?: true
    sequenceOrder?: true
    userAnswer?: true
    isCorrect?: true
    responseTimeMs?: true
    playedAt?: true
  }

  export type GameSessionChordMaxAggregateInputType = {
    id?: true
    gameSessionId?: true
    chordId?: true
    sequenceOrder?: true
    userAnswer?: true
    isCorrect?: true
    responseTimeMs?: true
    playedAt?: true
  }

  export type GameSessionChordCountAggregateInputType = {
    id?: true
    gameSessionId?: true
    chordId?: true
    sequenceOrder?: true
    userAnswer?: true
    isCorrect?: true
    responseTimeMs?: true
    playedAt?: true
    _all?: true
  }

  export type GameSessionChordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSessionChord to aggregate.
     */
    where?: GameSessionChordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessionChords to fetch.
     */
    orderBy?: GameSessionChordOrderByWithRelationInput | GameSessionChordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameSessionChordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessionChords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessionChords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameSessionChords
    **/
    _count?: true | GameSessionChordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameSessionChordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSessionChordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSessionChordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSessionChordMaxAggregateInputType
  }

  export type GetGameSessionChordAggregateType<T extends GameSessionChordAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSessionChord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSessionChord[P]>
      : GetScalarType<T[P], AggregateGameSessionChord[P]>
  }




  export type GameSessionChordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionChordWhereInput
    orderBy?: GameSessionChordOrderByWithAggregationInput | GameSessionChordOrderByWithAggregationInput[]
    by: GameSessionChordScalarFieldEnum[] | GameSessionChordScalarFieldEnum
    having?: GameSessionChordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSessionChordCountAggregateInputType | true
    _avg?: GameSessionChordAvgAggregateInputType
    _sum?: GameSessionChordSumAggregateInputType
    _min?: GameSessionChordMinAggregateInputType
    _max?: GameSessionChordMaxAggregateInputType
  }

  export type GameSessionChordGroupByOutputType = {
    id: string
    gameSessionId: string
    chordId: string
    sequenceOrder: number
    userAnswer: string | null
    isCorrect: boolean
    responseTimeMs: number | null
    playedAt: Date
    _count: GameSessionChordCountAggregateOutputType | null
    _avg: GameSessionChordAvgAggregateOutputType | null
    _sum: GameSessionChordSumAggregateOutputType | null
    _min: GameSessionChordMinAggregateOutputType | null
    _max: GameSessionChordMaxAggregateOutputType | null
  }

  type GetGameSessionChordGroupByPayload<T extends GameSessionChordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameSessionChordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSessionChordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSessionChordGroupByOutputType[P]>
            : GetScalarType<T[P], GameSessionChordGroupByOutputType[P]>
        }
      >
    >


  export type GameSessionChordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameSessionId?: boolean
    chordId?: boolean
    sequenceOrder?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    responseTimeMs?: boolean
    playedAt?: boolean
    gameSession?: boolean | GameSessionDefaultArgs<ExtArgs>
    chord?: boolean | ChordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSessionChord"]>

  export type GameSessionChordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameSessionId?: boolean
    chordId?: boolean
    sequenceOrder?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    responseTimeMs?: boolean
    playedAt?: boolean
    gameSession?: boolean | GameSessionDefaultArgs<ExtArgs>
    chord?: boolean | ChordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSessionChord"]>

  export type GameSessionChordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameSessionId?: boolean
    chordId?: boolean
    sequenceOrder?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    responseTimeMs?: boolean
    playedAt?: boolean
    gameSession?: boolean | GameSessionDefaultArgs<ExtArgs>
    chord?: boolean | ChordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSessionChord"]>

  export type GameSessionChordSelectScalar = {
    id?: boolean
    gameSessionId?: boolean
    chordId?: boolean
    sequenceOrder?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    responseTimeMs?: boolean
    playedAt?: boolean
  }

  export type GameSessionChordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameSessionId" | "chordId" | "sequenceOrder" | "userAnswer" | "isCorrect" | "responseTimeMs" | "playedAt", ExtArgs["result"]["gameSessionChord"]>
  export type GameSessionChordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameSession?: boolean | GameSessionDefaultArgs<ExtArgs>
    chord?: boolean | ChordDefaultArgs<ExtArgs>
  }
  export type GameSessionChordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameSession?: boolean | GameSessionDefaultArgs<ExtArgs>
    chord?: boolean | ChordDefaultArgs<ExtArgs>
  }
  export type GameSessionChordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameSession?: boolean | GameSessionDefaultArgs<ExtArgs>
    chord?: boolean | ChordDefaultArgs<ExtArgs>
  }

  export type $GameSessionChordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameSessionChord"
    objects: {
      gameSession: Prisma.$GameSessionPayload<ExtArgs>
      chord: Prisma.$ChordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameSessionId: string
      chordId: string
      sequenceOrder: number
      userAnswer: string | null
      isCorrect: boolean
      responseTimeMs: number | null
      playedAt: Date
    }, ExtArgs["result"]["gameSessionChord"]>
    composites: {}
  }

  type GameSessionChordGetPayload<S extends boolean | null | undefined | GameSessionChordDefaultArgs> = $Result.GetResult<Prisma.$GameSessionChordPayload, S>

  type GameSessionChordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameSessionChordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameSessionChordCountAggregateInputType | true
    }

  export interface GameSessionChordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameSessionChord'], meta: { name: 'GameSessionChord' } }
    /**
     * Find zero or one GameSessionChord that matches the filter.
     * @param {GameSessionChordFindUniqueArgs} args - Arguments to find a GameSessionChord
     * @example
     * // Get one GameSessionChord
     * const gameSessionChord = await prisma.gameSessionChord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameSessionChordFindUniqueArgs>(args: SelectSubset<T, GameSessionChordFindUniqueArgs<ExtArgs>>): Prisma__GameSessionChordClient<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameSessionChord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameSessionChordFindUniqueOrThrowArgs} args - Arguments to find a GameSessionChord
     * @example
     * // Get one GameSessionChord
     * const gameSessionChord = await prisma.gameSessionChord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameSessionChordFindUniqueOrThrowArgs>(args: SelectSubset<T, GameSessionChordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameSessionChordClient<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSessionChord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionChordFindFirstArgs} args - Arguments to find a GameSessionChord
     * @example
     * // Get one GameSessionChord
     * const gameSessionChord = await prisma.gameSessionChord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameSessionChordFindFirstArgs>(args?: SelectSubset<T, GameSessionChordFindFirstArgs<ExtArgs>>): Prisma__GameSessionChordClient<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSessionChord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionChordFindFirstOrThrowArgs} args - Arguments to find a GameSessionChord
     * @example
     * // Get one GameSessionChord
     * const gameSessionChord = await prisma.gameSessionChord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameSessionChordFindFirstOrThrowArgs>(args?: SelectSubset<T, GameSessionChordFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameSessionChordClient<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameSessionChords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionChordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSessionChords
     * const gameSessionChords = await prisma.gameSessionChord.findMany()
     * 
     * // Get first 10 GameSessionChords
     * const gameSessionChords = await prisma.gameSessionChord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameSessionChordWithIdOnly = await prisma.gameSessionChord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameSessionChordFindManyArgs>(args?: SelectSubset<T, GameSessionChordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameSessionChord.
     * @param {GameSessionChordCreateArgs} args - Arguments to create a GameSessionChord.
     * @example
     * // Create one GameSessionChord
     * const GameSessionChord = await prisma.gameSessionChord.create({
     *   data: {
     *     // ... data to create a GameSessionChord
     *   }
     * })
     * 
     */
    create<T extends GameSessionChordCreateArgs>(args: SelectSubset<T, GameSessionChordCreateArgs<ExtArgs>>): Prisma__GameSessionChordClient<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameSessionChords.
     * @param {GameSessionChordCreateManyArgs} args - Arguments to create many GameSessionChords.
     * @example
     * // Create many GameSessionChords
     * const gameSessionChord = await prisma.gameSessionChord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameSessionChordCreateManyArgs>(args?: SelectSubset<T, GameSessionChordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameSessionChords and returns the data saved in the database.
     * @param {GameSessionChordCreateManyAndReturnArgs} args - Arguments to create many GameSessionChords.
     * @example
     * // Create many GameSessionChords
     * const gameSessionChord = await prisma.gameSessionChord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameSessionChords and only return the `id`
     * const gameSessionChordWithIdOnly = await prisma.gameSessionChord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameSessionChordCreateManyAndReturnArgs>(args?: SelectSubset<T, GameSessionChordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameSessionChord.
     * @param {GameSessionChordDeleteArgs} args - Arguments to delete one GameSessionChord.
     * @example
     * // Delete one GameSessionChord
     * const GameSessionChord = await prisma.gameSessionChord.delete({
     *   where: {
     *     // ... filter to delete one GameSessionChord
     *   }
     * })
     * 
     */
    delete<T extends GameSessionChordDeleteArgs>(args: SelectSubset<T, GameSessionChordDeleteArgs<ExtArgs>>): Prisma__GameSessionChordClient<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameSessionChord.
     * @param {GameSessionChordUpdateArgs} args - Arguments to update one GameSessionChord.
     * @example
     * // Update one GameSessionChord
     * const gameSessionChord = await prisma.gameSessionChord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameSessionChordUpdateArgs>(args: SelectSubset<T, GameSessionChordUpdateArgs<ExtArgs>>): Prisma__GameSessionChordClient<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameSessionChords.
     * @param {GameSessionChordDeleteManyArgs} args - Arguments to filter GameSessionChords to delete.
     * @example
     * // Delete a few GameSessionChords
     * const { count } = await prisma.gameSessionChord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameSessionChordDeleteManyArgs>(args?: SelectSubset<T, GameSessionChordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessionChords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionChordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSessionChords
     * const gameSessionChord = await prisma.gameSessionChord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameSessionChordUpdateManyArgs>(args: SelectSubset<T, GameSessionChordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessionChords and returns the data updated in the database.
     * @param {GameSessionChordUpdateManyAndReturnArgs} args - Arguments to update many GameSessionChords.
     * @example
     * // Update many GameSessionChords
     * const gameSessionChord = await prisma.gameSessionChord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameSessionChords and only return the `id`
     * const gameSessionChordWithIdOnly = await prisma.gameSessionChord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameSessionChordUpdateManyAndReturnArgs>(args: SelectSubset<T, GameSessionChordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameSessionChord.
     * @param {GameSessionChordUpsertArgs} args - Arguments to update or create a GameSessionChord.
     * @example
     * // Update or create a GameSessionChord
     * const gameSessionChord = await prisma.gameSessionChord.upsert({
     *   create: {
     *     // ... data to create a GameSessionChord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSessionChord we want to update
     *   }
     * })
     */
    upsert<T extends GameSessionChordUpsertArgs>(args: SelectSubset<T, GameSessionChordUpsertArgs<ExtArgs>>): Prisma__GameSessionChordClient<$Result.GetResult<Prisma.$GameSessionChordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameSessionChords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionChordCountArgs} args - Arguments to filter GameSessionChords to count.
     * @example
     * // Count the number of GameSessionChords
     * const count = await prisma.gameSessionChord.count({
     *   where: {
     *     // ... the filter for the GameSessionChords we want to count
     *   }
     * })
    **/
    count<T extends GameSessionChordCountArgs>(
      args?: Subset<T, GameSessionChordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSessionChordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSessionChord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionChordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameSessionChordAggregateArgs>(args: Subset<T, GameSessionChordAggregateArgs>): Prisma.PrismaPromise<GetGameSessionChordAggregateType<T>>

    /**
     * Group by GameSessionChord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionChordGroupByArgs} args - Group by arguments.
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
      T extends GameSessionChordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameSessionChordGroupByArgs['orderBy'] }
        : { orderBy?: GameSessionChordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameSessionChordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSessionChordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameSessionChord model
   */
  readonly fields: GameSessionChordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameSessionChord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameSessionChordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameSession<T extends GameSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameSessionDefaultArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chord<T extends ChordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChordDefaultArgs<ExtArgs>>): Prisma__ChordClient<$Result.GetResult<Prisma.$ChordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GameSessionChord model
   */
  interface GameSessionChordFieldRefs {
    readonly id: FieldRef<"GameSessionChord", 'String'>
    readonly gameSessionId: FieldRef<"GameSessionChord", 'String'>
    readonly chordId: FieldRef<"GameSessionChord", 'String'>
    readonly sequenceOrder: FieldRef<"GameSessionChord", 'Int'>
    readonly userAnswer: FieldRef<"GameSessionChord", 'String'>
    readonly isCorrect: FieldRef<"GameSessionChord", 'Boolean'>
    readonly responseTimeMs: FieldRef<"GameSessionChord", 'Int'>
    readonly playedAt: FieldRef<"GameSessionChord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameSessionChord findUnique
   */
  export type GameSessionChordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
    /**
     * Filter, which GameSessionChord to fetch.
     */
    where: GameSessionChordWhereUniqueInput
  }

  /**
   * GameSessionChord findUniqueOrThrow
   */
  export type GameSessionChordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
    /**
     * Filter, which GameSessionChord to fetch.
     */
    where: GameSessionChordWhereUniqueInput
  }

  /**
   * GameSessionChord findFirst
   */
  export type GameSessionChordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
    /**
     * Filter, which GameSessionChord to fetch.
     */
    where?: GameSessionChordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessionChords to fetch.
     */
    orderBy?: GameSessionChordOrderByWithRelationInput | GameSessionChordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessionChords.
     */
    cursor?: GameSessionChordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessionChords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessionChords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessionChords.
     */
    distinct?: GameSessionChordScalarFieldEnum | GameSessionChordScalarFieldEnum[]
  }

  /**
   * GameSessionChord findFirstOrThrow
   */
  export type GameSessionChordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
    /**
     * Filter, which GameSessionChord to fetch.
     */
    where?: GameSessionChordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessionChords to fetch.
     */
    orderBy?: GameSessionChordOrderByWithRelationInput | GameSessionChordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessionChords.
     */
    cursor?: GameSessionChordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessionChords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessionChords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessionChords.
     */
    distinct?: GameSessionChordScalarFieldEnum | GameSessionChordScalarFieldEnum[]
  }

  /**
   * GameSessionChord findMany
   */
  export type GameSessionChordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
    /**
     * Filter, which GameSessionChords to fetch.
     */
    where?: GameSessionChordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessionChords to fetch.
     */
    orderBy?: GameSessionChordOrderByWithRelationInput | GameSessionChordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameSessionChords.
     */
    cursor?: GameSessionChordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessionChords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessionChords.
     */
    skip?: number
    distinct?: GameSessionChordScalarFieldEnum | GameSessionChordScalarFieldEnum[]
  }

  /**
   * GameSessionChord create
   */
  export type GameSessionChordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
    /**
     * The data needed to create a GameSessionChord.
     */
    data: XOR<GameSessionChordCreateInput, GameSessionChordUncheckedCreateInput>
  }

  /**
   * GameSessionChord createMany
   */
  export type GameSessionChordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameSessionChords.
     */
    data: GameSessionChordCreateManyInput | GameSessionChordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameSessionChord createManyAndReturn
   */
  export type GameSessionChordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * The data used to create many GameSessionChords.
     */
    data: GameSessionChordCreateManyInput | GameSessionChordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameSessionChord update
   */
  export type GameSessionChordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
    /**
     * The data needed to update a GameSessionChord.
     */
    data: XOR<GameSessionChordUpdateInput, GameSessionChordUncheckedUpdateInput>
    /**
     * Choose, which GameSessionChord to update.
     */
    where: GameSessionChordWhereUniqueInput
  }

  /**
   * GameSessionChord updateMany
   */
  export type GameSessionChordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameSessionChords.
     */
    data: XOR<GameSessionChordUpdateManyMutationInput, GameSessionChordUncheckedUpdateManyInput>
    /**
     * Filter which GameSessionChords to update
     */
    where?: GameSessionChordWhereInput
    /**
     * Limit how many GameSessionChords to update.
     */
    limit?: number
  }

  /**
   * GameSessionChord updateManyAndReturn
   */
  export type GameSessionChordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * The data used to update GameSessionChords.
     */
    data: XOR<GameSessionChordUpdateManyMutationInput, GameSessionChordUncheckedUpdateManyInput>
    /**
     * Filter which GameSessionChords to update
     */
    where?: GameSessionChordWhereInput
    /**
     * Limit how many GameSessionChords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameSessionChord upsert
   */
  export type GameSessionChordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
    /**
     * The filter to search for the GameSessionChord to update in case it exists.
     */
    where: GameSessionChordWhereUniqueInput
    /**
     * In case the GameSessionChord found by the `where` argument doesn't exist, create a new GameSessionChord with this data.
     */
    create: XOR<GameSessionChordCreateInput, GameSessionChordUncheckedCreateInput>
    /**
     * In case the GameSessionChord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameSessionChordUpdateInput, GameSessionChordUncheckedUpdateInput>
  }

  /**
   * GameSessionChord delete
   */
  export type GameSessionChordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
    /**
     * Filter which GameSessionChord to delete.
     */
    where: GameSessionChordWhereUniqueInput
  }

  /**
   * GameSessionChord deleteMany
   */
  export type GameSessionChordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSessionChords to delete
     */
    where?: GameSessionChordWhereInput
    /**
     * Limit how many GameSessionChords to delete.
     */
    limit?: number
  }

  /**
   * GameSessionChord without action
   */
  export type GameSessionChordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionChord
     */
    select?: GameSessionChordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSessionChord
     */
    omit?: GameSessionChordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionChordInclude<ExtArgs> | null
  }


  /**
   * Model LeaderboardEntry
   */

  export type AggregateLeaderboardEntry = {
    _count: LeaderboardEntryCountAggregateOutputType | null
    _avg: LeaderboardEntryAvgAggregateOutputType | null
    _sum: LeaderboardEntrySumAggregateOutputType | null
    _min: LeaderboardEntryMinAggregateOutputType | null
    _max: LeaderboardEntryMaxAggregateOutputType | null
  }

  export type LeaderboardEntryAvgAggregateOutputType = {
    levelId: number | null
    score: number | null
    accuracy: number | null
    streak: number | null
    gamesPlayed: number | null
    averageTimeMs: number | null
    rank: number | null
  }

  export type LeaderboardEntrySumAggregateOutputType = {
    levelId: number | null
    score: number | null
    accuracy: number | null
    streak: number | null
    gamesPlayed: number | null
    averageTimeMs: number | null
    rank: number | null
  }

  export type LeaderboardEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    levelId: number | null
    score: number | null
    accuracy: number | null
    streak: number | null
    gamesPlayed: number | null
    averageTimeMs: number | null
    date: Date | null
    rank: number | null
    createdAt: Date | null
  }

  export type LeaderboardEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    levelId: number | null
    score: number | null
    accuracy: number | null
    streak: number | null
    gamesPlayed: number | null
    averageTimeMs: number | null
    date: Date | null
    rank: number | null
    createdAt: Date | null
  }

  export type LeaderboardEntryCountAggregateOutputType = {
    id: number
    userId: number
    levelId: number
    score: number
    accuracy: number
    streak: number
    gamesPlayed: number
    averageTimeMs: number
    date: number
    rank: number
    createdAt: number
    _all: number
  }


  export type LeaderboardEntryAvgAggregateInputType = {
    levelId?: true
    score?: true
    accuracy?: true
    streak?: true
    gamesPlayed?: true
    averageTimeMs?: true
    rank?: true
  }

  export type LeaderboardEntrySumAggregateInputType = {
    levelId?: true
    score?: true
    accuracy?: true
    streak?: true
    gamesPlayed?: true
    averageTimeMs?: true
    rank?: true
  }

  export type LeaderboardEntryMinAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    score?: true
    accuracy?: true
    streak?: true
    gamesPlayed?: true
    averageTimeMs?: true
    date?: true
    rank?: true
    createdAt?: true
  }

  export type LeaderboardEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    score?: true
    accuracy?: true
    streak?: true
    gamesPlayed?: true
    averageTimeMs?: true
    date?: true
    rank?: true
    createdAt?: true
  }

  export type LeaderboardEntryCountAggregateInputType = {
    id?: true
    userId?: true
    levelId?: true
    score?: true
    accuracy?: true
    streak?: true
    gamesPlayed?: true
    averageTimeMs?: true
    date?: true
    rank?: true
    createdAt?: true
    _all?: true
  }

  export type LeaderboardEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderboardEntry to aggregate.
     */
    where?: LeaderboardEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?: LeaderboardEntryOrderByWithRelationInput | LeaderboardEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderboardEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaderboardEntries
    **/
    _count?: true | LeaderboardEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaderboardEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaderboardEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderboardEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderboardEntryMaxAggregateInputType
  }

  export type GetLeaderboardEntryAggregateType<T extends LeaderboardEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderboardEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderboardEntry[P]>
      : GetScalarType<T[P], AggregateLeaderboardEntry[P]>
  }




  export type LeaderboardEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardEntryWhereInput
    orderBy?: LeaderboardEntryOrderByWithAggregationInput | LeaderboardEntryOrderByWithAggregationInput[]
    by: LeaderboardEntryScalarFieldEnum[] | LeaderboardEntryScalarFieldEnum
    having?: LeaderboardEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderboardEntryCountAggregateInputType | true
    _avg?: LeaderboardEntryAvgAggregateInputType
    _sum?: LeaderboardEntrySumAggregateInputType
    _min?: LeaderboardEntryMinAggregateInputType
    _max?: LeaderboardEntryMaxAggregateInputType
  }

  export type LeaderboardEntryGroupByOutputType = {
    id: string
    userId: string
    levelId: number
    score: number
    accuracy: number
    streak: number
    gamesPlayed: number
    averageTimeMs: number | null
    date: Date
    rank: number | null
    createdAt: Date
    _count: LeaderboardEntryCountAggregateOutputType | null
    _avg: LeaderboardEntryAvgAggregateOutputType | null
    _sum: LeaderboardEntrySumAggregateOutputType | null
    _min: LeaderboardEntryMinAggregateOutputType | null
    _max: LeaderboardEntryMaxAggregateOutputType | null
  }

  type GetLeaderboardEntryGroupByPayload<T extends LeaderboardEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderboardEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderboardEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderboardEntryGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderboardEntryGroupByOutputType[P]>
        }
      >
    >


  export type LeaderboardEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    score?: boolean
    accuracy?: boolean
    streak?: boolean
    gamesPlayed?: boolean
    averageTimeMs?: boolean
    date?: boolean
    rank?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboardEntry"]>

  export type LeaderboardEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    score?: boolean
    accuracy?: boolean
    streak?: boolean
    gamesPlayed?: boolean
    averageTimeMs?: boolean
    date?: boolean
    rank?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboardEntry"]>

  export type LeaderboardEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    levelId?: boolean
    score?: boolean
    accuracy?: boolean
    streak?: boolean
    gamesPlayed?: boolean
    averageTimeMs?: boolean
    date?: boolean
    rank?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboardEntry"]>

  export type LeaderboardEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    levelId?: boolean
    score?: boolean
    accuracy?: boolean
    streak?: boolean
    gamesPlayed?: boolean
    averageTimeMs?: boolean
    date?: boolean
    rank?: boolean
    createdAt?: boolean
  }

  export type LeaderboardEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "levelId" | "score" | "accuracy" | "streak" | "gamesPlayed" | "averageTimeMs" | "date" | "rank" | "createdAt", ExtArgs["result"]["leaderboardEntry"]>
  export type LeaderboardEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type LeaderboardEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type LeaderboardEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $LeaderboardEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaderboardEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      level: Prisma.$LevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      levelId: number
      score: number
      accuracy: number
      streak: number
      gamesPlayed: number
      averageTimeMs: number | null
      date: Date
      rank: number | null
      createdAt: Date
    }, ExtArgs["result"]["leaderboardEntry"]>
    composites: {}
  }

  type LeaderboardEntryGetPayload<S extends boolean | null | undefined | LeaderboardEntryDefaultArgs> = $Result.GetResult<Prisma.$LeaderboardEntryPayload, S>

  type LeaderboardEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderboardEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderboardEntryCountAggregateInputType | true
    }

  export interface LeaderboardEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaderboardEntry'], meta: { name: 'LeaderboardEntry' } }
    /**
     * Find zero or one LeaderboardEntry that matches the filter.
     * @param {LeaderboardEntryFindUniqueArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderboardEntryFindUniqueArgs>(args: SelectSubset<T, LeaderboardEntryFindUniqueArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaderboardEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderboardEntryFindUniqueOrThrowArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderboardEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderboardEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderboardEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryFindFirstArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderboardEntryFindFirstArgs>(args?: SelectSubset<T, LeaderboardEntryFindFirstArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderboardEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryFindFirstOrThrowArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderboardEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderboardEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaderboardEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaderboardEntries
     * const leaderboardEntries = await prisma.leaderboardEntry.findMany()
     * 
     * // Get first 10 LeaderboardEntries
     * const leaderboardEntries = await prisma.leaderboardEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderboardEntryWithIdOnly = await prisma.leaderboardEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderboardEntryFindManyArgs>(args?: SelectSubset<T, LeaderboardEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaderboardEntry.
     * @param {LeaderboardEntryCreateArgs} args - Arguments to create a LeaderboardEntry.
     * @example
     * // Create one LeaderboardEntry
     * const LeaderboardEntry = await prisma.leaderboardEntry.create({
     *   data: {
     *     // ... data to create a LeaderboardEntry
     *   }
     * })
     * 
     */
    create<T extends LeaderboardEntryCreateArgs>(args: SelectSubset<T, LeaderboardEntryCreateArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaderboardEntries.
     * @param {LeaderboardEntryCreateManyArgs} args - Arguments to create many LeaderboardEntries.
     * @example
     * // Create many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderboardEntryCreateManyArgs>(args?: SelectSubset<T, LeaderboardEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaderboardEntries and returns the data saved in the database.
     * @param {LeaderboardEntryCreateManyAndReturnArgs} args - Arguments to create many LeaderboardEntries.
     * @example
     * // Create many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaderboardEntries and only return the `id`
     * const leaderboardEntryWithIdOnly = await prisma.leaderboardEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderboardEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderboardEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaderboardEntry.
     * @param {LeaderboardEntryDeleteArgs} args - Arguments to delete one LeaderboardEntry.
     * @example
     * // Delete one LeaderboardEntry
     * const LeaderboardEntry = await prisma.leaderboardEntry.delete({
     *   where: {
     *     // ... filter to delete one LeaderboardEntry
     *   }
     * })
     * 
     */
    delete<T extends LeaderboardEntryDeleteArgs>(args: SelectSubset<T, LeaderboardEntryDeleteArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaderboardEntry.
     * @param {LeaderboardEntryUpdateArgs} args - Arguments to update one LeaderboardEntry.
     * @example
     * // Update one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderboardEntryUpdateArgs>(args: SelectSubset<T, LeaderboardEntryUpdateArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaderboardEntries.
     * @param {LeaderboardEntryDeleteManyArgs} args - Arguments to filter LeaderboardEntries to delete.
     * @example
     * // Delete a few LeaderboardEntries
     * const { count } = await prisma.leaderboardEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderboardEntryDeleteManyArgs>(args?: SelectSubset<T, LeaderboardEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderboardEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderboardEntryUpdateManyArgs>(args: SelectSubset<T, LeaderboardEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderboardEntries and returns the data updated in the database.
     * @param {LeaderboardEntryUpdateManyAndReturnArgs} args - Arguments to update many LeaderboardEntries.
     * @example
     * // Update many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaderboardEntries and only return the `id`
     * const leaderboardEntryWithIdOnly = await prisma.leaderboardEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaderboardEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderboardEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaderboardEntry.
     * @param {LeaderboardEntryUpsertArgs} args - Arguments to update or create a LeaderboardEntry.
     * @example
     * // Update or create a LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.upsert({
     *   create: {
     *     // ... data to create a LeaderboardEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaderboardEntry we want to update
     *   }
     * })
     */
    upsert<T extends LeaderboardEntryUpsertArgs>(args: SelectSubset<T, LeaderboardEntryUpsertArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaderboardEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryCountArgs} args - Arguments to filter LeaderboardEntries to count.
     * @example
     * // Count the number of LeaderboardEntries
     * const count = await prisma.leaderboardEntry.count({
     *   where: {
     *     // ... the filter for the LeaderboardEntries we want to count
     *   }
     * })
    **/
    count<T extends LeaderboardEntryCountArgs>(
      args?: Subset<T, LeaderboardEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderboardEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaderboardEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaderboardEntryAggregateArgs>(args: Subset<T, LeaderboardEntryAggregateArgs>): Prisma.PrismaPromise<GetLeaderboardEntryAggregateType<T>>

    /**
     * Group by LeaderboardEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryGroupByArgs} args - Group by arguments.
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
      T extends LeaderboardEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderboardEntryGroupByArgs['orderBy'] }
        : { orderBy?: LeaderboardEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaderboardEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderboardEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaderboardEntry model
   */
  readonly fields: LeaderboardEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaderboardEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderboardEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeaderboardEntry model
   */
  interface LeaderboardEntryFieldRefs {
    readonly id: FieldRef<"LeaderboardEntry", 'String'>
    readonly userId: FieldRef<"LeaderboardEntry", 'String'>
    readonly levelId: FieldRef<"LeaderboardEntry", 'Int'>
    readonly score: FieldRef<"LeaderboardEntry", 'Int'>
    readonly accuracy: FieldRef<"LeaderboardEntry", 'Float'>
    readonly streak: FieldRef<"LeaderboardEntry", 'Int'>
    readonly gamesPlayed: FieldRef<"LeaderboardEntry", 'Int'>
    readonly averageTimeMs: FieldRef<"LeaderboardEntry", 'Int'>
    readonly date: FieldRef<"LeaderboardEntry", 'DateTime'>
    readonly rank: FieldRef<"LeaderboardEntry", 'Int'>
    readonly createdAt: FieldRef<"LeaderboardEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaderboardEntry findUnique
   */
  export type LeaderboardEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where: LeaderboardEntryWhereUniqueInput
  }

  /**
   * LeaderboardEntry findUniqueOrThrow
   */
  export type LeaderboardEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where: LeaderboardEntryWhereUniqueInput
  }

  /**
   * LeaderboardEntry findFirst
   */
  export type LeaderboardEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where?: LeaderboardEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?: LeaderboardEntryOrderByWithRelationInput | LeaderboardEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderboardEntries.
     */
    cursor?: LeaderboardEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderboardEntries.
     */
    distinct?: LeaderboardEntryScalarFieldEnum | LeaderboardEntryScalarFieldEnum[]
  }

  /**
   * LeaderboardEntry findFirstOrThrow
   */
  export type LeaderboardEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where?: LeaderboardEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?: LeaderboardEntryOrderByWithRelationInput | LeaderboardEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderboardEntries.
     */
    cursor?: LeaderboardEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderboardEntries.
     */
    distinct?: LeaderboardEntryScalarFieldEnum | LeaderboardEntryScalarFieldEnum[]
  }

  /**
   * LeaderboardEntry findMany
   */
  export type LeaderboardEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter, which LeaderboardEntries to fetch.
     */
    where?: LeaderboardEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?: LeaderboardEntryOrderByWithRelationInput | LeaderboardEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaderboardEntries.
     */
    cursor?: LeaderboardEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number
    distinct?: LeaderboardEntryScalarFieldEnum | LeaderboardEntryScalarFieldEnum[]
  }

  /**
   * LeaderboardEntry create
   */
  export type LeaderboardEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaderboardEntry.
     */
    data: XOR<LeaderboardEntryCreateInput, LeaderboardEntryUncheckedCreateInput>
  }

  /**
   * LeaderboardEntry createMany
   */
  export type LeaderboardEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaderboardEntries.
     */
    data: LeaderboardEntryCreateManyInput | LeaderboardEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaderboardEntry createManyAndReturn
   */
  export type LeaderboardEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * The data used to create many LeaderboardEntries.
     */
    data: LeaderboardEntryCreateManyInput | LeaderboardEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaderboardEntry update
   */
  export type LeaderboardEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaderboardEntry.
     */
    data: XOR<LeaderboardEntryUpdateInput, LeaderboardEntryUncheckedUpdateInput>
    /**
     * Choose, which LeaderboardEntry to update.
     */
    where: LeaderboardEntryWhereUniqueInput
  }

  /**
   * LeaderboardEntry updateMany
   */
  export type LeaderboardEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaderboardEntries.
     */
    data: XOR<LeaderboardEntryUpdateManyMutationInput, LeaderboardEntryUncheckedUpdateManyInput>
    /**
     * Filter which LeaderboardEntries to update
     */
    where?: LeaderboardEntryWhereInput
    /**
     * Limit how many LeaderboardEntries to update.
     */
    limit?: number
  }

  /**
   * LeaderboardEntry updateManyAndReturn
   */
  export type LeaderboardEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * The data used to update LeaderboardEntries.
     */
    data: XOR<LeaderboardEntryUpdateManyMutationInput, LeaderboardEntryUncheckedUpdateManyInput>
    /**
     * Filter which LeaderboardEntries to update
     */
    where?: LeaderboardEntryWhereInput
    /**
     * Limit how many LeaderboardEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaderboardEntry upsert
   */
  export type LeaderboardEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaderboardEntry to update in case it exists.
     */
    where: LeaderboardEntryWhereUniqueInput
    /**
     * In case the LeaderboardEntry found by the `where` argument doesn't exist, create a new LeaderboardEntry with this data.
     */
    create: XOR<LeaderboardEntryCreateInput, LeaderboardEntryUncheckedCreateInput>
    /**
     * In case the LeaderboardEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderboardEntryUpdateInput, LeaderboardEntryUncheckedUpdateInput>
  }

  /**
   * LeaderboardEntry delete
   */
  export type LeaderboardEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter which LeaderboardEntry to delete.
     */
    where: LeaderboardEntryWhereUniqueInput
  }

  /**
   * LeaderboardEntry deleteMany
   */
  export type LeaderboardEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderboardEntries to delete
     */
    where?: LeaderboardEntryWhereInput
    /**
     * Limit how many LeaderboardEntries to delete.
     */
    limit?: number
  }

  /**
   * LeaderboardEntry without action
   */
  export type LeaderboardEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
  }


  /**
   * Model UserStats
   */

  export type AggregateUserStats = {
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  export type UserStatsAvgAggregateOutputType = {
    gamesPlayed: number | null
    totalQuestions: number | null
    correctAnswers: number | null
    accuracy: number | null
    maxStreak: number | null
    timePlayedMs: number | null
    levelId: number | null
  }

  export type UserStatsSumAggregateOutputType = {
    gamesPlayed: number | null
    totalQuestions: number | null
    correctAnswers: number | null
    accuracy: number | null
    maxStreak: number | null
    timePlayedMs: number | null
    levelId: number | null
  }

  export type UserStatsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    gamesPlayed: number | null
    totalQuestions: number | null
    correctAnswers: number | null
    accuracy: number | null
    maxStreak: number | null
    timePlayedMs: number | null
    levelId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStatsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    gamesPlayed: number | null
    totalQuestions: number | null
    correctAnswers: number | null
    accuracy: number | null
    maxStreak: number | null
    timePlayedMs: number | null
    levelId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStatsCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    gamesPlayed: number
    totalQuestions: number
    correctAnswers: number
    accuracy: number
    maxStreak: number
    timePlayedMs: number
    levelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserStatsAvgAggregateInputType = {
    gamesPlayed?: true
    totalQuestions?: true
    correctAnswers?: true
    accuracy?: true
    maxStreak?: true
    timePlayedMs?: true
    levelId?: true
  }

  export type UserStatsSumAggregateInputType = {
    gamesPlayed?: true
    totalQuestions?: true
    correctAnswers?: true
    accuracy?: true
    maxStreak?: true
    timePlayedMs?: true
    levelId?: true
  }

  export type UserStatsMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    gamesPlayed?: true
    totalQuestions?: true
    correctAnswers?: true
    accuracy?: true
    maxStreak?: true
    timePlayedMs?: true
    levelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStatsMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    gamesPlayed?: true
    totalQuestions?: true
    correctAnswers?: true
    accuracy?: true
    maxStreak?: true
    timePlayedMs?: true
    levelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStatsCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    gamesPlayed?: true
    totalQuestions?: true
    correctAnswers?: true
    accuracy?: true
    maxStreak?: true
    timePlayedMs?: true
    levelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to aggregate.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStats
    **/
    _count?: true | UserStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatsMaxAggregateInputType
  }

  export type GetUserStatsAggregateType<T extends UserStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStats[P]>
      : GetScalarType<T[P], AggregateUserStats[P]>
  }




  export type UserStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatsWhereInput
    orderBy?: UserStatsOrderByWithAggregationInput | UserStatsOrderByWithAggregationInput[]
    by: UserStatsScalarFieldEnum[] | UserStatsScalarFieldEnum
    having?: UserStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatsCountAggregateInputType | true
    _avg?: UserStatsAvgAggregateInputType
    _sum?: UserStatsSumAggregateInputType
    _min?: UserStatsMinAggregateInputType
    _max?: UserStatsMaxAggregateInputType
  }

  export type UserStatsGroupByOutputType = {
    id: string
    userId: string
    date: Date
    gamesPlayed: number
    totalQuestions: number
    correctAnswers: number
    accuracy: number
    maxStreak: number
    timePlayedMs: number
    levelId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  type GetUserStatsGroupByPayload<T extends UserStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
        }
      >
    >


  export type UserStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    gamesPlayed?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    accuracy?: boolean
    maxStreak?: boolean
    timePlayedMs?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | UserStats$levelArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    gamesPlayed?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    accuracy?: boolean
    maxStreak?: boolean
    timePlayedMs?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | UserStats$levelArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    gamesPlayed?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    accuracy?: boolean
    maxStreak?: boolean
    timePlayedMs?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | UserStats$levelArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    gamesPlayed?: boolean
    totalQuestions?: boolean
    correctAnswers?: boolean
    accuracy?: boolean
    maxStreak?: boolean
    timePlayedMs?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "gamesPlayed" | "totalQuestions" | "correctAnswers" | "accuracy" | "maxStreak" | "timePlayedMs" | "levelId" | "createdAt" | "updatedAt", ExtArgs["result"]["userStats"]>
  export type UserStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | UserStats$levelArgs<ExtArgs>
  }
  export type UserStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | UserStats$levelArgs<ExtArgs>
  }
  export type UserStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    level?: boolean | UserStats$levelArgs<ExtArgs>
  }

  export type $UserStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      level: Prisma.$LevelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      gamesPlayed: number
      totalQuestions: number
      correctAnswers: number
      accuracy: number
      maxStreak: number
      timePlayedMs: number
      levelId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userStats"]>
    composites: {}
  }

  type UserStatsGetPayload<S extends boolean | null | undefined | UserStatsDefaultArgs> = $Result.GetResult<Prisma.$UserStatsPayload, S>

  type UserStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStatsCountAggregateInputType | true
    }

  export interface UserStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStats'], meta: { name: 'UserStats' } }
    /**
     * Find zero or one UserStats that matches the filter.
     * @param {UserStatsFindUniqueArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStatsFindUniqueArgs>(args: SelectSubset<T, UserStatsFindUniqueArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStatsFindUniqueOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStatsFindFirstArgs>(args?: SelectSubset<T, UserStatsFindFirstArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStats
     * const userStats = await prisma.userStats.findMany()
     * 
     * // Get first 10 UserStats
     * const userStats = await prisma.userStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStatsWithIdOnly = await prisma.userStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStatsFindManyArgs>(args?: SelectSubset<T, UserStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStats.
     * @param {UserStatsCreateArgs} args - Arguments to create a UserStats.
     * @example
     * // Create one UserStats
     * const UserStats = await prisma.userStats.create({
     *   data: {
     *     // ... data to create a UserStats
     *   }
     * })
     * 
     */
    create<T extends UserStatsCreateArgs>(args: SelectSubset<T, UserStatsCreateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStats.
     * @param {UserStatsCreateManyArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStatsCreateManyArgs>(args?: SelectSubset<T, UserStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStats and returns the data saved in the database.
     * @param {UserStatsCreateManyAndReturnArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStats and only return the `id`
     * const userStatsWithIdOnly = await prisma.userStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserStats.
     * @param {UserStatsDeleteArgs} args - Arguments to delete one UserStats.
     * @example
     * // Delete one UserStats
     * const UserStats = await prisma.userStats.delete({
     *   where: {
     *     // ... filter to delete one UserStats
     *   }
     * })
     * 
     */
    delete<T extends UserStatsDeleteArgs>(args: SelectSubset<T, UserStatsDeleteArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStats.
     * @param {UserStatsUpdateArgs} args - Arguments to update one UserStats.
     * @example
     * // Update one UserStats
     * const userStats = await prisma.userStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStatsUpdateArgs>(args: SelectSubset<T, UserStatsUpdateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStats.
     * @param {UserStatsDeleteManyArgs} args - Arguments to filter UserStats to delete.
     * @example
     * // Delete a few UserStats
     * const { count } = await prisma.userStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStatsDeleteManyArgs>(args?: SelectSubset<T, UserStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStatsUpdateManyArgs>(args: SelectSubset<T, UserStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats and returns the data updated in the database.
     * @param {UserStatsUpdateManyAndReturnArgs} args - Arguments to update many UserStats.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserStats and only return the `id`
     * const userStatsWithIdOnly = await prisma.userStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserStats.
     * @param {UserStatsUpsertArgs} args - Arguments to update or create a UserStats.
     * @example
     * // Update or create a UserStats
     * const userStats = await prisma.userStats.upsert({
     *   create: {
     *     // ... data to create a UserStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStats we want to update
     *   }
     * })
     */
    upsert<T extends UserStatsUpsertArgs>(args: SelectSubset<T, UserStatsUpsertArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsCountArgs} args - Arguments to filter UserStats to count.
     * @example
     * // Count the number of UserStats
     * const count = await prisma.userStats.count({
     *   where: {
     *     // ... the filter for the UserStats we want to count
     *   }
     * })
    **/
    count<T extends UserStatsCountArgs>(
      args?: Subset<T, UserStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStatsAggregateArgs>(args: Subset<T, UserStatsAggregateArgs>): Prisma.PrismaPromise<GetUserStatsAggregateType<T>>

    /**
     * Group by UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsGroupByArgs} args - Group by arguments.
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
      T extends UserStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatsGroupByArgs['orderBy'] }
        : { orderBy?: UserStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStats model
   */
  readonly fields: UserStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    level<T extends UserStats$levelArgs<ExtArgs> = {}>(args?: Subset<T, UserStats$levelArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserStats model
   */
  interface UserStatsFieldRefs {
    readonly id: FieldRef<"UserStats", 'String'>
    readonly userId: FieldRef<"UserStats", 'String'>
    readonly date: FieldRef<"UserStats", 'DateTime'>
    readonly gamesPlayed: FieldRef<"UserStats", 'Int'>
    readonly totalQuestions: FieldRef<"UserStats", 'Int'>
    readonly correctAnswers: FieldRef<"UserStats", 'Int'>
    readonly accuracy: FieldRef<"UserStats", 'Float'>
    readonly maxStreak: FieldRef<"UserStats", 'Int'>
    readonly timePlayedMs: FieldRef<"UserStats", 'Int'>
    readonly levelId: FieldRef<"UserStats", 'Int'>
    readonly createdAt: FieldRef<"UserStats", 'DateTime'>
    readonly updatedAt: FieldRef<"UserStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStats findUnique
   */
  export type UserStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findUniqueOrThrow
   */
  export type UserStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findFirst
   */
  export type UserStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findFirstOrThrow
   */
  export type UserStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findMany
   */
  export type UserStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats create
   */
  export type UserStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStats.
     */
    data: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
  }

  /**
   * UserStats createMany
   */
  export type UserStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStats createManyAndReturn
   */
  export type UserStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStats update
   */
  export type UserStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStats.
     */
    data: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
    /**
     * Choose, which UserStats to update.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats updateMany
   */
  export type UserStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
  }

  /**
   * UserStats updateManyAndReturn
   */
  export type UserStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStats upsert
   */
  export type UserStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStats to update in case it exists.
     */
    where: UserStatsWhereUniqueInput
    /**
     * In case the UserStats found by the `where` argument doesn't exist, create a new UserStats with this data.
     */
    create: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
    /**
     * In case the UserStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
  }

  /**
   * UserStats delete
   */
  export type UserStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter which UserStats to delete.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats deleteMany
   */
  export type UserStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to delete
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to delete.
     */
    limit?: number
  }

  /**
   * UserStats.level
   */
  export type UserStats$levelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    where?: LevelWhereInput
  }

  /**
   * UserStats without action
   */
  export type UserStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
  }


  /**
   * Model AppSettings
   */

  export type AggregateAppSettings = {
    _count: AppSettingsCountAggregateOutputType | null
    _min: AppSettingsMinAggregateOutputType | null
    _max: AppSettingsMaxAggregateOutputType | null
  }

  export type AppSettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type AppSettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type AppSettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    updatedAt: number
    _all: number
  }


  export type AppSettingsMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
  }

  export type AppSettingsMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
  }

  export type AppSettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    _all?: true
  }

  export type AppSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSettings to aggregate.
     */
    where?: AppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingsOrderByWithRelationInput | AppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppSettings
    **/
    _count?: true | AppSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppSettingsMaxAggregateInputType
  }

  export type GetAppSettingsAggregateType<T extends AppSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppSettings[P]>
      : GetScalarType<T[P], AggregateAppSettings[P]>
  }




  export type AppSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSettingsWhereInput
    orderBy?: AppSettingsOrderByWithAggregationInput | AppSettingsOrderByWithAggregationInput[]
    by: AppSettingsScalarFieldEnum[] | AppSettingsScalarFieldEnum
    having?: AppSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppSettingsCountAggregateInputType | true
    _min?: AppSettingsMinAggregateInputType
    _max?: AppSettingsMaxAggregateInputType
  }

  export type AppSettingsGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string | null
    updatedAt: Date
    _count: AppSettingsCountAggregateOutputType | null
    _min: AppSettingsMinAggregateOutputType | null
    _max: AppSettingsMaxAggregateOutputType | null
  }

  type GetAppSettingsGroupByPayload<T extends AppSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], AppSettingsGroupByOutputType[P]>
        }
      >
    >


  export type AppSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSettings"]>

  export type AppSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSettings"]>

  export type AppSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSettings"]>

  export type AppSettingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }

  export type AppSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description" | "updatedAt", ExtArgs["result"]["appSettings"]>

  export type $AppSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string | null
      updatedAt: Date
    }, ExtArgs["result"]["appSettings"]>
    composites: {}
  }

  type AppSettingsGetPayload<S extends boolean | null | undefined | AppSettingsDefaultArgs> = $Result.GetResult<Prisma.$AppSettingsPayload, S>

  type AppSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppSettingsCountAggregateInputType | true
    }

  export interface AppSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppSettings'], meta: { name: 'AppSettings' } }
    /**
     * Find zero or one AppSettings that matches the filter.
     * @param {AppSettingsFindUniqueArgs} args - Arguments to find a AppSettings
     * @example
     * // Get one AppSettings
     * const appSettings = await prisma.appSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppSettingsFindUniqueArgs>(args: SelectSubset<T, AppSettingsFindUniqueArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppSettingsFindUniqueOrThrowArgs} args - Arguments to find a AppSettings
     * @example
     * // Get one AppSettings
     * const appSettings = await prisma.appSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, AppSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsFindFirstArgs} args - Arguments to find a AppSettings
     * @example
     * // Get one AppSettings
     * const appSettings = await prisma.appSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppSettingsFindFirstArgs>(args?: SelectSubset<T, AppSettingsFindFirstArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsFindFirstOrThrowArgs} args - Arguments to find a AppSettings
     * @example
     * // Get one AppSettings
     * const appSettings = await prisma.appSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, AppSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppSettings
     * const appSettings = await prisma.appSettings.findMany()
     * 
     * // Get first 10 AppSettings
     * const appSettings = await prisma.appSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appSettingsWithIdOnly = await prisma.appSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppSettingsFindManyArgs>(args?: SelectSubset<T, AppSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppSettings.
     * @param {AppSettingsCreateArgs} args - Arguments to create a AppSettings.
     * @example
     * // Create one AppSettings
     * const AppSettings = await prisma.appSettings.create({
     *   data: {
     *     // ... data to create a AppSettings
     *   }
     * })
     * 
     */
    create<T extends AppSettingsCreateArgs>(args: SelectSubset<T, AppSettingsCreateArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppSettings.
     * @param {AppSettingsCreateManyArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSettings = await prisma.appSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppSettingsCreateManyArgs>(args?: SelectSubset<T, AppSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppSettings and returns the data saved in the database.
     * @param {AppSettingsCreateManyAndReturnArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSettings = await prisma.appSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppSettings and only return the `id`
     * const appSettingsWithIdOnly = await prisma.appSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, AppSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppSettings.
     * @param {AppSettingsDeleteArgs} args - Arguments to delete one AppSettings.
     * @example
     * // Delete one AppSettings
     * const AppSettings = await prisma.appSettings.delete({
     *   where: {
     *     // ... filter to delete one AppSettings
     *   }
     * })
     * 
     */
    delete<T extends AppSettingsDeleteArgs>(args: SelectSubset<T, AppSettingsDeleteArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppSettings.
     * @param {AppSettingsUpdateArgs} args - Arguments to update one AppSettings.
     * @example
     * // Update one AppSettings
     * const appSettings = await prisma.appSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppSettingsUpdateArgs>(args: SelectSubset<T, AppSettingsUpdateArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppSettings.
     * @param {AppSettingsDeleteManyArgs} args - Arguments to filter AppSettings to delete.
     * @example
     * // Delete a few AppSettings
     * const { count } = await prisma.appSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppSettingsDeleteManyArgs>(args?: SelectSubset<T, AppSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppSettings
     * const appSettings = await prisma.appSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppSettingsUpdateManyArgs>(args: SelectSubset<T, AppSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSettings and returns the data updated in the database.
     * @param {AppSettingsUpdateManyAndReturnArgs} args - Arguments to update many AppSettings.
     * @example
     * // Update many AppSettings
     * const appSettings = await prisma.appSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppSettings and only return the `id`
     * const appSettingsWithIdOnly = await prisma.appSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, AppSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppSettings.
     * @param {AppSettingsUpsertArgs} args - Arguments to update or create a AppSettings.
     * @example
     * // Update or create a AppSettings
     * const appSettings = await prisma.appSettings.upsert({
     *   create: {
     *     // ... data to create a AppSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppSettings we want to update
     *   }
     * })
     */
    upsert<T extends AppSettingsUpsertArgs>(args: SelectSubset<T, AppSettingsUpsertArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsCountArgs} args - Arguments to filter AppSettings to count.
     * @example
     * // Count the number of AppSettings
     * const count = await prisma.appSettings.count({
     *   where: {
     *     // ... the filter for the AppSettings we want to count
     *   }
     * })
    **/
    count<T extends AppSettingsCountArgs>(
      args?: Subset<T, AppSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppSettingsAggregateArgs>(args: Subset<T, AppSettingsAggregateArgs>): Prisma.PrismaPromise<GetAppSettingsAggregateType<T>>

    /**
     * Group by AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsGroupByArgs} args - Group by arguments.
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
      T extends AppSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppSettingsGroupByArgs['orderBy'] }
        : { orderBy?: AppSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppSettings model
   */
  readonly fields: AppSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AppSettings model
   */
  interface AppSettingsFieldRefs {
    readonly id: FieldRef<"AppSettings", 'String'>
    readonly key: FieldRef<"AppSettings", 'String'>
    readonly value: FieldRef<"AppSettings", 'String'>
    readonly description: FieldRef<"AppSettings", 'String'>
    readonly updatedAt: FieldRef<"AppSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppSettings findUnique
   */
  export type AppSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where: AppSettingsWhereUniqueInput
  }

  /**
   * AppSettings findUniqueOrThrow
   */
  export type AppSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where: AppSettingsWhereUniqueInput
  }

  /**
   * AppSettings findFirst
   */
  export type AppSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where?: AppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingsOrderByWithRelationInput | AppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingsScalarFieldEnum | AppSettingsScalarFieldEnum[]
  }

  /**
   * AppSettings findFirstOrThrow
   */
  export type AppSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where?: AppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingsOrderByWithRelationInput | AppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingsScalarFieldEnum | AppSettingsScalarFieldEnum[]
  }

  /**
   * AppSettings findMany
   */
  export type AppSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where?: AppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingsOrderByWithRelationInput | AppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppSettings.
     */
    cursor?: AppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    distinct?: AppSettingsScalarFieldEnum | AppSettingsScalarFieldEnum[]
  }

  /**
   * AppSettings create
   */
  export type AppSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a AppSettings.
     */
    data: XOR<AppSettingsCreateInput, AppSettingsUncheckedCreateInput>
  }

  /**
   * AppSettings createMany
   */
  export type AppSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingsCreateManyInput | AppSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSettings createManyAndReturn
   */
  export type AppSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingsCreateManyInput | AppSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSettings update
   */
  export type AppSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a AppSettings.
     */
    data: XOR<AppSettingsUpdateInput, AppSettingsUncheckedUpdateInput>
    /**
     * Choose, which AppSettings to update.
     */
    where: AppSettingsWhereUniqueInput
  }

  /**
   * AppSettings updateMany
   */
  export type AppSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppSettings.
     */
    data: XOR<AppSettingsUpdateManyMutationInput, AppSettingsUncheckedUpdateManyInput>
    /**
     * Filter which AppSettings to update
     */
    where?: AppSettingsWhereInput
    /**
     * Limit how many AppSettings to update.
     */
    limit?: number
  }

  /**
   * AppSettings updateManyAndReturn
   */
  export type AppSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
    /**
     * The data used to update AppSettings.
     */
    data: XOR<AppSettingsUpdateManyMutationInput, AppSettingsUncheckedUpdateManyInput>
    /**
     * Filter which AppSettings to update
     */
    where?: AppSettingsWhereInput
    /**
     * Limit how many AppSettings to update.
     */
    limit?: number
  }

  /**
   * AppSettings upsert
   */
  export type AppSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the AppSettings to update in case it exists.
     */
    where: AppSettingsWhereUniqueInput
    /**
     * In case the AppSettings found by the `where` argument doesn't exist, create a new AppSettings with this data.
     */
    create: XOR<AppSettingsCreateInput, AppSettingsUncheckedCreateInput>
    /**
     * In case the AppSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppSettingsUpdateInput, AppSettingsUncheckedUpdateInput>
  }

  /**
   * AppSettings delete
   */
  export type AppSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
    /**
     * Filter which AppSettings to delete.
     */
    where: AppSettingsWhereUniqueInput
  }

  /**
   * AppSettings deleteMany
   */
  export type AppSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSettings to delete
     */
    where?: AppSettingsWhereInput
    /**
     * Limit how many AppSettings to delete.
     */
    limit?: number
  }

  /**
   * AppSettings without action
   */
  export type AppSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSettings
     */
    omit?: AppSettingsOmit<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    subscriptionId: 'subscriptionId',
    currentLevel: 'currentLevel',
    currentStreak: 'currentStreak',
    overallAccuracy: 'overallAccuracy',
    totalGamesPlayed: 'totalGamesPlayed',
    lastPlayedAt: 'lastPlayedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    amount: 'amount',
    currency: 'currency',
    paymentMethod: 'paymentMethod',
    externalId: 'externalId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const InstrumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    displayName: 'displayName',
    isActive: 'isActive'
  };

  export type InstrumentScalarFieldEnum = (typeof InstrumentScalarFieldEnum)[keyof typeof InstrumentScalarFieldEnum]


  export const LevelScalarFieldEnum: {
    id: 'id',
    number: 'number',
    name: 'name',
    description: 'description',
    isFree: 'isFree',
    isActive: 'isActive'
  };

  export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum]


  export const ChordScalarFieldEnum: {
    id: 'id',
    name: 'name',
    displayName: 'displayName',
    audioFileUrl: 'audioFileUrl',
    instrumentId: 'instrumentId',
    levelId: 'levelId',
    isActive: 'isActive'
  };

  export type ChordScalarFieldEnum = (typeof ChordScalarFieldEnum)[keyof typeof ChordScalarFieldEnum]


  export const GameSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    instrumentId: 'instrumentId',
    levelId: 'levelId',
    gameMode: 'gameMode',
    isCompleted: 'isCompleted',
    totalQuestions: 'totalQuestions',
    correctAnswers: 'correctAnswers',
    accuracy: 'accuracy',
    sessionStreak: 'sessionStreak',
    maxStreak: 'maxStreak',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    durationMs: 'durationMs'
  };

  export type GameSessionScalarFieldEnum = (typeof GameSessionScalarFieldEnum)[keyof typeof GameSessionScalarFieldEnum]


  export const GameSessionChordScalarFieldEnum: {
    id: 'id',
    gameSessionId: 'gameSessionId',
    chordId: 'chordId',
    sequenceOrder: 'sequenceOrder',
    userAnswer: 'userAnswer',
    isCorrect: 'isCorrect',
    responseTimeMs: 'responseTimeMs',
    playedAt: 'playedAt'
  };

  export type GameSessionChordScalarFieldEnum = (typeof GameSessionChordScalarFieldEnum)[keyof typeof GameSessionChordScalarFieldEnum]


  export const LeaderboardEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    levelId: 'levelId',
    score: 'score',
    accuracy: 'accuracy',
    streak: 'streak',
    gamesPlayed: 'gamesPlayed',
    averageTimeMs: 'averageTimeMs',
    date: 'date',
    rank: 'rank',
    createdAt: 'createdAt'
  };

  export type LeaderboardEntryScalarFieldEnum = (typeof LeaderboardEntryScalarFieldEnum)[keyof typeof LeaderboardEntryScalarFieldEnum]


  export const UserStatsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    gamesPlayed: 'gamesPlayed',
    totalQuestions: 'totalQuestions',
    correctAnswers: 'correctAnswers',
    accuracy: 'accuracy',
    maxStreak: 'maxStreak',
    timePlayedMs: 'timePlayedMs',
    levelId: 'levelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserStatsScalarFieldEnum = (typeof UserStatsScalarFieldEnum)[keyof typeof UserStatsScalarFieldEnum]


  export const AppSettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    updatedAt: 'updatedAt'
  };

  export type AppSettingsScalarFieldEnum = (typeof AppSettingsScalarFieldEnum)[keyof typeof AppSettingsScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SubscriptionType'
   */
  export type EnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType'>
    


  /**
   * Reference to a field of type 'SubscriptionType[]'
   */
  export type ListEnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'GameMode'
   */
  export type EnumGameModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameMode'>
    


  /**
   * Reference to a field of type 'GameMode[]'
   */
  export type ListEnumGameModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameMode[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    subscriptionId?: StringNullableFilter<"User"> | string | null
    currentLevel?: IntFilter<"User"> | number
    currentStreak?: IntFilter<"User"> | number
    overallAccuracy?: FloatFilter<"User"> | number
    totalGamesPlayed?: IntFilter<"User"> | number
    lastPlayedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    gameSessions?: GameSessionListRelationFilter
    leaderboardEntries?: LeaderboardEntryListRelationFilter
    userStats?: UserStatsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    overallAccuracy?: SortOrder
    totalGamesPlayed?: SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    gameSessions?: GameSessionOrderByRelationAggregateInput
    leaderboardEntries?: LeaderboardEntryOrderByRelationAggregateInput
    userStats?: UserStatsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    subscriptionId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    currentLevel?: IntFilter<"User"> | number
    currentStreak?: IntFilter<"User"> | number
    overallAccuracy?: FloatFilter<"User"> | number
    totalGamesPlayed?: IntFilter<"User"> | number
    lastPlayedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    gameSessions?: GameSessionListRelationFilter
    leaderboardEntries?: LeaderboardEntryListRelationFilter
    userStats?: UserStatsListRelationFilter
  }, "id" | "email" | "subscriptionId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    overallAccuracy?: SortOrder
    totalGamesPlayed?: SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    subscriptionId?: StringNullableWithAggregatesFilter<"User"> | string | null
    currentLevel?: IntWithAggregatesFilter<"User"> | number
    currentStreak?: IntWithAggregatesFilter<"User"> | number
    overallAccuracy?: FloatWithAggregatesFilter<"User"> | number
    totalGamesPlayed?: IntWithAggregatesFilter<"User"> | number
    lastPlayedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    type?: EnumSubscriptionTypeFilter<"Subscription"> | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    amount?: FloatFilter<"Subscription"> | number
    currency?: StringFilter<"Subscription"> | string
    paymentMethod?: StringNullableFilter<"Subscription"> | string | null
    externalId?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    type?: EnumSubscriptionTypeFilter<"Subscription"> | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    amount?: FloatFilter<"Subscription"> | number
    currency?: StringFilter<"Subscription"> | string
    paymentMethod?: StringNullableFilter<"Subscription"> | string | null
    externalId?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    type?: EnumSubscriptionTypeWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    amount?: FloatWithAggregatesFilter<"Subscription"> | number
    currency?: StringWithAggregatesFilter<"Subscription"> | string
    paymentMethod?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    externalId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type InstrumentWhereInput = {
    AND?: InstrumentWhereInput | InstrumentWhereInput[]
    OR?: InstrumentWhereInput[]
    NOT?: InstrumentWhereInput | InstrumentWhereInput[]
    id?: StringFilter<"Instrument"> | string
    name?: StringFilter<"Instrument"> | string
    displayName?: StringFilter<"Instrument"> | string
    isActive?: BoolFilter<"Instrument"> | boolean
    chords?: ChordListRelationFilter
    gameSessions?: GameSessionListRelationFilter
  }

  export type InstrumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
    chords?: ChordOrderByRelationAggregateInput
    gameSessions?: GameSessionOrderByRelationAggregateInput
  }

  export type InstrumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: InstrumentWhereInput | InstrumentWhereInput[]
    OR?: InstrumentWhereInput[]
    NOT?: InstrumentWhereInput | InstrumentWhereInput[]
    displayName?: StringFilter<"Instrument"> | string
    isActive?: BoolFilter<"Instrument"> | boolean
    chords?: ChordListRelationFilter
    gameSessions?: GameSessionListRelationFilter
  }, "id" | "name">

  export type InstrumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
    _count?: InstrumentCountOrderByAggregateInput
    _max?: InstrumentMaxOrderByAggregateInput
    _min?: InstrumentMinOrderByAggregateInput
  }

  export type InstrumentScalarWhereWithAggregatesInput = {
    AND?: InstrumentScalarWhereWithAggregatesInput | InstrumentScalarWhereWithAggregatesInput[]
    OR?: InstrumentScalarWhereWithAggregatesInput[]
    NOT?: InstrumentScalarWhereWithAggregatesInput | InstrumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instrument"> | string
    name?: StringWithAggregatesFilter<"Instrument"> | string
    displayName?: StringWithAggregatesFilter<"Instrument"> | string
    isActive?: BoolWithAggregatesFilter<"Instrument"> | boolean
  }

  export type LevelWhereInput = {
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    id?: IntFilter<"Level"> | number
    number?: IntFilter<"Level"> | number
    name?: StringFilter<"Level"> | string
    description?: StringNullableFilter<"Level"> | string | null
    isFree?: BoolFilter<"Level"> | boolean
    isActive?: BoolFilter<"Level"> | boolean
    chords?: ChordListRelationFilter
    gameSessions?: GameSessionListRelationFilter
    leaderboardEntries?: LeaderboardEntryListRelationFilter
    userStats?: UserStatsListRelationFilter
  }

  export type LevelOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isFree?: SortOrder
    isActive?: SortOrder
    chords?: ChordOrderByRelationAggregateInput
    gameSessions?: GameSessionOrderByRelationAggregateInput
    leaderboardEntries?: LeaderboardEntryOrderByRelationAggregateInput
    userStats?: UserStatsOrderByRelationAggregateInput
  }

  export type LevelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number?: number
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    name?: StringFilter<"Level"> | string
    description?: StringNullableFilter<"Level"> | string | null
    isFree?: BoolFilter<"Level"> | boolean
    isActive?: BoolFilter<"Level"> | boolean
    chords?: ChordListRelationFilter
    gameSessions?: GameSessionListRelationFilter
    leaderboardEntries?: LeaderboardEntryListRelationFilter
    userStats?: UserStatsListRelationFilter
  }, "id" | "number">

  export type LevelOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isFree?: SortOrder
    isActive?: SortOrder
    _count?: LevelCountOrderByAggregateInput
    _avg?: LevelAvgOrderByAggregateInput
    _max?: LevelMaxOrderByAggregateInput
    _min?: LevelMinOrderByAggregateInput
    _sum?: LevelSumOrderByAggregateInput
  }

  export type LevelScalarWhereWithAggregatesInput = {
    AND?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    OR?: LevelScalarWhereWithAggregatesInput[]
    NOT?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Level"> | number
    number?: IntWithAggregatesFilter<"Level"> | number
    name?: StringWithAggregatesFilter<"Level"> | string
    description?: StringNullableWithAggregatesFilter<"Level"> | string | null
    isFree?: BoolWithAggregatesFilter<"Level"> | boolean
    isActive?: BoolWithAggregatesFilter<"Level"> | boolean
  }

  export type ChordWhereInput = {
    AND?: ChordWhereInput | ChordWhereInput[]
    OR?: ChordWhereInput[]
    NOT?: ChordWhereInput | ChordWhereInput[]
    id?: StringFilter<"Chord"> | string
    name?: StringFilter<"Chord"> | string
    displayName?: StringFilter<"Chord"> | string
    audioFileUrl?: StringNullableFilter<"Chord"> | string | null
    instrumentId?: StringFilter<"Chord"> | string
    levelId?: IntFilter<"Chord"> | number
    isActive?: BoolFilter<"Chord"> | boolean
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
    gameSessionChords?: GameSessionChordListRelationFilter
  }

  export type ChordOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    audioFileUrl?: SortOrderInput | SortOrder
    instrumentId?: SortOrder
    levelId?: SortOrder
    isActive?: SortOrder
    instrument?: InstrumentOrderByWithRelationInput
    level?: LevelOrderByWithRelationInput
    gameSessionChords?: GameSessionChordOrderByRelationAggregateInput
  }

  export type ChordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_instrumentId_levelId?: ChordNameInstrumentIdLevelIdCompoundUniqueInput
    AND?: ChordWhereInput | ChordWhereInput[]
    OR?: ChordWhereInput[]
    NOT?: ChordWhereInput | ChordWhereInput[]
    name?: StringFilter<"Chord"> | string
    displayName?: StringFilter<"Chord"> | string
    audioFileUrl?: StringNullableFilter<"Chord"> | string | null
    instrumentId?: StringFilter<"Chord"> | string
    levelId?: IntFilter<"Chord"> | number
    isActive?: BoolFilter<"Chord"> | boolean
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
    gameSessionChords?: GameSessionChordListRelationFilter
  }, "id" | "name_instrumentId_levelId">

  export type ChordOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    audioFileUrl?: SortOrderInput | SortOrder
    instrumentId?: SortOrder
    levelId?: SortOrder
    isActive?: SortOrder
    _count?: ChordCountOrderByAggregateInput
    _avg?: ChordAvgOrderByAggregateInput
    _max?: ChordMaxOrderByAggregateInput
    _min?: ChordMinOrderByAggregateInput
    _sum?: ChordSumOrderByAggregateInput
  }

  export type ChordScalarWhereWithAggregatesInput = {
    AND?: ChordScalarWhereWithAggregatesInput | ChordScalarWhereWithAggregatesInput[]
    OR?: ChordScalarWhereWithAggregatesInput[]
    NOT?: ChordScalarWhereWithAggregatesInput | ChordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chord"> | string
    name?: StringWithAggregatesFilter<"Chord"> | string
    displayName?: StringWithAggregatesFilter<"Chord"> | string
    audioFileUrl?: StringNullableWithAggregatesFilter<"Chord"> | string | null
    instrumentId?: StringWithAggregatesFilter<"Chord"> | string
    levelId?: IntWithAggregatesFilter<"Chord"> | number
    isActive?: BoolWithAggregatesFilter<"Chord"> | boolean
  }

  export type GameSessionWhereInput = {
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    id?: StringFilter<"GameSession"> | string
    userId?: StringFilter<"GameSession"> | string
    instrumentId?: StringFilter<"GameSession"> | string
    levelId?: IntFilter<"GameSession"> | number
    gameMode?: EnumGameModeFilter<"GameSession"> | $Enums.GameMode
    isCompleted?: BoolFilter<"GameSession"> | boolean
    totalQuestions?: IntFilter<"GameSession"> | number
    correctAnswers?: IntFilter<"GameSession"> | number
    accuracy?: FloatFilter<"GameSession"> | number
    sessionStreak?: IntFilter<"GameSession"> | number
    maxStreak?: IntFilter<"GameSession"> | number
    startedAt?: DateTimeFilter<"GameSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    durationMs?: IntNullableFilter<"GameSession"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
    chords?: GameSessionChordListRelationFilter
  }

  export type GameSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    instrumentId?: SortOrder
    levelId?: SortOrder
    gameMode?: SortOrder
    isCompleted?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    sessionStreak?: SortOrder
    maxStreak?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    instrument?: InstrumentOrderByWithRelationInput
    level?: LevelOrderByWithRelationInput
    chords?: GameSessionChordOrderByRelationAggregateInput
  }

  export type GameSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    userId?: StringFilter<"GameSession"> | string
    instrumentId?: StringFilter<"GameSession"> | string
    levelId?: IntFilter<"GameSession"> | number
    gameMode?: EnumGameModeFilter<"GameSession"> | $Enums.GameMode
    isCompleted?: BoolFilter<"GameSession"> | boolean
    totalQuestions?: IntFilter<"GameSession"> | number
    correctAnswers?: IntFilter<"GameSession"> | number
    accuracy?: FloatFilter<"GameSession"> | number
    sessionStreak?: IntFilter<"GameSession"> | number
    maxStreak?: IntFilter<"GameSession"> | number
    startedAt?: DateTimeFilter<"GameSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    durationMs?: IntNullableFilter<"GameSession"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
    chords?: GameSessionChordListRelationFilter
  }, "id">

  export type GameSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    instrumentId?: SortOrder
    levelId?: SortOrder
    gameMode?: SortOrder
    isCompleted?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    sessionStreak?: SortOrder
    maxStreak?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    _count?: GameSessionCountOrderByAggregateInput
    _avg?: GameSessionAvgOrderByAggregateInput
    _max?: GameSessionMaxOrderByAggregateInput
    _min?: GameSessionMinOrderByAggregateInput
    _sum?: GameSessionSumOrderByAggregateInput
  }

  export type GameSessionScalarWhereWithAggregatesInput = {
    AND?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    OR?: GameSessionScalarWhereWithAggregatesInput[]
    NOT?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameSession"> | string
    userId?: StringWithAggregatesFilter<"GameSession"> | string
    instrumentId?: StringWithAggregatesFilter<"GameSession"> | string
    levelId?: IntWithAggregatesFilter<"GameSession"> | number
    gameMode?: EnumGameModeWithAggregatesFilter<"GameSession"> | $Enums.GameMode
    isCompleted?: BoolWithAggregatesFilter<"GameSession"> | boolean
    totalQuestions?: IntWithAggregatesFilter<"GameSession"> | number
    correctAnswers?: IntWithAggregatesFilter<"GameSession"> | number
    accuracy?: FloatWithAggregatesFilter<"GameSession"> | number
    sessionStreak?: IntWithAggregatesFilter<"GameSession"> | number
    maxStreak?: IntWithAggregatesFilter<"GameSession"> | number
    startedAt?: DateTimeWithAggregatesFilter<"GameSession"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"GameSession"> | Date | string | null
    durationMs?: IntNullableWithAggregatesFilter<"GameSession"> | number | null
  }

  export type GameSessionChordWhereInput = {
    AND?: GameSessionChordWhereInput | GameSessionChordWhereInput[]
    OR?: GameSessionChordWhereInput[]
    NOT?: GameSessionChordWhereInput | GameSessionChordWhereInput[]
    id?: StringFilter<"GameSessionChord"> | string
    gameSessionId?: StringFilter<"GameSessionChord"> | string
    chordId?: StringFilter<"GameSessionChord"> | string
    sequenceOrder?: IntFilter<"GameSessionChord"> | number
    userAnswer?: StringNullableFilter<"GameSessionChord"> | string | null
    isCorrect?: BoolFilter<"GameSessionChord"> | boolean
    responseTimeMs?: IntNullableFilter<"GameSessionChord"> | number | null
    playedAt?: DateTimeFilter<"GameSessionChord"> | Date | string
    gameSession?: XOR<GameSessionScalarRelationFilter, GameSessionWhereInput>
    chord?: XOR<ChordScalarRelationFilter, ChordWhereInput>
  }

  export type GameSessionChordOrderByWithRelationInput = {
    id?: SortOrder
    gameSessionId?: SortOrder
    chordId?: SortOrder
    sequenceOrder?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    responseTimeMs?: SortOrderInput | SortOrder
    playedAt?: SortOrder
    gameSession?: GameSessionOrderByWithRelationInput
    chord?: ChordOrderByWithRelationInput
  }

  export type GameSessionChordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameSessionChordWhereInput | GameSessionChordWhereInput[]
    OR?: GameSessionChordWhereInput[]
    NOT?: GameSessionChordWhereInput | GameSessionChordWhereInput[]
    gameSessionId?: StringFilter<"GameSessionChord"> | string
    chordId?: StringFilter<"GameSessionChord"> | string
    sequenceOrder?: IntFilter<"GameSessionChord"> | number
    userAnswer?: StringNullableFilter<"GameSessionChord"> | string | null
    isCorrect?: BoolFilter<"GameSessionChord"> | boolean
    responseTimeMs?: IntNullableFilter<"GameSessionChord"> | number | null
    playedAt?: DateTimeFilter<"GameSessionChord"> | Date | string
    gameSession?: XOR<GameSessionScalarRelationFilter, GameSessionWhereInput>
    chord?: XOR<ChordScalarRelationFilter, ChordWhereInput>
  }, "id">

  export type GameSessionChordOrderByWithAggregationInput = {
    id?: SortOrder
    gameSessionId?: SortOrder
    chordId?: SortOrder
    sequenceOrder?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    responseTimeMs?: SortOrderInput | SortOrder
    playedAt?: SortOrder
    _count?: GameSessionChordCountOrderByAggregateInput
    _avg?: GameSessionChordAvgOrderByAggregateInput
    _max?: GameSessionChordMaxOrderByAggregateInput
    _min?: GameSessionChordMinOrderByAggregateInput
    _sum?: GameSessionChordSumOrderByAggregateInput
  }

  export type GameSessionChordScalarWhereWithAggregatesInput = {
    AND?: GameSessionChordScalarWhereWithAggregatesInput | GameSessionChordScalarWhereWithAggregatesInput[]
    OR?: GameSessionChordScalarWhereWithAggregatesInput[]
    NOT?: GameSessionChordScalarWhereWithAggregatesInput | GameSessionChordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameSessionChord"> | string
    gameSessionId?: StringWithAggregatesFilter<"GameSessionChord"> | string
    chordId?: StringWithAggregatesFilter<"GameSessionChord"> | string
    sequenceOrder?: IntWithAggregatesFilter<"GameSessionChord"> | number
    userAnswer?: StringNullableWithAggregatesFilter<"GameSessionChord"> | string | null
    isCorrect?: BoolWithAggregatesFilter<"GameSessionChord"> | boolean
    responseTimeMs?: IntNullableWithAggregatesFilter<"GameSessionChord"> | number | null
    playedAt?: DateTimeWithAggregatesFilter<"GameSessionChord"> | Date | string
  }

  export type LeaderboardEntryWhereInput = {
    AND?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[]
    OR?: LeaderboardEntryWhereInput[]
    NOT?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[]
    id?: StringFilter<"LeaderboardEntry"> | string
    userId?: StringFilter<"LeaderboardEntry"> | string
    levelId?: IntFilter<"LeaderboardEntry"> | number
    score?: IntFilter<"LeaderboardEntry"> | number
    accuracy?: FloatFilter<"LeaderboardEntry"> | number
    streak?: IntFilter<"LeaderboardEntry"> | number
    gamesPlayed?: IntFilter<"LeaderboardEntry"> | number
    averageTimeMs?: IntNullableFilter<"LeaderboardEntry"> | number | null
    date?: DateTimeFilter<"LeaderboardEntry"> | Date | string
    rank?: IntNullableFilter<"LeaderboardEntry"> | number | null
    createdAt?: DateTimeFilter<"LeaderboardEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }

  export type LeaderboardEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    streak?: SortOrder
    gamesPlayed?: SortOrder
    averageTimeMs?: SortOrderInput | SortOrder
    date?: SortOrder
    rank?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    level?: LevelOrderByWithRelationInput
  }

  export type LeaderboardEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_levelId_date?: LeaderboardEntryUserIdLevelIdDateCompoundUniqueInput
    AND?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[]
    OR?: LeaderboardEntryWhereInput[]
    NOT?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[]
    userId?: StringFilter<"LeaderboardEntry"> | string
    levelId?: IntFilter<"LeaderboardEntry"> | number
    score?: IntFilter<"LeaderboardEntry"> | number
    accuracy?: FloatFilter<"LeaderboardEntry"> | number
    streak?: IntFilter<"LeaderboardEntry"> | number
    gamesPlayed?: IntFilter<"LeaderboardEntry"> | number
    averageTimeMs?: IntNullableFilter<"LeaderboardEntry"> | number | null
    date?: DateTimeFilter<"LeaderboardEntry"> | Date | string
    rank?: IntNullableFilter<"LeaderboardEntry"> | number | null
    createdAt?: DateTimeFilter<"LeaderboardEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }, "id" | "userId_levelId_date">

  export type LeaderboardEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    streak?: SortOrder
    gamesPlayed?: SortOrder
    averageTimeMs?: SortOrderInput | SortOrder
    date?: SortOrder
    rank?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LeaderboardEntryCountOrderByAggregateInput
    _avg?: LeaderboardEntryAvgOrderByAggregateInput
    _max?: LeaderboardEntryMaxOrderByAggregateInput
    _min?: LeaderboardEntryMinOrderByAggregateInput
    _sum?: LeaderboardEntrySumOrderByAggregateInput
  }

  export type LeaderboardEntryScalarWhereWithAggregatesInput = {
    AND?: LeaderboardEntryScalarWhereWithAggregatesInput | LeaderboardEntryScalarWhereWithAggregatesInput[]
    OR?: LeaderboardEntryScalarWhereWithAggregatesInput[]
    NOT?: LeaderboardEntryScalarWhereWithAggregatesInput | LeaderboardEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaderboardEntry"> | string
    userId?: StringWithAggregatesFilter<"LeaderboardEntry"> | string
    levelId?: IntWithAggregatesFilter<"LeaderboardEntry"> | number
    score?: IntWithAggregatesFilter<"LeaderboardEntry"> | number
    accuracy?: FloatWithAggregatesFilter<"LeaderboardEntry"> | number
    streak?: IntWithAggregatesFilter<"LeaderboardEntry"> | number
    gamesPlayed?: IntWithAggregatesFilter<"LeaderboardEntry"> | number
    averageTimeMs?: IntNullableWithAggregatesFilter<"LeaderboardEntry"> | number | null
    date?: DateTimeWithAggregatesFilter<"LeaderboardEntry"> | Date | string
    rank?: IntNullableWithAggregatesFilter<"LeaderboardEntry"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"LeaderboardEntry"> | Date | string
  }

  export type UserStatsWhereInput = {
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    id?: StringFilter<"UserStats"> | string
    userId?: StringFilter<"UserStats"> | string
    date?: DateTimeFilter<"UserStats"> | Date | string
    gamesPlayed?: IntFilter<"UserStats"> | number
    totalQuestions?: IntFilter<"UserStats"> | number
    correctAnswers?: IntFilter<"UserStats"> | number
    accuracy?: FloatFilter<"UserStats"> | number
    maxStreak?: IntFilter<"UserStats"> | number
    timePlayedMs?: IntFilter<"UserStats"> | number
    levelId?: IntNullableFilter<"UserStats"> | number | null
    createdAt?: DateTimeFilter<"UserStats"> | Date | string
    updatedAt?: DateTimeFilter<"UserStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    level?: XOR<LevelNullableScalarRelationFilter, LevelWhereInput> | null
  }

  export type UserStatsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    gamesPlayed?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    maxStreak?: SortOrder
    timePlayedMs?: SortOrder
    levelId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    level?: LevelOrderByWithRelationInput
  }

  export type UserStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date_levelId?: UserStatsUserIdDateLevelIdCompoundUniqueInput
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    userId?: StringFilter<"UserStats"> | string
    date?: DateTimeFilter<"UserStats"> | Date | string
    gamesPlayed?: IntFilter<"UserStats"> | number
    totalQuestions?: IntFilter<"UserStats"> | number
    correctAnswers?: IntFilter<"UserStats"> | number
    accuracy?: FloatFilter<"UserStats"> | number
    maxStreak?: IntFilter<"UserStats"> | number
    timePlayedMs?: IntFilter<"UserStats"> | number
    levelId?: IntNullableFilter<"UserStats"> | number | null
    createdAt?: DateTimeFilter<"UserStats"> | Date | string
    updatedAt?: DateTimeFilter<"UserStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    level?: XOR<LevelNullableScalarRelationFilter, LevelWhereInput> | null
  }, "id" | "userId_date_levelId">

  export type UserStatsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    gamesPlayed?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    maxStreak?: SortOrder
    timePlayedMs?: SortOrder
    levelId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserStatsCountOrderByAggregateInput
    _avg?: UserStatsAvgOrderByAggregateInput
    _max?: UserStatsMaxOrderByAggregateInput
    _min?: UserStatsMinOrderByAggregateInput
    _sum?: UserStatsSumOrderByAggregateInput
  }

  export type UserStatsScalarWhereWithAggregatesInput = {
    AND?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    OR?: UserStatsScalarWhereWithAggregatesInput[]
    NOT?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStats"> | string
    userId?: StringWithAggregatesFilter<"UserStats"> | string
    date?: DateTimeWithAggregatesFilter<"UserStats"> | Date | string
    gamesPlayed?: IntWithAggregatesFilter<"UserStats"> | number
    totalQuestions?: IntWithAggregatesFilter<"UserStats"> | number
    correctAnswers?: IntWithAggregatesFilter<"UserStats"> | number
    accuracy?: FloatWithAggregatesFilter<"UserStats"> | number
    maxStreak?: IntWithAggregatesFilter<"UserStats"> | number
    timePlayedMs?: IntWithAggregatesFilter<"UserStats"> | number
    levelId?: IntNullableWithAggregatesFilter<"UserStats"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UserStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserStats"> | Date | string
  }

  export type AppSettingsWhereInput = {
    AND?: AppSettingsWhereInput | AppSettingsWhereInput[]
    OR?: AppSettingsWhereInput[]
    NOT?: AppSettingsWhereInput | AppSettingsWhereInput[]
    id?: StringFilter<"AppSettings"> | string
    key?: StringFilter<"AppSettings"> | string
    value?: StringFilter<"AppSettings"> | string
    description?: StringNullableFilter<"AppSettings"> | string | null
    updatedAt?: DateTimeFilter<"AppSettings"> | Date | string
  }

  export type AppSettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: AppSettingsWhereInput | AppSettingsWhereInput[]
    OR?: AppSettingsWhereInput[]
    NOT?: AppSettingsWhereInput | AppSettingsWhereInput[]
    value?: StringFilter<"AppSettings"> | string
    description?: StringNullableFilter<"AppSettings"> | string | null
    updatedAt?: DateTimeFilter<"AppSettings"> | Date | string
  }, "id" | "key">

  export type AppSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: AppSettingsCountOrderByAggregateInput
    _max?: AppSettingsMaxOrderByAggregateInput
    _min?: AppSettingsMinOrderByAggregateInput
  }

  export type AppSettingsScalarWhereWithAggregatesInput = {
    AND?: AppSettingsScalarWhereWithAggregatesInput | AppSettingsScalarWhereWithAggregatesInput[]
    OR?: AppSettingsScalarWhereWithAggregatesInput[]
    NOT?: AppSettingsScalarWhereWithAggregatesInput | AppSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppSettings"> | string
    key?: StringWithAggregatesFilter<"AppSettings"> | string
    value?: StringWithAggregatesFilter<"AppSettings"> | string
    description?: StringNullableWithAggregatesFilter<"AppSettings"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"AppSettings"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId?: string | null
    currentLevel?: number
    currentStreak?: number
    overallAccuracy?: number
    totalGamesPlayed?: number
    lastPlayedAt?: Date | string | null
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    gameSessions?: GameSessionCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutUserInput
    userStats?: UserStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId?: string | null
    currentLevel?: number
    currentStreak?: number
    overallAccuracy?: number
    totalGamesPlayed?: number
    lastPlayedAt?: Date | string | null
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput
    userStats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    gameSessions?: GameSessionUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId?: string | null
    currentLevel?: number
    currentStreak?: number
    overallAccuracy?: number
    totalGamesPlayed?: number
    lastPlayedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionCreateInput = {
    id?: string
    type: $Enums.SubscriptionType
    status?: $Enums.SubscriptionStatus
    startDate?: Date | string
    endDate: Date | string
    amount: number
    currency?: string
    paymentMethod?: string | null
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.SubscriptionType
    status?: $Enums.SubscriptionStatus
    startDate?: Date | string
    endDate: Date | string
    amount: number
    currency?: string
    paymentMethod?: string | null
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.SubscriptionType
    status?: $Enums.SubscriptionStatus
    startDate?: Date | string
    endDate: Date | string
    amount: number
    currency?: string
    paymentMethod?: string | null
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstrumentCreateInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
    chords?: ChordCreateNestedManyWithoutInstrumentInput
    gameSessions?: GameSessionCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUncheckedCreateInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
    chords?: ChordUncheckedCreateNestedManyWithoutInstrumentInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUpdateManyWithoutInstrumentNestedInput
    gameSessions?: GameSessionUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUncheckedUpdateManyWithoutInstrumentNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentCreateManyInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
  }

  export type InstrumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InstrumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LevelCreateInput = {
    number: number
    name: string
    description?: string | null
    isFree?: boolean
    isActive?: boolean
    chords?: ChordCreateNestedManyWithoutLevelInput
    gameSessions?: GameSessionCreateNestedManyWithoutLevelInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutLevelInput
    userStats?: UserStatsCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateInput = {
    id?: number
    number: number
    name: string
    description?: string | null
    isFree?: boolean
    isActive?: boolean
    chords?: ChordUncheckedCreateNestedManyWithoutLevelInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutLevelInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutLevelInput
    userStats?: UserStatsUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUpdateManyWithoutLevelNestedInput
    gameSessions?: GameSessionUpdateManyWithoutLevelNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutLevelNestedInput
    userStats?: UserStatsUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUncheckedUpdateManyWithoutLevelNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutLevelNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutLevelNestedInput
    userStats?: UserStatsUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type LevelCreateManyInput = {
    id?: number
    number: number
    name: string
    description?: string | null
    isFree?: boolean
    isActive?: boolean
  }

  export type LevelUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChordCreateInput = {
    id?: string
    name: string
    displayName: string
    audioFileUrl?: string | null
    isActive?: boolean
    instrument: InstrumentCreateNestedOneWithoutChordsInput
    level: LevelCreateNestedOneWithoutChordsInput
    gameSessionChords?: GameSessionChordCreateNestedManyWithoutChordInput
  }

  export type ChordUncheckedCreateInput = {
    id?: string
    name: string
    displayName: string
    audioFileUrl?: string | null
    instrumentId: string
    levelId: number
    isActive?: boolean
    gameSessionChords?: GameSessionChordUncheckedCreateNestedManyWithoutChordInput
  }

  export type ChordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    instrument?: InstrumentUpdateOneRequiredWithoutChordsNestedInput
    level?: LevelUpdateOneRequiredWithoutChordsNestedInput
    gameSessionChords?: GameSessionChordUpdateManyWithoutChordNestedInput
  }

  export type ChordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameSessionChords?: GameSessionChordUncheckedUpdateManyWithoutChordNestedInput
  }

  export type ChordCreateManyInput = {
    id?: string
    name: string
    displayName: string
    audioFileUrl?: string | null
    instrumentId: string
    levelId: number
    isActive?: boolean
  }

  export type ChordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameSessionCreateInput = {
    id?: string
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    user: UserCreateNestedOneWithoutGameSessionsInput
    instrument: InstrumentCreateNestedOneWithoutGameSessionsInput
    level: LevelCreateNestedOneWithoutGameSessionsInput
    chords?: GameSessionChordCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateInput = {
    id?: string
    userId: string
    instrumentId: string
    levelId: number
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    chords?: GameSessionChordUncheckedCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutGameSessionsNestedInput
    instrument?: InstrumentUpdateOneRequiredWithoutGameSessionsNestedInput
    level?: LevelUpdateOneRequiredWithoutGameSessionsNestedInput
    chords?: GameSessionChordUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    chords?: GameSessionChordUncheckedUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionCreateManyInput = {
    id?: string
    userId: string
    instrumentId: string
    levelId: number
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
  }

  export type GameSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GameSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GameSessionChordCreateInput = {
    id?: string
    sequenceOrder?: number
    userAnswer?: string | null
    isCorrect?: boolean
    responseTimeMs?: number | null
    playedAt?: Date | string
    gameSession: GameSessionCreateNestedOneWithoutChordsInput
    chord: ChordCreateNestedOneWithoutGameSessionChordsInput
  }

  export type GameSessionChordUncheckedCreateInput = {
    id?: string
    gameSessionId: string
    chordId: string
    sequenceOrder?: number
    userAnswer?: string | null
    isCorrect?: boolean
    responseTimeMs?: number | null
    playedAt?: Date | string
  }

  export type GameSessionChordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameSession?: GameSessionUpdateOneRequiredWithoutChordsNestedInput
    chord?: ChordUpdateOneRequiredWithoutGameSessionChordsNestedInput
  }

  export type GameSessionChordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameSessionId?: StringFieldUpdateOperationsInput | string
    chordId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionChordCreateManyInput = {
    id?: string
    gameSessionId: string
    chordId: string
    sequenceOrder?: number
    userAnswer?: string | null
    isCorrect?: boolean
    responseTimeMs?: number | null
    playedAt?: Date | string
  }

  export type GameSessionChordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionChordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameSessionId?: StringFieldUpdateOperationsInput | string
    chordId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardEntryCreateInput = {
    id?: string
    score: number
    accuracy: number
    streak: number
    gamesPlayed: number
    averageTimeMs?: number | null
    date?: Date | string
    rank?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLeaderboardEntriesInput
    level: LevelCreateNestedOneWithoutLeaderboardEntriesInput
  }

  export type LeaderboardEntryUncheckedCreateInput = {
    id?: string
    userId: string
    levelId: number
    score: number
    accuracy: number
    streak: number
    gamesPlayed: number
    averageTimeMs?: number | null
    date?: Date | string
    rank?: number | null
    createdAt?: Date | string
  }

  export type LeaderboardEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    averageTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeaderboardEntriesNestedInput
    level?: LevelUpdateOneRequiredWithoutLeaderboardEntriesNestedInput
  }

  export type LeaderboardEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    averageTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardEntryCreateManyInput = {
    id?: string
    userId: string
    levelId: number
    score: number
    accuracy: number
    streak: number
    gamesPlayed: number
    averageTimeMs?: number | null
    date?: Date | string
    rank?: number | null
    createdAt?: Date | string
  }

  export type LeaderboardEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    averageTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    averageTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsCreateInput = {
    id?: string
    date: Date | string
    gamesPlayed?: number
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    maxStreak?: number
    timePlayedMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserStatsInput
    level?: LevelCreateNestedOneWithoutUserStatsInput
  }

  export type UserStatsUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    gamesPlayed?: number
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    maxStreak?: number
    timePlayedMs?: number
    levelId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    timePlayedMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserStatsNestedInput
    level?: LevelUpdateOneWithoutUserStatsNestedInput
  }

  export type UserStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    timePlayedMs?: IntFieldUpdateOperationsInput | number
    levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    gamesPlayed?: number
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    maxStreak?: number
    timePlayedMs?: number
    levelId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    timePlayedMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    timePlayedMs?: IntFieldUpdateOperationsInput | number
    levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingsCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type AppSettingsUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type AppSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingsCreateManyInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type AppSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type GameSessionListRelationFilter = {
    every?: GameSessionWhereInput
    some?: GameSessionWhereInput
    none?: GameSessionWhereInput
  }

  export type LeaderboardEntryListRelationFilter = {
    every?: LeaderboardEntryWhereInput
    some?: LeaderboardEntryWhereInput
    none?: LeaderboardEntryWhereInput
  }

  export type UserStatsListRelationFilter = {
    every?: UserStatsWhereInput
    some?: UserStatsWhereInput
    none?: UserStatsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaderboardEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserStatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionId?: SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    overallAccuracy?: SortOrder
    totalGamesPlayed?: SortOrder
    lastPlayedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    overallAccuracy?: SortOrder
    totalGamesPlayed?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionId?: SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    overallAccuracy?: SortOrder
    totalGamesPlayed?: SortOrder
    lastPlayedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionId?: SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    overallAccuracy?: SortOrder
    totalGamesPlayed?: SortOrder
    lastPlayedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    overallAccuracy?: SortOrder
    totalGamesPlayed?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChordListRelationFilter = {
    every?: ChordWhereInput
    some?: ChordWhereInput
    none?: ChordWhereInput
  }

  export type ChordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstrumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
  }

  export type InstrumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
  }

  export type InstrumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LevelCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isFree?: SortOrder
    isActive?: SortOrder
  }

  export type LevelAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type LevelMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isFree?: SortOrder
    isActive?: SortOrder
  }

  export type LevelMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isFree?: SortOrder
    isActive?: SortOrder
  }

  export type LevelSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type InstrumentScalarRelationFilter = {
    is?: InstrumentWhereInput
    isNot?: InstrumentWhereInput
  }

  export type LevelScalarRelationFilter = {
    is?: LevelWhereInput
    isNot?: LevelWhereInput
  }

  export type GameSessionChordListRelationFilter = {
    every?: GameSessionChordWhereInput
    some?: GameSessionChordWhereInput
    none?: GameSessionChordWhereInput
  }

  export type GameSessionChordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChordNameInstrumentIdLevelIdCompoundUniqueInput = {
    name: string
    instrumentId: string
    levelId: number
  }

  export type ChordCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    audioFileUrl?: SortOrder
    instrumentId?: SortOrder
    levelId?: SortOrder
    isActive?: SortOrder
  }

  export type ChordAvgOrderByAggregateInput = {
    levelId?: SortOrder
  }

  export type ChordMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    audioFileUrl?: SortOrder
    instrumentId?: SortOrder
    levelId?: SortOrder
    isActive?: SortOrder
  }

  export type ChordMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    audioFileUrl?: SortOrder
    instrumentId?: SortOrder
    levelId?: SortOrder
    isActive?: SortOrder
  }

  export type ChordSumOrderByAggregateInput = {
    levelId?: SortOrder
  }

  export type EnumGameModeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameModeFilter<$PrismaModel> | $Enums.GameMode
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GameSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instrumentId?: SortOrder
    levelId?: SortOrder
    gameMode?: SortOrder
    isCompleted?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    sessionStreak?: SortOrder
    maxStreak?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    durationMs?: SortOrder
  }

  export type GameSessionAvgOrderByAggregateInput = {
    levelId?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    sessionStreak?: SortOrder
    maxStreak?: SortOrder
    durationMs?: SortOrder
  }

  export type GameSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instrumentId?: SortOrder
    levelId?: SortOrder
    gameMode?: SortOrder
    isCompleted?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    sessionStreak?: SortOrder
    maxStreak?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    durationMs?: SortOrder
  }

  export type GameSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instrumentId?: SortOrder
    levelId?: SortOrder
    gameMode?: SortOrder
    isCompleted?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    sessionStreak?: SortOrder
    maxStreak?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    durationMs?: SortOrder
  }

  export type GameSessionSumOrderByAggregateInput = {
    levelId?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    sessionStreak?: SortOrder
    maxStreak?: SortOrder
    durationMs?: SortOrder
  }

  export type EnumGameModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameModeWithAggregatesFilter<$PrismaModel> | $Enums.GameMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameModeFilter<$PrismaModel>
    _max?: NestedEnumGameModeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type GameSessionScalarRelationFilter = {
    is?: GameSessionWhereInput
    isNot?: GameSessionWhereInput
  }

  export type ChordScalarRelationFilter = {
    is?: ChordWhereInput
    isNot?: ChordWhereInput
  }

  export type GameSessionChordCountOrderByAggregateInput = {
    id?: SortOrder
    gameSessionId?: SortOrder
    chordId?: SortOrder
    sequenceOrder?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
    responseTimeMs?: SortOrder
    playedAt?: SortOrder
  }

  export type GameSessionChordAvgOrderByAggregateInput = {
    sequenceOrder?: SortOrder
    responseTimeMs?: SortOrder
  }

  export type GameSessionChordMaxOrderByAggregateInput = {
    id?: SortOrder
    gameSessionId?: SortOrder
    chordId?: SortOrder
    sequenceOrder?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
    responseTimeMs?: SortOrder
    playedAt?: SortOrder
  }

  export type GameSessionChordMinOrderByAggregateInput = {
    id?: SortOrder
    gameSessionId?: SortOrder
    chordId?: SortOrder
    sequenceOrder?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
    responseTimeMs?: SortOrder
    playedAt?: SortOrder
  }

  export type GameSessionChordSumOrderByAggregateInput = {
    sequenceOrder?: SortOrder
    responseTimeMs?: SortOrder
  }

  export type LeaderboardEntryUserIdLevelIdDateCompoundUniqueInput = {
    userId: string
    levelId: number
    date: Date | string
  }

  export type LeaderboardEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    streak?: SortOrder
    gamesPlayed?: SortOrder
    averageTimeMs?: SortOrder
    date?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderboardEntryAvgOrderByAggregateInput = {
    levelId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    streak?: SortOrder
    gamesPlayed?: SortOrder
    averageTimeMs?: SortOrder
    rank?: SortOrder
  }

  export type LeaderboardEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    streak?: SortOrder
    gamesPlayed?: SortOrder
    averageTimeMs?: SortOrder
    date?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderboardEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    levelId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    streak?: SortOrder
    gamesPlayed?: SortOrder
    averageTimeMs?: SortOrder
    date?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderboardEntrySumOrderByAggregateInput = {
    levelId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    streak?: SortOrder
    gamesPlayed?: SortOrder
    averageTimeMs?: SortOrder
    rank?: SortOrder
  }

  export type LevelNullableScalarRelationFilter = {
    is?: LevelWhereInput | null
    isNot?: LevelWhereInput | null
  }

  export type UserStatsUserIdDateLevelIdCompoundUniqueInput = {
    userId: string
    date: Date | string
    levelId: number
  }

  export type UserStatsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    gamesPlayed?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    maxStreak?: SortOrder
    timePlayedMs?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsAvgOrderByAggregateInput = {
    gamesPlayed?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    maxStreak?: SortOrder
    timePlayedMs?: SortOrder
    levelId?: SortOrder
  }

  export type UserStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    gamesPlayed?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    maxStreak?: SortOrder
    timePlayedMs?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    gamesPlayed?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    maxStreak?: SortOrder
    timePlayedMs?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsSumOrderByAggregateInput = {
    gamesPlayed?: SortOrder
    totalQuestions?: SortOrder
    correctAnswers?: SortOrder
    accuracy?: SortOrder
    maxStreak?: SortOrder
    timePlayedMs?: SortOrder
    levelId?: SortOrder
  }

  export type AppSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type GameSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput> | GameSessionCreateWithoutUserInput[] | GameSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutUserInput | GameSessionCreateOrConnectWithoutUserInput[]
    createMany?: GameSessionCreateManyUserInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type LeaderboardEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaderboardEntryCreateWithoutUserInput, LeaderboardEntryUncheckedCreateWithoutUserInput> | LeaderboardEntryCreateWithoutUserInput[] | LeaderboardEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutUserInput | LeaderboardEntryCreateOrConnectWithoutUserInput[]
    createMany?: LeaderboardEntryCreateManyUserInputEnvelope
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
  }

  export type UserStatsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput> | UserStatsCreateWithoutUserInput[] | UserStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput | UserStatsCreateOrConnectWithoutUserInput[]
    createMany?: UserStatsCreateManyUserInputEnvelope
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type GameSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput> | GameSessionCreateWithoutUserInput[] | GameSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutUserInput | GameSessionCreateOrConnectWithoutUserInput[]
    createMany?: GameSessionCreateManyUserInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaderboardEntryCreateWithoutUserInput, LeaderboardEntryUncheckedCreateWithoutUserInput> | LeaderboardEntryCreateWithoutUserInput[] | LeaderboardEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutUserInput | LeaderboardEntryCreateOrConnectWithoutUserInput[]
    createMany?: LeaderboardEntryCreateManyUserInputEnvelope
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
  }

  export type UserStatsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput> | UserStatsCreateWithoutUserInput[] | UserStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput | UserStatsCreateOrConnectWithoutUserInput[]
    createMany?: UserStatsCreateManyUserInputEnvelope
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type GameSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput> | GameSessionCreateWithoutUserInput[] | GameSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutUserInput | GameSessionCreateOrConnectWithoutUserInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutUserInput | GameSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameSessionCreateManyUserInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutUserInput | GameSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutUserInput | GameSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type LeaderboardEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaderboardEntryCreateWithoutUserInput, LeaderboardEntryUncheckedCreateWithoutUserInput> | LeaderboardEntryCreateWithoutUserInput[] | LeaderboardEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutUserInput | LeaderboardEntryCreateOrConnectWithoutUserInput[]
    upsert?: LeaderboardEntryUpsertWithWhereUniqueWithoutUserInput | LeaderboardEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaderboardEntryCreateManyUserInputEnvelope
    set?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    disconnect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    delete?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    update?: LeaderboardEntryUpdateWithWhereUniqueWithoutUserInput | LeaderboardEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaderboardEntryUpdateManyWithWhereWithoutUserInput | LeaderboardEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[]
  }

  export type UserStatsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput> | UserStatsCreateWithoutUserInput[] | UserStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput | UserStatsCreateOrConnectWithoutUserInput[]
    upsert?: UserStatsUpsertWithWhereUniqueWithoutUserInput | UserStatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStatsCreateManyUserInputEnvelope
    set?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    disconnect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    delete?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    update?: UserStatsUpdateWithWhereUniqueWithoutUserInput | UserStatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStatsUpdateManyWithWhereWithoutUserInput | UserStatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStatsScalarWhereInput | UserStatsScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type GameSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput> | GameSessionCreateWithoutUserInput[] | GameSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutUserInput | GameSessionCreateOrConnectWithoutUserInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutUserInput | GameSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameSessionCreateManyUserInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutUserInput | GameSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutUserInput | GameSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaderboardEntryCreateWithoutUserInput, LeaderboardEntryUncheckedCreateWithoutUserInput> | LeaderboardEntryCreateWithoutUserInput[] | LeaderboardEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutUserInput | LeaderboardEntryCreateOrConnectWithoutUserInput[]
    upsert?: LeaderboardEntryUpsertWithWhereUniqueWithoutUserInput | LeaderboardEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaderboardEntryCreateManyUserInputEnvelope
    set?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    disconnect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    delete?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    update?: LeaderboardEntryUpdateWithWhereUniqueWithoutUserInput | LeaderboardEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaderboardEntryUpdateManyWithWhereWithoutUserInput | LeaderboardEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[]
  }

  export type UserStatsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput> | UserStatsCreateWithoutUserInput[] | UserStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput | UserStatsCreateOrConnectWithoutUserInput[]
    upsert?: UserStatsUpsertWithWhereUniqueWithoutUserInput | UserStatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStatsCreateManyUserInputEnvelope
    set?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    disconnect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    delete?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    update?: UserStatsUpdateWithWhereUniqueWithoutUserInput | UserStatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStatsUpdateManyWithWhereWithoutUserInput | UserStatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStatsScalarWhereInput | UserStatsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSubscriptionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionType
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type ChordCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<ChordCreateWithoutInstrumentInput, ChordUncheckedCreateWithoutInstrumentInput> | ChordCreateWithoutInstrumentInput[] | ChordUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: ChordCreateOrConnectWithoutInstrumentInput | ChordCreateOrConnectWithoutInstrumentInput[]
    createMany?: ChordCreateManyInstrumentInputEnvelope
    connect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
  }

  export type GameSessionCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<GameSessionCreateWithoutInstrumentInput, GameSessionUncheckedCreateWithoutInstrumentInput> | GameSessionCreateWithoutInstrumentInput[] | GameSessionUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutInstrumentInput | GameSessionCreateOrConnectWithoutInstrumentInput[]
    createMany?: GameSessionCreateManyInstrumentInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type ChordUncheckedCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<ChordCreateWithoutInstrumentInput, ChordUncheckedCreateWithoutInstrumentInput> | ChordCreateWithoutInstrumentInput[] | ChordUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: ChordCreateOrConnectWithoutInstrumentInput | ChordCreateOrConnectWithoutInstrumentInput[]
    createMany?: ChordCreateManyInstrumentInputEnvelope
    connect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<GameSessionCreateWithoutInstrumentInput, GameSessionUncheckedCreateWithoutInstrumentInput> | GameSessionCreateWithoutInstrumentInput[] | GameSessionUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutInstrumentInput | GameSessionCreateOrConnectWithoutInstrumentInput[]
    createMany?: GameSessionCreateManyInstrumentInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChordUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<ChordCreateWithoutInstrumentInput, ChordUncheckedCreateWithoutInstrumentInput> | ChordCreateWithoutInstrumentInput[] | ChordUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: ChordCreateOrConnectWithoutInstrumentInput | ChordCreateOrConnectWithoutInstrumentInput[]
    upsert?: ChordUpsertWithWhereUniqueWithoutInstrumentInput | ChordUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: ChordCreateManyInstrumentInputEnvelope
    set?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    disconnect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    delete?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    connect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    update?: ChordUpdateWithWhereUniqueWithoutInstrumentInput | ChordUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: ChordUpdateManyWithWhereWithoutInstrumentInput | ChordUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: ChordScalarWhereInput | ChordScalarWhereInput[]
  }

  export type GameSessionUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<GameSessionCreateWithoutInstrumentInput, GameSessionUncheckedCreateWithoutInstrumentInput> | GameSessionCreateWithoutInstrumentInput[] | GameSessionUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutInstrumentInput | GameSessionCreateOrConnectWithoutInstrumentInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutInstrumentInput | GameSessionUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: GameSessionCreateManyInstrumentInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutInstrumentInput | GameSessionUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutInstrumentInput | GameSessionUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type ChordUncheckedUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<ChordCreateWithoutInstrumentInput, ChordUncheckedCreateWithoutInstrumentInput> | ChordCreateWithoutInstrumentInput[] | ChordUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: ChordCreateOrConnectWithoutInstrumentInput | ChordCreateOrConnectWithoutInstrumentInput[]
    upsert?: ChordUpsertWithWhereUniqueWithoutInstrumentInput | ChordUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: ChordCreateManyInstrumentInputEnvelope
    set?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    disconnect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    delete?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    connect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    update?: ChordUpdateWithWhereUniqueWithoutInstrumentInput | ChordUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: ChordUpdateManyWithWhereWithoutInstrumentInput | ChordUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: ChordScalarWhereInput | ChordScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<GameSessionCreateWithoutInstrumentInput, GameSessionUncheckedCreateWithoutInstrumentInput> | GameSessionCreateWithoutInstrumentInput[] | GameSessionUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutInstrumentInput | GameSessionCreateOrConnectWithoutInstrumentInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutInstrumentInput | GameSessionUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: GameSessionCreateManyInstrumentInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutInstrumentInput | GameSessionUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutInstrumentInput | GameSessionUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type ChordCreateNestedManyWithoutLevelInput = {
    create?: XOR<ChordCreateWithoutLevelInput, ChordUncheckedCreateWithoutLevelInput> | ChordCreateWithoutLevelInput[] | ChordUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: ChordCreateOrConnectWithoutLevelInput | ChordCreateOrConnectWithoutLevelInput[]
    createMany?: ChordCreateManyLevelInputEnvelope
    connect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
  }

  export type GameSessionCreateNestedManyWithoutLevelInput = {
    create?: XOR<GameSessionCreateWithoutLevelInput, GameSessionUncheckedCreateWithoutLevelInput> | GameSessionCreateWithoutLevelInput[] | GameSessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutLevelInput | GameSessionCreateOrConnectWithoutLevelInput[]
    createMany?: GameSessionCreateManyLevelInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type LeaderboardEntryCreateNestedManyWithoutLevelInput = {
    create?: XOR<LeaderboardEntryCreateWithoutLevelInput, LeaderboardEntryUncheckedCreateWithoutLevelInput> | LeaderboardEntryCreateWithoutLevelInput[] | LeaderboardEntryUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutLevelInput | LeaderboardEntryCreateOrConnectWithoutLevelInput[]
    createMany?: LeaderboardEntryCreateManyLevelInputEnvelope
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
  }

  export type UserStatsCreateNestedManyWithoutLevelInput = {
    create?: XOR<UserStatsCreateWithoutLevelInput, UserStatsUncheckedCreateWithoutLevelInput> | UserStatsCreateWithoutLevelInput[] | UserStatsUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutLevelInput | UserStatsCreateOrConnectWithoutLevelInput[]
    createMany?: UserStatsCreateManyLevelInputEnvelope
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
  }

  export type ChordUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<ChordCreateWithoutLevelInput, ChordUncheckedCreateWithoutLevelInput> | ChordCreateWithoutLevelInput[] | ChordUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: ChordCreateOrConnectWithoutLevelInput | ChordCreateOrConnectWithoutLevelInput[]
    createMany?: ChordCreateManyLevelInputEnvelope
    connect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<GameSessionCreateWithoutLevelInput, GameSessionUncheckedCreateWithoutLevelInput> | GameSessionCreateWithoutLevelInput[] | GameSessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutLevelInput | GameSessionCreateOrConnectWithoutLevelInput[]
    createMany?: GameSessionCreateManyLevelInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type LeaderboardEntryUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<LeaderboardEntryCreateWithoutLevelInput, LeaderboardEntryUncheckedCreateWithoutLevelInput> | LeaderboardEntryCreateWithoutLevelInput[] | LeaderboardEntryUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutLevelInput | LeaderboardEntryCreateOrConnectWithoutLevelInput[]
    createMany?: LeaderboardEntryCreateManyLevelInputEnvelope
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
  }

  export type UserStatsUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<UserStatsCreateWithoutLevelInput, UserStatsUncheckedCreateWithoutLevelInput> | UserStatsCreateWithoutLevelInput[] | UserStatsUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutLevelInput | UserStatsCreateOrConnectWithoutLevelInput[]
    createMany?: UserStatsCreateManyLevelInputEnvelope
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
  }

  export type ChordUpdateManyWithoutLevelNestedInput = {
    create?: XOR<ChordCreateWithoutLevelInput, ChordUncheckedCreateWithoutLevelInput> | ChordCreateWithoutLevelInput[] | ChordUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: ChordCreateOrConnectWithoutLevelInput | ChordCreateOrConnectWithoutLevelInput[]
    upsert?: ChordUpsertWithWhereUniqueWithoutLevelInput | ChordUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: ChordCreateManyLevelInputEnvelope
    set?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    disconnect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    delete?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    connect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    update?: ChordUpdateWithWhereUniqueWithoutLevelInput | ChordUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: ChordUpdateManyWithWhereWithoutLevelInput | ChordUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: ChordScalarWhereInput | ChordScalarWhereInput[]
  }

  export type GameSessionUpdateManyWithoutLevelNestedInput = {
    create?: XOR<GameSessionCreateWithoutLevelInput, GameSessionUncheckedCreateWithoutLevelInput> | GameSessionCreateWithoutLevelInput[] | GameSessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutLevelInput | GameSessionCreateOrConnectWithoutLevelInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutLevelInput | GameSessionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: GameSessionCreateManyLevelInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutLevelInput | GameSessionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutLevelInput | GameSessionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type LeaderboardEntryUpdateManyWithoutLevelNestedInput = {
    create?: XOR<LeaderboardEntryCreateWithoutLevelInput, LeaderboardEntryUncheckedCreateWithoutLevelInput> | LeaderboardEntryCreateWithoutLevelInput[] | LeaderboardEntryUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutLevelInput | LeaderboardEntryCreateOrConnectWithoutLevelInput[]
    upsert?: LeaderboardEntryUpsertWithWhereUniqueWithoutLevelInput | LeaderboardEntryUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: LeaderboardEntryCreateManyLevelInputEnvelope
    set?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    disconnect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    delete?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    update?: LeaderboardEntryUpdateWithWhereUniqueWithoutLevelInput | LeaderboardEntryUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: LeaderboardEntryUpdateManyWithWhereWithoutLevelInput | LeaderboardEntryUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[]
  }

  export type UserStatsUpdateManyWithoutLevelNestedInput = {
    create?: XOR<UserStatsCreateWithoutLevelInput, UserStatsUncheckedCreateWithoutLevelInput> | UserStatsCreateWithoutLevelInput[] | UserStatsUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutLevelInput | UserStatsCreateOrConnectWithoutLevelInput[]
    upsert?: UserStatsUpsertWithWhereUniqueWithoutLevelInput | UserStatsUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: UserStatsCreateManyLevelInputEnvelope
    set?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    disconnect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    delete?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    update?: UserStatsUpdateWithWhereUniqueWithoutLevelInput | UserStatsUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: UserStatsUpdateManyWithWhereWithoutLevelInput | UserStatsUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: UserStatsScalarWhereInput | UserStatsScalarWhereInput[]
  }

  export type ChordUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<ChordCreateWithoutLevelInput, ChordUncheckedCreateWithoutLevelInput> | ChordCreateWithoutLevelInput[] | ChordUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: ChordCreateOrConnectWithoutLevelInput | ChordCreateOrConnectWithoutLevelInput[]
    upsert?: ChordUpsertWithWhereUniqueWithoutLevelInput | ChordUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: ChordCreateManyLevelInputEnvelope
    set?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    disconnect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    delete?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    connect?: ChordWhereUniqueInput | ChordWhereUniqueInput[]
    update?: ChordUpdateWithWhereUniqueWithoutLevelInput | ChordUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: ChordUpdateManyWithWhereWithoutLevelInput | ChordUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: ChordScalarWhereInput | ChordScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<GameSessionCreateWithoutLevelInput, GameSessionUncheckedCreateWithoutLevelInput> | GameSessionCreateWithoutLevelInput[] | GameSessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutLevelInput | GameSessionCreateOrConnectWithoutLevelInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutLevelInput | GameSessionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: GameSessionCreateManyLevelInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutLevelInput | GameSessionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutLevelInput | GameSessionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type LeaderboardEntryUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<LeaderboardEntryCreateWithoutLevelInput, LeaderboardEntryUncheckedCreateWithoutLevelInput> | LeaderboardEntryCreateWithoutLevelInput[] | LeaderboardEntryUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutLevelInput | LeaderboardEntryCreateOrConnectWithoutLevelInput[]
    upsert?: LeaderboardEntryUpsertWithWhereUniqueWithoutLevelInput | LeaderboardEntryUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: LeaderboardEntryCreateManyLevelInputEnvelope
    set?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    disconnect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    delete?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    update?: LeaderboardEntryUpdateWithWhereUniqueWithoutLevelInput | LeaderboardEntryUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: LeaderboardEntryUpdateManyWithWhereWithoutLevelInput | LeaderboardEntryUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[]
  }

  export type UserStatsUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<UserStatsCreateWithoutLevelInput, UserStatsUncheckedCreateWithoutLevelInput> | UserStatsCreateWithoutLevelInput[] | UserStatsUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: UserStatsCreateOrConnectWithoutLevelInput | UserStatsCreateOrConnectWithoutLevelInput[]
    upsert?: UserStatsUpsertWithWhereUniqueWithoutLevelInput | UserStatsUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: UserStatsCreateManyLevelInputEnvelope
    set?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    disconnect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    delete?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    connect?: UserStatsWhereUniqueInput | UserStatsWhereUniqueInput[]
    update?: UserStatsUpdateWithWhereUniqueWithoutLevelInput | UserStatsUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: UserStatsUpdateManyWithWhereWithoutLevelInput | UserStatsUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: UserStatsScalarWhereInput | UserStatsScalarWhereInput[]
  }

  export type InstrumentCreateNestedOneWithoutChordsInput = {
    create?: XOR<InstrumentCreateWithoutChordsInput, InstrumentUncheckedCreateWithoutChordsInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutChordsInput
    connect?: InstrumentWhereUniqueInput
  }

  export type LevelCreateNestedOneWithoutChordsInput = {
    create?: XOR<LevelCreateWithoutChordsInput, LevelUncheckedCreateWithoutChordsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutChordsInput
    connect?: LevelWhereUniqueInput
  }

  export type GameSessionChordCreateNestedManyWithoutChordInput = {
    create?: XOR<GameSessionChordCreateWithoutChordInput, GameSessionChordUncheckedCreateWithoutChordInput> | GameSessionChordCreateWithoutChordInput[] | GameSessionChordUncheckedCreateWithoutChordInput[]
    connectOrCreate?: GameSessionChordCreateOrConnectWithoutChordInput | GameSessionChordCreateOrConnectWithoutChordInput[]
    createMany?: GameSessionChordCreateManyChordInputEnvelope
    connect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
  }

  export type GameSessionChordUncheckedCreateNestedManyWithoutChordInput = {
    create?: XOR<GameSessionChordCreateWithoutChordInput, GameSessionChordUncheckedCreateWithoutChordInput> | GameSessionChordCreateWithoutChordInput[] | GameSessionChordUncheckedCreateWithoutChordInput[]
    connectOrCreate?: GameSessionChordCreateOrConnectWithoutChordInput | GameSessionChordCreateOrConnectWithoutChordInput[]
    createMany?: GameSessionChordCreateManyChordInputEnvelope
    connect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
  }

  export type InstrumentUpdateOneRequiredWithoutChordsNestedInput = {
    create?: XOR<InstrumentCreateWithoutChordsInput, InstrumentUncheckedCreateWithoutChordsInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutChordsInput
    upsert?: InstrumentUpsertWithoutChordsInput
    connect?: InstrumentWhereUniqueInput
    update?: XOR<XOR<InstrumentUpdateToOneWithWhereWithoutChordsInput, InstrumentUpdateWithoutChordsInput>, InstrumentUncheckedUpdateWithoutChordsInput>
  }

  export type LevelUpdateOneRequiredWithoutChordsNestedInput = {
    create?: XOR<LevelCreateWithoutChordsInput, LevelUncheckedCreateWithoutChordsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutChordsInput
    upsert?: LevelUpsertWithoutChordsInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutChordsInput, LevelUpdateWithoutChordsInput>, LevelUncheckedUpdateWithoutChordsInput>
  }

  export type GameSessionChordUpdateManyWithoutChordNestedInput = {
    create?: XOR<GameSessionChordCreateWithoutChordInput, GameSessionChordUncheckedCreateWithoutChordInput> | GameSessionChordCreateWithoutChordInput[] | GameSessionChordUncheckedCreateWithoutChordInput[]
    connectOrCreate?: GameSessionChordCreateOrConnectWithoutChordInput | GameSessionChordCreateOrConnectWithoutChordInput[]
    upsert?: GameSessionChordUpsertWithWhereUniqueWithoutChordInput | GameSessionChordUpsertWithWhereUniqueWithoutChordInput[]
    createMany?: GameSessionChordCreateManyChordInputEnvelope
    set?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    disconnect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    delete?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    connect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    update?: GameSessionChordUpdateWithWhereUniqueWithoutChordInput | GameSessionChordUpdateWithWhereUniqueWithoutChordInput[]
    updateMany?: GameSessionChordUpdateManyWithWhereWithoutChordInput | GameSessionChordUpdateManyWithWhereWithoutChordInput[]
    deleteMany?: GameSessionChordScalarWhereInput | GameSessionChordScalarWhereInput[]
  }

  export type GameSessionChordUncheckedUpdateManyWithoutChordNestedInput = {
    create?: XOR<GameSessionChordCreateWithoutChordInput, GameSessionChordUncheckedCreateWithoutChordInput> | GameSessionChordCreateWithoutChordInput[] | GameSessionChordUncheckedCreateWithoutChordInput[]
    connectOrCreate?: GameSessionChordCreateOrConnectWithoutChordInput | GameSessionChordCreateOrConnectWithoutChordInput[]
    upsert?: GameSessionChordUpsertWithWhereUniqueWithoutChordInput | GameSessionChordUpsertWithWhereUniqueWithoutChordInput[]
    createMany?: GameSessionChordCreateManyChordInputEnvelope
    set?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    disconnect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    delete?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    connect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    update?: GameSessionChordUpdateWithWhereUniqueWithoutChordInput | GameSessionChordUpdateWithWhereUniqueWithoutChordInput[]
    updateMany?: GameSessionChordUpdateManyWithWhereWithoutChordInput | GameSessionChordUpdateManyWithWhereWithoutChordInput[]
    deleteMany?: GameSessionChordScalarWhereInput | GameSessionChordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGameSessionsInput = {
    create?: XOR<UserCreateWithoutGameSessionsInput, UserUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type InstrumentCreateNestedOneWithoutGameSessionsInput = {
    create?: XOR<InstrumentCreateWithoutGameSessionsInput, InstrumentUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutGameSessionsInput
    connect?: InstrumentWhereUniqueInput
  }

  export type LevelCreateNestedOneWithoutGameSessionsInput = {
    create?: XOR<LevelCreateWithoutGameSessionsInput, LevelUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutGameSessionsInput
    connect?: LevelWhereUniqueInput
  }

  export type GameSessionChordCreateNestedManyWithoutGameSessionInput = {
    create?: XOR<GameSessionChordCreateWithoutGameSessionInput, GameSessionChordUncheckedCreateWithoutGameSessionInput> | GameSessionChordCreateWithoutGameSessionInput[] | GameSessionChordUncheckedCreateWithoutGameSessionInput[]
    connectOrCreate?: GameSessionChordCreateOrConnectWithoutGameSessionInput | GameSessionChordCreateOrConnectWithoutGameSessionInput[]
    createMany?: GameSessionChordCreateManyGameSessionInputEnvelope
    connect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
  }

  export type GameSessionChordUncheckedCreateNestedManyWithoutGameSessionInput = {
    create?: XOR<GameSessionChordCreateWithoutGameSessionInput, GameSessionChordUncheckedCreateWithoutGameSessionInput> | GameSessionChordCreateWithoutGameSessionInput[] | GameSessionChordUncheckedCreateWithoutGameSessionInput[]
    connectOrCreate?: GameSessionChordCreateOrConnectWithoutGameSessionInput | GameSessionChordCreateOrConnectWithoutGameSessionInput[]
    createMany?: GameSessionChordCreateManyGameSessionInputEnvelope
    connect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
  }

  export type EnumGameModeFieldUpdateOperationsInput = {
    set?: $Enums.GameMode
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGameSessionsNestedInput = {
    create?: XOR<UserCreateWithoutGameSessionsInput, UserUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameSessionsInput
    upsert?: UserUpsertWithoutGameSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameSessionsInput, UserUpdateWithoutGameSessionsInput>, UserUncheckedUpdateWithoutGameSessionsInput>
  }

  export type InstrumentUpdateOneRequiredWithoutGameSessionsNestedInput = {
    create?: XOR<InstrumentCreateWithoutGameSessionsInput, InstrumentUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutGameSessionsInput
    upsert?: InstrumentUpsertWithoutGameSessionsInput
    connect?: InstrumentWhereUniqueInput
    update?: XOR<XOR<InstrumentUpdateToOneWithWhereWithoutGameSessionsInput, InstrumentUpdateWithoutGameSessionsInput>, InstrumentUncheckedUpdateWithoutGameSessionsInput>
  }

  export type LevelUpdateOneRequiredWithoutGameSessionsNestedInput = {
    create?: XOR<LevelCreateWithoutGameSessionsInput, LevelUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutGameSessionsInput
    upsert?: LevelUpsertWithoutGameSessionsInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutGameSessionsInput, LevelUpdateWithoutGameSessionsInput>, LevelUncheckedUpdateWithoutGameSessionsInput>
  }

  export type GameSessionChordUpdateManyWithoutGameSessionNestedInput = {
    create?: XOR<GameSessionChordCreateWithoutGameSessionInput, GameSessionChordUncheckedCreateWithoutGameSessionInput> | GameSessionChordCreateWithoutGameSessionInput[] | GameSessionChordUncheckedCreateWithoutGameSessionInput[]
    connectOrCreate?: GameSessionChordCreateOrConnectWithoutGameSessionInput | GameSessionChordCreateOrConnectWithoutGameSessionInput[]
    upsert?: GameSessionChordUpsertWithWhereUniqueWithoutGameSessionInput | GameSessionChordUpsertWithWhereUniqueWithoutGameSessionInput[]
    createMany?: GameSessionChordCreateManyGameSessionInputEnvelope
    set?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    disconnect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    delete?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    connect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    update?: GameSessionChordUpdateWithWhereUniqueWithoutGameSessionInput | GameSessionChordUpdateWithWhereUniqueWithoutGameSessionInput[]
    updateMany?: GameSessionChordUpdateManyWithWhereWithoutGameSessionInput | GameSessionChordUpdateManyWithWhereWithoutGameSessionInput[]
    deleteMany?: GameSessionChordScalarWhereInput | GameSessionChordScalarWhereInput[]
  }

  export type GameSessionChordUncheckedUpdateManyWithoutGameSessionNestedInput = {
    create?: XOR<GameSessionChordCreateWithoutGameSessionInput, GameSessionChordUncheckedCreateWithoutGameSessionInput> | GameSessionChordCreateWithoutGameSessionInput[] | GameSessionChordUncheckedCreateWithoutGameSessionInput[]
    connectOrCreate?: GameSessionChordCreateOrConnectWithoutGameSessionInput | GameSessionChordCreateOrConnectWithoutGameSessionInput[]
    upsert?: GameSessionChordUpsertWithWhereUniqueWithoutGameSessionInput | GameSessionChordUpsertWithWhereUniqueWithoutGameSessionInput[]
    createMany?: GameSessionChordCreateManyGameSessionInputEnvelope
    set?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    disconnect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    delete?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    connect?: GameSessionChordWhereUniqueInput | GameSessionChordWhereUniqueInput[]
    update?: GameSessionChordUpdateWithWhereUniqueWithoutGameSessionInput | GameSessionChordUpdateWithWhereUniqueWithoutGameSessionInput[]
    updateMany?: GameSessionChordUpdateManyWithWhereWithoutGameSessionInput | GameSessionChordUpdateManyWithWhereWithoutGameSessionInput[]
    deleteMany?: GameSessionChordScalarWhereInput | GameSessionChordScalarWhereInput[]
  }

  export type GameSessionCreateNestedOneWithoutChordsInput = {
    create?: XOR<GameSessionCreateWithoutChordsInput, GameSessionUncheckedCreateWithoutChordsInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutChordsInput
    connect?: GameSessionWhereUniqueInput
  }

  export type ChordCreateNestedOneWithoutGameSessionChordsInput = {
    create?: XOR<ChordCreateWithoutGameSessionChordsInput, ChordUncheckedCreateWithoutGameSessionChordsInput>
    connectOrCreate?: ChordCreateOrConnectWithoutGameSessionChordsInput
    connect?: ChordWhereUniqueInput
  }

  export type GameSessionUpdateOneRequiredWithoutChordsNestedInput = {
    create?: XOR<GameSessionCreateWithoutChordsInput, GameSessionUncheckedCreateWithoutChordsInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutChordsInput
    upsert?: GameSessionUpsertWithoutChordsInput
    connect?: GameSessionWhereUniqueInput
    update?: XOR<XOR<GameSessionUpdateToOneWithWhereWithoutChordsInput, GameSessionUpdateWithoutChordsInput>, GameSessionUncheckedUpdateWithoutChordsInput>
  }

  export type ChordUpdateOneRequiredWithoutGameSessionChordsNestedInput = {
    create?: XOR<ChordCreateWithoutGameSessionChordsInput, ChordUncheckedCreateWithoutGameSessionChordsInput>
    connectOrCreate?: ChordCreateOrConnectWithoutGameSessionChordsInput
    upsert?: ChordUpsertWithoutGameSessionChordsInput
    connect?: ChordWhereUniqueInput
    update?: XOR<XOR<ChordUpdateToOneWithWhereWithoutGameSessionChordsInput, ChordUpdateWithoutGameSessionChordsInput>, ChordUncheckedUpdateWithoutGameSessionChordsInput>
  }

  export type UserCreateNestedOneWithoutLeaderboardEntriesInput = {
    create?: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type LevelCreateNestedOneWithoutLeaderboardEntriesInput = {
    create?: XOR<LevelCreateWithoutLeaderboardEntriesInput, LevelUncheckedCreateWithoutLeaderboardEntriesInput>
    connectOrCreate?: LevelCreateOrConnectWithoutLeaderboardEntriesInput
    connect?: LevelWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLeaderboardEntriesNestedInput = {
    create?: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardEntriesInput
    upsert?: UserUpsertWithoutLeaderboardEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeaderboardEntriesInput, UserUpdateWithoutLeaderboardEntriesInput>, UserUncheckedUpdateWithoutLeaderboardEntriesInput>
  }

  export type LevelUpdateOneRequiredWithoutLeaderboardEntriesNestedInput = {
    create?: XOR<LevelCreateWithoutLeaderboardEntriesInput, LevelUncheckedCreateWithoutLeaderboardEntriesInput>
    connectOrCreate?: LevelCreateOrConnectWithoutLeaderboardEntriesInput
    upsert?: LevelUpsertWithoutLeaderboardEntriesInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutLeaderboardEntriesInput, LevelUpdateWithoutLeaderboardEntriesInput>, LevelUncheckedUpdateWithoutLeaderboardEntriesInput>
  }

  export type UserCreateNestedOneWithoutUserStatsInput = {
    create?: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStatsInput
    connect?: UserWhereUniqueInput
  }

  export type LevelCreateNestedOneWithoutUserStatsInput = {
    create?: XOR<LevelCreateWithoutUserStatsInput, LevelUncheckedCreateWithoutUserStatsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutUserStatsInput
    connect?: LevelWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserStatsNestedInput = {
    create?: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStatsInput
    upsert?: UserUpsertWithoutUserStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserStatsInput, UserUpdateWithoutUserStatsInput>, UserUncheckedUpdateWithoutUserStatsInput>
  }

  export type LevelUpdateOneWithoutUserStatsNestedInput = {
    create?: XOR<LevelCreateWithoutUserStatsInput, LevelUncheckedCreateWithoutUserStatsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutUserStatsInput
    upsert?: LevelUpsertWithoutUserStatsInput
    disconnect?: LevelWhereInput | boolean
    delete?: LevelWhereInput | boolean
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutUserStatsInput, LevelUpdateWithoutUserStatsInput>, LevelUncheckedUpdateWithoutUserStatsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGameModeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameModeFilter<$PrismaModel> | $Enums.GameMode
  }

  export type NestedEnumGameModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameModeWithAggregatesFilter<$PrismaModel> | $Enums.GameMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameModeFilter<$PrismaModel>
    _max?: NestedEnumGameModeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    type: $Enums.SubscriptionType
    status?: $Enums.SubscriptionStatus
    startDate?: Date | string
    endDate: Date | string
    amount: number
    currency?: string
    paymentMethod?: string | null
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.SubscriptionType
    status?: $Enums.SubscriptionStatus
    startDate?: Date | string
    endDate: Date | string
    amount: number
    currency?: string
    paymentMethod?: string | null
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type GameSessionCreateWithoutUserInput = {
    id?: string
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    instrument: InstrumentCreateNestedOneWithoutGameSessionsInput
    level: LevelCreateNestedOneWithoutGameSessionsInput
    chords?: GameSessionChordCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutUserInput = {
    id?: string
    instrumentId: string
    levelId: number
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    chords?: GameSessionChordUncheckedCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionCreateOrConnectWithoutUserInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput>
  }

  export type GameSessionCreateManyUserInputEnvelope = {
    data: GameSessionCreateManyUserInput | GameSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaderboardEntryCreateWithoutUserInput = {
    id?: string
    score: number
    accuracy: number
    streak: number
    gamesPlayed: number
    averageTimeMs?: number | null
    date?: Date | string
    rank?: number | null
    createdAt?: Date | string
    level: LevelCreateNestedOneWithoutLeaderboardEntriesInput
  }

  export type LeaderboardEntryUncheckedCreateWithoutUserInput = {
    id?: string
    levelId: number
    score: number
    accuracy: number
    streak: number
    gamesPlayed: number
    averageTimeMs?: number | null
    date?: Date | string
    rank?: number | null
    createdAt?: Date | string
  }

  export type LeaderboardEntryCreateOrConnectWithoutUserInput = {
    where: LeaderboardEntryWhereUniqueInput
    create: XOR<LeaderboardEntryCreateWithoutUserInput, LeaderboardEntryUncheckedCreateWithoutUserInput>
  }

  export type LeaderboardEntryCreateManyUserInputEnvelope = {
    data: LeaderboardEntryCreateManyUserInput | LeaderboardEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserStatsCreateWithoutUserInput = {
    id?: string
    date: Date | string
    gamesPlayed?: number
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    maxStreak?: number
    timePlayedMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: LevelCreateNestedOneWithoutUserStatsInput
  }

  export type UserStatsUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    gamesPlayed?: number
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    maxStreak?: number
    timePlayedMs?: number
    levelId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsCreateOrConnectWithoutUserInput = {
    where: UserStatsWhereUniqueInput
    create: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
  }

  export type UserStatsCreateManyUserInputEnvelope = {
    data: UserStatsCreateManyUserInput | UserStatsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutUserInput, GameSessionUncheckedUpdateWithoutUserInput>
    create: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutUserInput, GameSessionUncheckedUpdateWithoutUserInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutUserInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type GameSessionScalarWhereInput = {
    AND?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    OR?: GameSessionScalarWhereInput[]
    NOT?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    id?: StringFilter<"GameSession"> | string
    userId?: StringFilter<"GameSession"> | string
    instrumentId?: StringFilter<"GameSession"> | string
    levelId?: IntFilter<"GameSession"> | number
    gameMode?: EnumGameModeFilter<"GameSession"> | $Enums.GameMode
    isCompleted?: BoolFilter<"GameSession"> | boolean
    totalQuestions?: IntFilter<"GameSession"> | number
    correctAnswers?: IntFilter<"GameSession"> | number
    accuracy?: FloatFilter<"GameSession"> | number
    sessionStreak?: IntFilter<"GameSession"> | number
    maxStreak?: IntFilter<"GameSession"> | number
    startedAt?: DateTimeFilter<"GameSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    durationMs?: IntNullableFilter<"GameSession"> | number | null
  }

  export type LeaderboardEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaderboardEntryWhereUniqueInput
    update: XOR<LeaderboardEntryUpdateWithoutUserInput, LeaderboardEntryUncheckedUpdateWithoutUserInput>
    create: XOR<LeaderboardEntryCreateWithoutUserInput, LeaderboardEntryUncheckedCreateWithoutUserInput>
  }

  export type LeaderboardEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaderboardEntryWhereUniqueInput
    data: XOR<LeaderboardEntryUpdateWithoutUserInput, LeaderboardEntryUncheckedUpdateWithoutUserInput>
  }

  export type LeaderboardEntryUpdateManyWithWhereWithoutUserInput = {
    where: LeaderboardEntryScalarWhereInput
    data: XOR<LeaderboardEntryUpdateManyMutationInput, LeaderboardEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaderboardEntryScalarWhereInput = {
    AND?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[]
    OR?: LeaderboardEntryScalarWhereInput[]
    NOT?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[]
    id?: StringFilter<"LeaderboardEntry"> | string
    userId?: StringFilter<"LeaderboardEntry"> | string
    levelId?: IntFilter<"LeaderboardEntry"> | number
    score?: IntFilter<"LeaderboardEntry"> | number
    accuracy?: FloatFilter<"LeaderboardEntry"> | number
    streak?: IntFilter<"LeaderboardEntry"> | number
    gamesPlayed?: IntFilter<"LeaderboardEntry"> | number
    averageTimeMs?: IntNullableFilter<"LeaderboardEntry"> | number | null
    date?: DateTimeFilter<"LeaderboardEntry"> | Date | string
    rank?: IntNullableFilter<"LeaderboardEntry"> | number | null
    createdAt?: DateTimeFilter<"LeaderboardEntry"> | Date | string
  }

  export type UserStatsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserStatsWhereUniqueInput
    update: XOR<UserStatsUpdateWithoutUserInput, UserStatsUncheckedUpdateWithoutUserInput>
    create: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
  }

  export type UserStatsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserStatsWhereUniqueInput
    data: XOR<UserStatsUpdateWithoutUserInput, UserStatsUncheckedUpdateWithoutUserInput>
  }

  export type UserStatsUpdateManyWithWhereWithoutUserInput = {
    where: UserStatsScalarWhereInput
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserStatsScalarWhereInput = {
    AND?: UserStatsScalarWhereInput | UserStatsScalarWhereInput[]
    OR?: UserStatsScalarWhereInput[]
    NOT?: UserStatsScalarWhereInput | UserStatsScalarWhereInput[]
    id?: StringFilter<"UserStats"> | string
    userId?: StringFilter<"UserStats"> | string
    date?: DateTimeFilter<"UserStats"> | Date | string
    gamesPlayed?: IntFilter<"UserStats"> | number
    totalQuestions?: IntFilter<"UserStats"> | number
    correctAnswers?: IntFilter<"UserStats"> | number
    accuracy?: FloatFilter<"UserStats"> | number
    maxStreak?: IntFilter<"UserStats"> | number
    timePlayedMs?: IntFilter<"UserStats"> | number
    levelId?: IntNullableFilter<"UserStats"> | number | null
    createdAt?: DateTimeFilter<"UserStats"> | Date | string
    updatedAt?: DateTimeFilter<"UserStats"> | Date | string
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId?: string | null
    currentLevel?: number
    currentStreak?: number
    overallAccuracy?: number
    totalGamesPlayed?: number
    lastPlayedAt?: Date | string | null
    gameSessions?: GameSessionCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutUserInput
    userStats?: UserStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId?: string | null
    currentLevel?: number
    currentStreak?: number
    overallAccuracy?: number
    totalGamesPlayed?: number
    lastPlayedAt?: Date | string | null
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput
    userStats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameSessions?: GameSessionUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gameSessions?: GameSessionUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChordCreateWithoutInstrumentInput = {
    id?: string
    name: string
    displayName: string
    audioFileUrl?: string | null
    isActive?: boolean
    level: LevelCreateNestedOneWithoutChordsInput
    gameSessionChords?: GameSessionChordCreateNestedManyWithoutChordInput
  }

  export type ChordUncheckedCreateWithoutInstrumentInput = {
    id?: string
    name: string
    displayName: string
    audioFileUrl?: string | null
    levelId: number
    isActive?: boolean
    gameSessionChords?: GameSessionChordUncheckedCreateNestedManyWithoutChordInput
  }

  export type ChordCreateOrConnectWithoutInstrumentInput = {
    where: ChordWhereUniqueInput
    create: XOR<ChordCreateWithoutInstrumentInput, ChordUncheckedCreateWithoutInstrumentInput>
  }

  export type ChordCreateManyInstrumentInputEnvelope = {
    data: ChordCreateManyInstrumentInput | ChordCreateManyInstrumentInput[]
    skipDuplicates?: boolean
  }

  export type GameSessionCreateWithoutInstrumentInput = {
    id?: string
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    user: UserCreateNestedOneWithoutGameSessionsInput
    level: LevelCreateNestedOneWithoutGameSessionsInput
    chords?: GameSessionChordCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutInstrumentInput = {
    id?: string
    userId: string
    levelId: number
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    chords?: GameSessionChordUncheckedCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionCreateOrConnectWithoutInstrumentInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutInstrumentInput, GameSessionUncheckedCreateWithoutInstrumentInput>
  }

  export type GameSessionCreateManyInstrumentInputEnvelope = {
    data: GameSessionCreateManyInstrumentInput | GameSessionCreateManyInstrumentInput[]
    skipDuplicates?: boolean
  }

  export type ChordUpsertWithWhereUniqueWithoutInstrumentInput = {
    where: ChordWhereUniqueInput
    update: XOR<ChordUpdateWithoutInstrumentInput, ChordUncheckedUpdateWithoutInstrumentInput>
    create: XOR<ChordCreateWithoutInstrumentInput, ChordUncheckedCreateWithoutInstrumentInput>
  }

  export type ChordUpdateWithWhereUniqueWithoutInstrumentInput = {
    where: ChordWhereUniqueInput
    data: XOR<ChordUpdateWithoutInstrumentInput, ChordUncheckedUpdateWithoutInstrumentInput>
  }

  export type ChordUpdateManyWithWhereWithoutInstrumentInput = {
    where: ChordScalarWhereInput
    data: XOR<ChordUpdateManyMutationInput, ChordUncheckedUpdateManyWithoutInstrumentInput>
  }

  export type ChordScalarWhereInput = {
    AND?: ChordScalarWhereInput | ChordScalarWhereInput[]
    OR?: ChordScalarWhereInput[]
    NOT?: ChordScalarWhereInput | ChordScalarWhereInput[]
    id?: StringFilter<"Chord"> | string
    name?: StringFilter<"Chord"> | string
    displayName?: StringFilter<"Chord"> | string
    audioFileUrl?: StringNullableFilter<"Chord"> | string | null
    instrumentId?: StringFilter<"Chord"> | string
    levelId?: IntFilter<"Chord"> | number
    isActive?: BoolFilter<"Chord"> | boolean
  }

  export type GameSessionUpsertWithWhereUniqueWithoutInstrumentInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutInstrumentInput, GameSessionUncheckedUpdateWithoutInstrumentInput>
    create: XOR<GameSessionCreateWithoutInstrumentInput, GameSessionUncheckedCreateWithoutInstrumentInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutInstrumentInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutInstrumentInput, GameSessionUncheckedUpdateWithoutInstrumentInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutInstrumentInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutInstrumentInput>
  }

  export type ChordCreateWithoutLevelInput = {
    id?: string
    name: string
    displayName: string
    audioFileUrl?: string | null
    isActive?: boolean
    instrument: InstrumentCreateNestedOneWithoutChordsInput
    gameSessionChords?: GameSessionChordCreateNestedManyWithoutChordInput
  }

  export type ChordUncheckedCreateWithoutLevelInput = {
    id?: string
    name: string
    displayName: string
    audioFileUrl?: string | null
    instrumentId: string
    isActive?: boolean
    gameSessionChords?: GameSessionChordUncheckedCreateNestedManyWithoutChordInput
  }

  export type ChordCreateOrConnectWithoutLevelInput = {
    where: ChordWhereUniqueInput
    create: XOR<ChordCreateWithoutLevelInput, ChordUncheckedCreateWithoutLevelInput>
  }

  export type ChordCreateManyLevelInputEnvelope = {
    data: ChordCreateManyLevelInput | ChordCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type GameSessionCreateWithoutLevelInput = {
    id?: string
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    user: UserCreateNestedOneWithoutGameSessionsInput
    instrument: InstrumentCreateNestedOneWithoutGameSessionsInput
    chords?: GameSessionChordCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutLevelInput = {
    id?: string
    userId: string
    instrumentId: string
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    chords?: GameSessionChordUncheckedCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionCreateOrConnectWithoutLevelInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutLevelInput, GameSessionUncheckedCreateWithoutLevelInput>
  }

  export type GameSessionCreateManyLevelInputEnvelope = {
    data: GameSessionCreateManyLevelInput | GameSessionCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type LeaderboardEntryCreateWithoutLevelInput = {
    id?: string
    score: number
    accuracy: number
    streak: number
    gamesPlayed: number
    averageTimeMs?: number | null
    date?: Date | string
    rank?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLeaderboardEntriesInput
  }

  export type LeaderboardEntryUncheckedCreateWithoutLevelInput = {
    id?: string
    userId: string
    score: number
    accuracy: number
    streak: number
    gamesPlayed: number
    averageTimeMs?: number | null
    date?: Date | string
    rank?: number | null
    createdAt?: Date | string
  }

  export type LeaderboardEntryCreateOrConnectWithoutLevelInput = {
    where: LeaderboardEntryWhereUniqueInput
    create: XOR<LeaderboardEntryCreateWithoutLevelInput, LeaderboardEntryUncheckedCreateWithoutLevelInput>
  }

  export type LeaderboardEntryCreateManyLevelInputEnvelope = {
    data: LeaderboardEntryCreateManyLevelInput | LeaderboardEntryCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type UserStatsCreateWithoutLevelInput = {
    id?: string
    date: Date | string
    gamesPlayed?: number
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    maxStreak?: number
    timePlayedMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserStatsInput
  }

  export type UserStatsUncheckedCreateWithoutLevelInput = {
    id?: string
    userId: string
    date: Date | string
    gamesPlayed?: number
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    maxStreak?: number
    timePlayedMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsCreateOrConnectWithoutLevelInput = {
    where: UserStatsWhereUniqueInput
    create: XOR<UserStatsCreateWithoutLevelInput, UserStatsUncheckedCreateWithoutLevelInput>
  }

  export type UserStatsCreateManyLevelInputEnvelope = {
    data: UserStatsCreateManyLevelInput | UserStatsCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type ChordUpsertWithWhereUniqueWithoutLevelInput = {
    where: ChordWhereUniqueInput
    update: XOR<ChordUpdateWithoutLevelInput, ChordUncheckedUpdateWithoutLevelInput>
    create: XOR<ChordCreateWithoutLevelInput, ChordUncheckedCreateWithoutLevelInput>
  }

  export type ChordUpdateWithWhereUniqueWithoutLevelInput = {
    where: ChordWhereUniqueInput
    data: XOR<ChordUpdateWithoutLevelInput, ChordUncheckedUpdateWithoutLevelInput>
  }

  export type ChordUpdateManyWithWhereWithoutLevelInput = {
    where: ChordScalarWhereInput
    data: XOR<ChordUpdateManyMutationInput, ChordUncheckedUpdateManyWithoutLevelInput>
  }

  export type GameSessionUpsertWithWhereUniqueWithoutLevelInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutLevelInput, GameSessionUncheckedUpdateWithoutLevelInput>
    create: XOR<GameSessionCreateWithoutLevelInput, GameSessionUncheckedCreateWithoutLevelInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutLevelInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutLevelInput, GameSessionUncheckedUpdateWithoutLevelInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutLevelInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutLevelInput>
  }

  export type LeaderboardEntryUpsertWithWhereUniqueWithoutLevelInput = {
    where: LeaderboardEntryWhereUniqueInput
    update: XOR<LeaderboardEntryUpdateWithoutLevelInput, LeaderboardEntryUncheckedUpdateWithoutLevelInput>
    create: XOR<LeaderboardEntryCreateWithoutLevelInput, LeaderboardEntryUncheckedCreateWithoutLevelInput>
  }

  export type LeaderboardEntryUpdateWithWhereUniqueWithoutLevelInput = {
    where: LeaderboardEntryWhereUniqueInput
    data: XOR<LeaderboardEntryUpdateWithoutLevelInput, LeaderboardEntryUncheckedUpdateWithoutLevelInput>
  }

  export type LeaderboardEntryUpdateManyWithWhereWithoutLevelInput = {
    where: LeaderboardEntryScalarWhereInput
    data: XOR<LeaderboardEntryUpdateManyMutationInput, LeaderboardEntryUncheckedUpdateManyWithoutLevelInput>
  }

  export type UserStatsUpsertWithWhereUniqueWithoutLevelInput = {
    where: UserStatsWhereUniqueInput
    update: XOR<UserStatsUpdateWithoutLevelInput, UserStatsUncheckedUpdateWithoutLevelInput>
    create: XOR<UserStatsCreateWithoutLevelInput, UserStatsUncheckedCreateWithoutLevelInput>
  }

  export type UserStatsUpdateWithWhereUniqueWithoutLevelInput = {
    where: UserStatsWhereUniqueInput
    data: XOR<UserStatsUpdateWithoutLevelInput, UserStatsUncheckedUpdateWithoutLevelInput>
  }

  export type UserStatsUpdateManyWithWhereWithoutLevelInput = {
    where: UserStatsScalarWhereInput
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyWithoutLevelInput>
  }

  export type InstrumentCreateWithoutChordsInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
    gameSessions?: GameSessionCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUncheckedCreateWithoutChordsInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentCreateOrConnectWithoutChordsInput = {
    where: InstrumentWhereUniqueInput
    create: XOR<InstrumentCreateWithoutChordsInput, InstrumentUncheckedCreateWithoutChordsInput>
  }

  export type LevelCreateWithoutChordsInput = {
    number: number
    name: string
    description?: string | null
    isFree?: boolean
    isActive?: boolean
    gameSessions?: GameSessionCreateNestedManyWithoutLevelInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutLevelInput
    userStats?: UserStatsCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutChordsInput = {
    id?: number
    number: number
    name: string
    description?: string | null
    isFree?: boolean
    isActive?: boolean
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutLevelInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutLevelInput
    userStats?: UserStatsUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutChordsInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutChordsInput, LevelUncheckedCreateWithoutChordsInput>
  }

  export type GameSessionChordCreateWithoutChordInput = {
    id?: string
    sequenceOrder?: number
    userAnswer?: string | null
    isCorrect?: boolean
    responseTimeMs?: number | null
    playedAt?: Date | string
    gameSession: GameSessionCreateNestedOneWithoutChordsInput
  }

  export type GameSessionChordUncheckedCreateWithoutChordInput = {
    id?: string
    gameSessionId: string
    sequenceOrder?: number
    userAnswer?: string | null
    isCorrect?: boolean
    responseTimeMs?: number | null
    playedAt?: Date | string
  }

  export type GameSessionChordCreateOrConnectWithoutChordInput = {
    where: GameSessionChordWhereUniqueInput
    create: XOR<GameSessionChordCreateWithoutChordInput, GameSessionChordUncheckedCreateWithoutChordInput>
  }

  export type GameSessionChordCreateManyChordInputEnvelope = {
    data: GameSessionChordCreateManyChordInput | GameSessionChordCreateManyChordInput[]
    skipDuplicates?: boolean
  }

  export type InstrumentUpsertWithoutChordsInput = {
    update: XOR<InstrumentUpdateWithoutChordsInput, InstrumentUncheckedUpdateWithoutChordsInput>
    create: XOR<InstrumentCreateWithoutChordsInput, InstrumentUncheckedCreateWithoutChordsInput>
    where?: InstrumentWhereInput
  }

  export type InstrumentUpdateToOneWithWhereWithoutChordsInput = {
    where?: InstrumentWhereInput
    data: XOR<InstrumentUpdateWithoutChordsInput, InstrumentUncheckedUpdateWithoutChordsInput>
  }

  export type InstrumentUpdateWithoutChordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameSessions?: GameSessionUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentUncheckedUpdateWithoutChordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameSessions?: GameSessionUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type LevelUpsertWithoutChordsInput = {
    update: XOR<LevelUpdateWithoutChordsInput, LevelUncheckedUpdateWithoutChordsInput>
    create: XOR<LevelCreateWithoutChordsInput, LevelUncheckedCreateWithoutChordsInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutChordsInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutChordsInput, LevelUncheckedUpdateWithoutChordsInput>
  }

  export type LevelUpdateWithoutChordsInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameSessions?: GameSessionUpdateManyWithoutLevelNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutLevelNestedInput
    userStats?: UserStatsUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutChordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameSessions?: GameSessionUncheckedUpdateManyWithoutLevelNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutLevelNestedInput
    userStats?: UserStatsUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type GameSessionChordUpsertWithWhereUniqueWithoutChordInput = {
    where: GameSessionChordWhereUniqueInput
    update: XOR<GameSessionChordUpdateWithoutChordInput, GameSessionChordUncheckedUpdateWithoutChordInput>
    create: XOR<GameSessionChordCreateWithoutChordInput, GameSessionChordUncheckedCreateWithoutChordInput>
  }

  export type GameSessionChordUpdateWithWhereUniqueWithoutChordInput = {
    where: GameSessionChordWhereUniqueInput
    data: XOR<GameSessionChordUpdateWithoutChordInput, GameSessionChordUncheckedUpdateWithoutChordInput>
  }

  export type GameSessionChordUpdateManyWithWhereWithoutChordInput = {
    where: GameSessionChordScalarWhereInput
    data: XOR<GameSessionChordUpdateManyMutationInput, GameSessionChordUncheckedUpdateManyWithoutChordInput>
  }

  export type GameSessionChordScalarWhereInput = {
    AND?: GameSessionChordScalarWhereInput | GameSessionChordScalarWhereInput[]
    OR?: GameSessionChordScalarWhereInput[]
    NOT?: GameSessionChordScalarWhereInput | GameSessionChordScalarWhereInput[]
    id?: StringFilter<"GameSessionChord"> | string
    gameSessionId?: StringFilter<"GameSessionChord"> | string
    chordId?: StringFilter<"GameSessionChord"> | string
    sequenceOrder?: IntFilter<"GameSessionChord"> | number
    userAnswer?: StringNullableFilter<"GameSessionChord"> | string | null
    isCorrect?: BoolFilter<"GameSessionChord"> | boolean
    responseTimeMs?: IntNullableFilter<"GameSessionChord"> | number | null
    playedAt?: DateTimeFilter<"GameSessionChord"> | Date | string
  }

  export type UserCreateWithoutGameSessionsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId?: string | null
    currentLevel?: number
    currentStreak?: number
    overallAccuracy?: number
    totalGamesPlayed?: number
    lastPlayedAt?: Date | string | null
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutUserInput
    userStats?: UserStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGameSessionsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId?: string | null
    currentLevel?: number
    currentStreak?: number
    overallAccuracy?: number
    totalGamesPlayed?: number
    lastPlayedAt?: Date | string | null
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput
    userStats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGameSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameSessionsInput, UserUncheckedCreateWithoutGameSessionsInput>
  }

  export type InstrumentCreateWithoutGameSessionsInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
    chords?: ChordCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUncheckedCreateWithoutGameSessionsInput = {
    id?: string
    name: string
    displayName: string
    isActive?: boolean
    chords?: ChordUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentCreateOrConnectWithoutGameSessionsInput = {
    where: InstrumentWhereUniqueInput
    create: XOR<InstrumentCreateWithoutGameSessionsInput, InstrumentUncheckedCreateWithoutGameSessionsInput>
  }

  export type LevelCreateWithoutGameSessionsInput = {
    number: number
    name: string
    description?: string | null
    isFree?: boolean
    isActive?: boolean
    chords?: ChordCreateNestedManyWithoutLevelInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutLevelInput
    userStats?: UserStatsCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutGameSessionsInput = {
    id?: number
    number: number
    name: string
    description?: string | null
    isFree?: boolean
    isActive?: boolean
    chords?: ChordUncheckedCreateNestedManyWithoutLevelInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutLevelInput
    userStats?: UserStatsUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutGameSessionsInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutGameSessionsInput, LevelUncheckedCreateWithoutGameSessionsInput>
  }

  export type GameSessionChordCreateWithoutGameSessionInput = {
    id?: string
    sequenceOrder?: number
    userAnswer?: string | null
    isCorrect?: boolean
    responseTimeMs?: number | null
    playedAt?: Date | string
    chord: ChordCreateNestedOneWithoutGameSessionChordsInput
  }

  export type GameSessionChordUncheckedCreateWithoutGameSessionInput = {
    id?: string
    chordId: string
    sequenceOrder?: number
    userAnswer?: string | null
    isCorrect?: boolean
    responseTimeMs?: number | null
    playedAt?: Date | string
  }

  export type GameSessionChordCreateOrConnectWithoutGameSessionInput = {
    where: GameSessionChordWhereUniqueInput
    create: XOR<GameSessionChordCreateWithoutGameSessionInput, GameSessionChordUncheckedCreateWithoutGameSessionInput>
  }

  export type GameSessionChordCreateManyGameSessionInputEnvelope = {
    data: GameSessionChordCreateManyGameSessionInput | GameSessionChordCreateManyGameSessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGameSessionsInput = {
    update: XOR<UserUpdateWithoutGameSessionsInput, UserUncheckedUpdateWithoutGameSessionsInput>
    create: XOR<UserCreateWithoutGameSessionsInput, UserUncheckedCreateWithoutGameSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameSessionsInput, UserUncheckedUpdateWithoutGameSessionsInput>
  }

  export type UserUpdateWithoutGameSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGameSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InstrumentUpsertWithoutGameSessionsInput = {
    update: XOR<InstrumentUpdateWithoutGameSessionsInput, InstrumentUncheckedUpdateWithoutGameSessionsInput>
    create: XOR<InstrumentCreateWithoutGameSessionsInput, InstrumentUncheckedCreateWithoutGameSessionsInput>
    where?: InstrumentWhereInput
  }

  export type InstrumentUpdateToOneWithWhereWithoutGameSessionsInput = {
    where?: InstrumentWhereInput
    data: XOR<InstrumentUpdateWithoutGameSessionsInput, InstrumentUncheckedUpdateWithoutGameSessionsInput>
  }

  export type InstrumentUpdateWithoutGameSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentUncheckedUpdateWithoutGameSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type LevelUpsertWithoutGameSessionsInput = {
    update: XOR<LevelUpdateWithoutGameSessionsInput, LevelUncheckedUpdateWithoutGameSessionsInput>
    create: XOR<LevelCreateWithoutGameSessionsInput, LevelUncheckedCreateWithoutGameSessionsInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutGameSessionsInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutGameSessionsInput, LevelUncheckedUpdateWithoutGameSessionsInput>
  }

  export type LevelUpdateWithoutGameSessionsInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUpdateManyWithoutLevelNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutLevelNestedInput
    userStats?: UserStatsUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutGameSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUncheckedUpdateManyWithoutLevelNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutLevelNestedInput
    userStats?: UserStatsUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type GameSessionChordUpsertWithWhereUniqueWithoutGameSessionInput = {
    where: GameSessionChordWhereUniqueInput
    update: XOR<GameSessionChordUpdateWithoutGameSessionInput, GameSessionChordUncheckedUpdateWithoutGameSessionInput>
    create: XOR<GameSessionChordCreateWithoutGameSessionInput, GameSessionChordUncheckedCreateWithoutGameSessionInput>
  }

  export type GameSessionChordUpdateWithWhereUniqueWithoutGameSessionInput = {
    where: GameSessionChordWhereUniqueInput
    data: XOR<GameSessionChordUpdateWithoutGameSessionInput, GameSessionChordUncheckedUpdateWithoutGameSessionInput>
  }

  export type GameSessionChordUpdateManyWithWhereWithoutGameSessionInput = {
    where: GameSessionChordScalarWhereInput
    data: XOR<GameSessionChordUpdateManyMutationInput, GameSessionChordUncheckedUpdateManyWithoutGameSessionInput>
  }

  export type GameSessionCreateWithoutChordsInput = {
    id?: string
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
    user: UserCreateNestedOneWithoutGameSessionsInput
    instrument: InstrumentCreateNestedOneWithoutGameSessionsInput
    level: LevelCreateNestedOneWithoutGameSessionsInput
  }

  export type GameSessionUncheckedCreateWithoutChordsInput = {
    id?: string
    userId: string
    instrumentId: string
    levelId: number
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
  }

  export type GameSessionCreateOrConnectWithoutChordsInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutChordsInput, GameSessionUncheckedCreateWithoutChordsInput>
  }

  export type ChordCreateWithoutGameSessionChordsInput = {
    id?: string
    name: string
    displayName: string
    audioFileUrl?: string | null
    isActive?: boolean
    instrument: InstrumentCreateNestedOneWithoutChordsInput
    level: LevelCreateNestedOneWithoutChordsInput
  }

  export type ChordUncheckedCreateWithoutGameSessionChordsInput = {
    id?: string
    name: string
    displayName: string
    audioFileUrl?: string | null
    instrumentId: string
    levelId: number
    isActive?: boolean
  }

  export type ChordCreateOrConnectWithoutGameSessionChordsInput = {
    where: ChordWhereUniqueInput
    create: XOR<ChordCreateWithoutGameSessionChordsInput, ChordUncheckedCreateWithoutGameSessionChordsInput>
  }

  export type GameSessionUpsertWithoutChordsInput = {
    update: XOR<GameSessionUpdateWithoutChordsInput, GameSessionUncheckedUpdateWithoutChordsInput>
    create: XOR<GameSessionCreateWithoutChordsInput, GameSessionUncheckedCreateWithoutChordsInput>
    where?: GameSessionWhereInput
  }

  export type GameSessionUpdateToOneWithWhereWithoutChordsInput = {
    where?: GameSessionWhereInput
    data: XOR<GameSessionUpdateWithoutChordsInput, GameSessionUncheckedUpdateWithoutChordsInput>
  }

  export type GameSessionUpdateWithoutChordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutGameSessionsNestedInput
    instrument?: InstrumentUpdateOneRequiredWithoutGameSessionsNestedInput
    level?: LevelUpdateOneRequiredWithoutGameSessionsNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutChordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChordUpsertWithoutGameSessionChordsInput = {
    update: XOR<ChordUpdateWithoutGameSessionChordsInput, ChordUncheckedUpdateWithoutGameSessionChordsInput>
    create: XOR<ChordCreateWithoutGameSessionChordsInput, ChordUncheckedCreateWithoutGameSessionChordsInput>
    where?: ChordWhereInput
  }

  export type ChordUpdateToOneWithWhereWithoutGameSessionChordsInput = {
    where?: ChordWhereInput
    data: XOR<ChordUpdateWithoutGameSessionChordsInput, ChordUncheckedUpdateWithoutGameSessionChordsInput>
  }

  export type ChordUpdateWithoutGameSessionChordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    instrument?: InstrumentUpdateOneRequiredWithoutChordsNestedInput
    level?: LevelUpdateOneRequiredWithoutChordsNestedInput
  }

  export type ChordUncheckedUpdateWithoutGameSessionChordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutLeaderboardEntriesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId?: string | null
    currentLevel?: number
    currentStreak?: number
    overallAccuracy?: number
    totalGamesPlayed?: number
    lastPlayedAt?: Date | string | null
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    gameSessions?: GameSessionCreateNestedManyWithoutUserInput
    userStats?: UserStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeaderboardEntriesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId?: string | null
    currentLevel?: number
    currentStreak?: number
    overallAccuracy?: number
    totalGamesPlayed?: number
    lastPlayedAt?: Date | string | null
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutUserInput
    userStats?: UserStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeaderboardEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput>
  }

  export type LevelCreateWithoutLeaderboardEntriesInput = {
    number: number
    name: string
    description?: string | null
    isFree?: boolean
    isActive?: boolean
    chords?: ChordCreateNestedManyWithoutLevelInput
    gameSessions?: GameSessionCreateNestedManyWithoutLevelInput
    userStats?: UserStatsCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutLeaderboardEntriesInput = {
    id?: number
    number: number
    name: string
    description?: string | null
    isFree?: boolean
    isActive?: boolean
    chords?: ChordUncheckedCreateNestedManyWithoutLevelInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutLevelInput
    userStats?: UserStatsUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutLeaderboardEntriesInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutLeaderboardEntriesInput, LevelUncheckedCreateWithoutLeaderboardEntriesInput>
  }

  export type UserUpsertWithoutLeaderboardEntriesInput = {
    update: XOR<UserUpdateWithoutLeaderboardEntriesInput, UserUncheckedUpdateWithoutLeaderboardEntriesInput>
    create: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeaderboardEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeaderboardEntriesInput, UserUncheckedUpdateWithoutLeaderboardEntriesInput>
  }

  export type UserUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    gameSessions?: GameSessionUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LevelUpsertWithoutLeaderboardEntriesInput = {
    update: XOR<LevelUpdateWithoutLeaderboardEntriesInput, LevelUncheckedUpdateWithoutLeaderboardEntriesInput>
    create: XOR<LevelCreateWithoutLeaderboardEntriesInput, LevelUncheckedCreateWithoutLeaderboardEntriesInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutLeaderboardEntriesInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutLeaderboardEntriesInput, LevelUncheckedUpdateWithoutLeaderboardEntriesInput>
  }

  export type LevelUpdateWithoutLeaderboardEntriesInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUpdateManyWithoutLevelNestedInput
    gameSessions?: GameSessionUpdateManyWithoutLevelNestedInput
    userStats?: UserStatsUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutLeaderboardEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUncheckedUpdateManyWithoutLevelNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutLevelNestedInput
    userStats?: UserStatsUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type UserCreateWithoutUserStatsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId?: string | null
    currentLevel?: number
    currentStreak?: number
    overallAccuracy?: number
    totalGamesPlayed?: number
    lastPlayedAt?: Date | string | null
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    gameSessions?: GameSessionCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserStatsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId?: string | null
    currentLevel?: number
    currentStreak?: number
    overallAccuracy?: number
    totalGamesPlayed?: number
    lastPlayedAt?: Date | string | null
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
  }

  export type LevelCreateWithoutUserStatsInput = {
    number: number
    name: string
    description?: string | null
    isFree?: boolean
    isActive?: boolean
    chords?: ChordCreateNestedManyWithoutLevelInput
    gameSessions?: GameSessionCreateNestedManyWithoutLevelInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutUserStatsInput = {
    id?: number
    number: number
    name: string
    description?: string | null
    isFree?: boolean
    isActive?: boolean
    chords?: ChordUncheckedCreateNestedManyWithoutLevelInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutLevelInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutUserStatsInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutUserStatsInput, LevelUncheckedCreateWithoutUserStatsInput>
  }

  export type UserUpsertWithoutUserStatsInput = {
    update: XOR<UserUpdateWithoutUserStatsInput, UserUncheckedUpdateWithoutUserStatsInput>
    create: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserStatsInput, UserUncheckedUpdateWithoutUserStatsInput>
  }

  export type UserUpdateWithoutUserStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    gameSessions?: GameSessionUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    overallAccuracy?: FloatFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LevelUpsertWithoutUserStatsInput = {
    update: XOR<LevelUpdateWithoutUserStatsInput, LevelUncheckedUpdateWithoutUserStatsInput>
    create: XOR<LevelCreateWithoutUserStatsInput, LevelUncheckedCreateWithoutUserStatsInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutUserStatsInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutUserStatsInput, LevelUncheckedUpdateWithoutUserStatsInput>
  }

  export type LevelUpdateWithoutUserStatsInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUpdateManyWithoutLevelNestedInput
    gameSessions?: GameSessionUpdateManyWithoutLevelNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutUserStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFree?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    chords?: ChordUncheckedUpdateManyWithoutLevelNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutLevelNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type GameSessionCreateManyUserInput = {
    id?: string
    instrumentId: string
    levelId: number
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
  }

  export type LeaderboardEntryCreateManyUserInput = {
    id?: string
    levelId: number
    score: number
    accuracy: number
    streak: number
    gamesPlayed: number
    averageTimeMs?: number | null
    date?: Date | string
    rank?: number | null
    createdAt?: Date | string
  }

  export type UserStatsCreateManyUserInput = {
    id?: string
    date: Date | string
    gamesPlayed?: number
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    maxStreak?: number
    timePlayedMs?: number
    levelId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    instrument?: InstrumentUpdateOneRequiredWithoutGameSessionsNestedInput
    level?: LevelUpdateOneRequiredWithoutGameSessionsNestedInput
    chords?: GameSessionChordUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    chords?: GameSessionChordUncheckedUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaderboardEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    averageTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: LevelUpdateOneRequiredWithoutLeaderboardEntriesNestedInput
  }

  export type LeaderboardEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    averageTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    averageTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    timePlayedMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: LevelUpdateOneWithoutUserStatsNestedInput
  }

  export type UserStatsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    timePlayedMs?: IntFieldUpdateOperationsInput | number
    levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    timePlayedMs?: IntFieldUpdateOperationsInput | number
    levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChordCreateManyInstrumentInput = {
    id?: string
    name: string
    displayName: string
    audioFileUrl?: string | null
    levelId: number
    isActive?: boolean
  }

  export type GameSessionCreateManyInstrumentInput = {
    id?: string
    userId: string
    levelId: number
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
  }

  export type ChordUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    level?: LevelUpdateOneRequiredWithoutChordsNestedInput
    gameSessionChords?: GameSessionChordUpdateManyWithoutChordNestedInput
  }

  export type ChordUncheckedUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    levelId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameSessionChords?: GameSessionChordUncheckedUpdateManyWithoutChordNestedInput
  }

  export type ChordUncheckedUpdateManyWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    levelId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameSessionUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutGameSessionsNestedInput
    level?: LevelUpdateOneRequiredWithoutGameSessionsNestedInput
    chords?: GameSessionChordUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    chords?: GameSessionChordUncheckedUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChordCreateManyLevelInput = {
    id?: string
    name: string
    displayName: string
    audioFileUrl?: string | null
    instrumentId: string
    isActive?: boolean
  }

  export type GameSessionCreateManyLevelInput = {
    id?: string
    userId: string
    instrumentId: string
    gameMode?: $Enums.GameMode
    isCompleted?: boolean
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    sessionStreak?: number
    maxStreak?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    durationMs?: number | null
  }

  export type LeaderboardEntryCreateManyLevelInput = {
    id?: string
    userId: string
    score: number
    accuracy: number
    streak: number
    gamesPlayed: number
    averageTimeMs?: number | null
    date?: Date | string
    rank?: number | null
    createdAt?: Date | string
  }

  export type UserStatsCreateManyLevelInput = {
    id?: string
    userId: string
    date: Date | string
    gamesPlayed?: number
    totalQuestions?: number
    correctAnswers?: number
    accuracy?: number
    maxStreak?: number
    timePlayedMs?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChordUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    instrument?: InstrumentUpdateOneRequiredWithoutChordsNestedInput
    gameSessionChords?: GameSessionChordUpdateManyWithoutChordNestedInput
  }

  export type ChordUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameSessionChords?: GameSessionChordUncheckedUpdateManyWithoutChordNestedInput
  }

  export type ChordUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    audioFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameSessionUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutGameSessionsNestedInput
    instrument?: InstrumentUpdateOneRequiredWithoutGameSessionsNestedInput
    chords?: GameSessionChordUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    chords?: GameSessionChordUncheckedUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    gameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    sessionStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaderboardEntryUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    averageTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeaderboardEntriesNestedInput
  }

  export type LeaderboardEntryUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    averageTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardEntryUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    averageTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    timePlayedMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserStatsNestedInput
  }

  export type UserStatsUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    timePlayedMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    correctAnswers?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    timePlayedMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionChordCreateManyChordInput = {
    id?: string
    gameSessionId: string
    sequenceOrder?: number
    userAnswer?: string | null
    isCorrect?: boolean
    responseTimeMs?: number | null
    playedAt?: Date | string
  }

  export type GameSessionChordUpdateWithoutChordInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameSession?: GameSessionUpdateOneRequiredWithoutChordsNestedInput
  }

  export type GameSessionChordUncheckedUpdateWithoutChordInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameSessionId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionChordUncheckedUpdateManyWithoutChordInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameSessionId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionChordCreateManyGameSessionInput = {
    id?: string
    chordId: string
    sequenceOrder?: number
    userAnswer?: string | null
    isCorrect?: boolean
    responseTimeMs?: number | null
    playedAt?: Date | string
  }

  export type GameSessionChordUpdateWithoutGameSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chord?: ChordUpdateOneRequiredWithoutGameSessionChordsNestedInput
  }

  export type GameSessionChordUncheckedUpdateWithoutGameSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    chordId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionChordUncheckedUpdateManyWithoutGameSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    chordId?: StringFieldUpdateOperationsInput | string
    sequenceOrder?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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